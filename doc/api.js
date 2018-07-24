var fs = require('fs');
var mkdir = require('mkdir-p');
var path = require('path');
var apiClient = require('ymt-node-apiclient');
var globalList = {};
var searchWord = [];
var allFileMap = {};
var pathFileList = [];
var normalHeader = [
  ['accept-version', 'String', '服务端版本号'],
  ['accept-key', 'String', '服务端分配的调用方唯一名称代码'],
  ['app-version', 'String', '客户端版本号'],
  ['deviceid', 'String', '唯一设备号'],
  ['timestamp', 'String', '时间戳(单位毫秒)'],
  ['sign', 'String', '签名'],
  ['ymt-pars', 'String', '需要登录权限的接口需要在这里传userid和accesstoken\naccesstoken: 登录令牌\nformat: api结果的响应格式,xml,json,jsonp\nidfa: ios的IDFA\nimei: android的IMEI\nnetwork: 网络,wifi,3g,4g\nclient: 客户端，ios,android,h5\ntype: app类型,buyer,seller\nchannel: 渠道\nos: 客户端操作系统\nuserid: 用户UserID\nyid:搜索所需yid\neg:accesstoken=0&format=json&idfa=1&imei=2&network=wifi&client=ios&type=buyer&channel=appstore&os=ios9.1&userid=123456&yid']
];
var startPath = '/public/edit';
var moduleUseApi = {};

globalList = getGroupList(path.join(__dirname, startPath), [], true);
getAllFileMap(globalList, searchWord, allFileMap, null, pathFileList);

exports.getDocList = function () {
  globalList = getGroupList(path.join(__dirname, startPath), [], true);
  this.emit('packet', {method: 'getDocList', list: globalList});

  if (searchWord.length == 0) getAllFileMap(globalList, searchWord, allFileMap, null, pathFileList);
};

setInterval(function () {
  var d = new Date();
  if (d.getSeconds() == 0 && Object.keys(globalList).length) {
    searchWord = [];
    allFileMap = {};
    pathFileList = [];
    moduleUseApi = {};
    getAllFileMap(globalList, searchWord, allFileMap, null, pathFileList);
  }
},1000);

function getVersionInfo(group, subGroup, apiName) {
  if (!subGroup || subGroup == 'undefined') subGroup = '';
  var versions = [];
  var files = fs.readdirSync(path.join(__dirname, startPath, group, subGroup));
  files.forEach(function (fileName) {
    if (fileName.indexOf(apiName + '_') != 0) {
      return;
    }
    var file = fs.readFileSync(path.join(__dirname, startPath, group, subGroup, fileName));
    if (file) {
      var obj = JSON.parse(file.toString());
      versions.push(obj.version);
    }
  });
  return versions;
}

exports.getDocContent = function (group, subGroup, apiName, version) {
  if (!subGroup || subGroup == 'undefined') subGroup = '';
  var apiInfo = getApiInfo(group, subGroup, apiName, version);
  delete apiInfo.apiDescription;
  delete apiInfo.apiGroup;
  delete apiInfo.apiPermission;
  delete apiInfo.apiUse;
  delete apiInfo.header;

  apiInfo.group = group;
  apiInfo.subGroup = subGroup;
  apiInfo.apiName = apiName;
  apiInfo.versionList = getVersionInfo(group, subGroup, apiName);
  apiInfo.header = normalHeader;
  if (!Array.isArray(apiInfo.relyOn)) apiInfo.relyOn = [[]];
  apiInfo.moduleInfo = getAllModule();
  this.emit('packet', {method: 'getDocContent', info: apiInfo});
};

exports.getAllApi = function () {
  this.emit('packet', {method: 'getAllApi', info: pathFileList});
};

exports.getDocContentModule = function (group, apiName) {
  var fileName = apiName + '.json';
  var obj;
  var usage = [];

  if (!moduleUseApi[apiName]) moduleUseApi[apiName] = [];

  moduleUseApi[apiName].forEach(function (info) {
    usage.push([info.group, info.apiName, info.path, info.version]);
  });

  try {
    var file = fs.readFileSync(path.join(__dirname, startPath, group, fileName));
    if (file) {
      obj = JSON.parse(file.toString());
      obj.group = group;
      obj.apiName = apiName;
      obj.moduleInfo = getAllModule();
      obj.usage = usage;
      if (!Array.isArray(obj.relyOn)) obj.relyOn = [[]];
      this.emit('packet', {method: 'getDocContentModule', info: obj});
    }
  }
  catch (e) {
    console.log(1,e);
  }
};

function getAllModule() {
  var fullPath = path.join(__dirname, startPath, '公共模块');
  var dir = fs.readdirSync(fullPath);
  var moduleInfo = {};
  //遍历所有文件及文件夹
  dir.forEach(function (fileOrDir) {
    var filePath = path.join(fullPath, fileOrDir);
    var fileStat = fs.statSync(filePath);
    if (!fileStat) return;
    //如果为目录则递归运算
    if (!fileStat.isDirectory()) {
      var str = fs.readFileSync(filePath);
      try {
        moduleInfo['公共模块->'+fileOrDir.replace('.json','')] = JSON.parse(str);
      }
      catch (e) {
        // console.log(2,e);
      }
    }
  });

  return moduleInfo;
}

exports.saveEdit = function (info) {
  //存入文件
  var filePath = getFilePath(info);
  delete info.moduleInfo;
  delete info.header;
  delete info.versionList;

  mkdir.sync(filePath.slice(0, filePath.lastIndexOf('\\')));
  fs.writeFileSync(filePath, JSON.stringify(info, null, 2));
};

exports.delApi = function (info) {
  if (info.group == '公共模块') return this.emit('packet', {method: 'delApi', info: 'failed', msg:'公共模块不允许删除'});
  fs.unlinkSync(getFilePath(info));
  this.emit('packet', {method: 'delApi', info: 'success'})
};

exports.createApi = function (group, subGroup, apiName, version, curInfo) {
  var info = {
    "path": "",
    "apiGroup": group,
    "version": !version || version.length == 0 ? '1.0.0' : version,
    "method": "get",
    params: {},
    paramsDesc: {},
    success: {},
    successDesc: {}
  };

  if (curInfo) {
    info = curInfo;
    info.version = !version || version.length == 0 ? '1.0.0' : version;
  }

  if (group == '公共模块') info.version = version = undefined;
  var filePath = path.join(__dirname, startPath, group, subGroup);
  var fileName = apiName + (info.version ? '_' + info.version : '') + '.json';
  var data;
  try {
    data = fs.readFileSync(path.join(filePath, fileName));
  }
  catch (e) {

  }
  if (data) return this.emit('packet', {method: 'createApi', success: false, msg: '文档已存在'});

  mkdir.sync(filePath);
  fs.writeFileSync(path.join(filePath, fileName), JSON.stringify(info, false, 2));
  this.emit('packet', {
    method: 'createApi',
    success: true,
    msg: '创建成功',
    group: group,
    subGroup: subGroup,
    apiName: apiName,
    version: version
  });
};

exports.tryCall = function (info) {
  var host = info.path.slice(0, info.path.indexOf('com') + 3);
  // host = host.replace('app.ymatou.com', 'localhost:4000');
  var path = info.path.slice(info.path.indexOf('com') + 3);
  var call = {
    method: info.method.toLowerCase(),
    headers: {
      "app-version": "100.0.0",
      "sign":"b0c3932c3445839f95960c812672c800",
      "Content-Type": "application/json",
      "accept-version": info.version || '1.0.0',
      "ymt-pars": "userid=4085" +
      "&accesstoken=FE1080460F4FEEF9B3D8E71A1B969EBF70B2B19A354A7CF564D177646C1B44541E612B7DD578B6DFB8BD93F8D991FA68AA6CB85D61396B8C" +
      "&client=ios"
    },
    path: path,
    host: host
  };

  var params = info.params;
  var self = this;
  apiClient.exec(call, params, function (err, body) {
    self.emit('packet', {
      method: 'tryCall',
      err: err,
      body: body
    });
  })
};

//搜索接口
exports.search = function (keyword) {
  var list = [];
  //删除左右两端的空格
  keyword = keyword.replace(/(^\s*)|(\s*$)/g, "");
  keyword = keyword.toLocaleLowerCase();

  list = getNodeBySearch(keyword);
  this.emit('packet', {
    method: 'search',
    success: true,
    msg: 'content',
    list: list.slice(0, 20)
  });
};

//读取文件
function getGroupList(fullPath, gMap, init) {
  //读取目录
  var dir = fs.readdirSync(fullPath);
  if (!dir || dir.length <= 0) return gMap;
  var _fileNames = {};
  //遍历所有文件及文件夹
  dir.forEach(function (fileOrDir) {
    var fileStat = fs.statSync(path.join(fullPath, fileOrDir));
    if (!fileStat) return;
    //init
    var _item = {
      name: fileOrDir,
      list: []
    };
    //如果为目录则递归运算
    if (fileStat.isDirectory()) {
      var _path = path.join(fullPath, fileOrDir);
      var _dir = fs.readdirSync(_path);
      if (!_dir || _dir.length <= 0) return;
      getGroupList(_path, _item);
      if (init) gMap.push(_item);
      else gMap.list.push(_item);
    } else {
      if (init) return;
      if (fileOrDir.lastIndexOf('_') > 0) _item.name = fileOrDir.slice(0, fileOrDir.lastIndexOf('_'));
      else _item.name = _item.name.replace('.json', '');
      _item.filePath = fullPath+'/'+fileOrDir;
      var _gmp = undefined;
      if (init) _gmp = gMap;
      else _gmp = gMap.list;
      if (!_fileNames[_item.name]) {
        _fileNames[_item.name] = _item;
        _gmp.push(_item);
      }
      else {
        _fileNames[_item.name].filePath = _item.filePath;
      }
    }
  });
  return gMap;
}

function getApiInfo(group, subGroup, apiName, version) {
  if (!subGroup) subGroup = '';
  var versionList = [];
  if (!version) {
    versionList = getVersionInfo(group, subGroup, apiName);
    version = versionList[versionList.length - 1];
  }

  var fileName = apiName + (version ? '_' + version : '') + '.json';
  try {
    var file = fs.readFileSync(path.join(__dirname, startPath, group, subGroup, fileName));
    if (file) {
      var obj = JSON.parse(file.toString());
      return obj;
    }
  }
  catch (e) {
    console.log(3,e);
    return e.message;
  }
}

function getFilePath(info) {
  return path.join(__dirname, startPath, info.group, info.subGroup || '', info.apiName + (info.version ? '_' + info.version : '') + '.json');
}
//获取 搜索用的 关键字和文件信息
function getAllFileMap(list, allSearchWord, allFileMap, subGroup, pathFileList) {
  var moduleNames = Object.keys(getAllModule());
  moduleNames.forEach(function (name) {
    name = name.replace('公共模块->', '');
  });

  list.forEach(function (group) {
    if (group && group.list && group.list.length > 0) {
      getAllFileMap(group.list, allSearchWord, allFileMap, subGroup?subGroup+'==='+(group.name || ''):group.name, pathFileList);
    }
    else {
      if (!group.filePath) return;
      var fileContent = fs.readFileSync(group.filePath);
      fileContent = JSON.parse(fileContent);
      if (!fileContent || !group.name) return;

      var info = {};
      info.name = group.name;
      if (subGroup.indexOf('===') > 0) {
        subGroup = subGroup.split('===');
      }
      if (Array.isArray(subGroup)) {
        info.group = subGroup[0];
        info.subGroup = subGroup[1];
      }
      else{
        info.group = subGroup;
      }

      allSearchWord.push(group.name);
      allFileMap[group.name] = info;
      if (fileContent.path) {
        if (fileContent.path.indexOf('http://') != 0) fileContent.path = 'http://app.ymatou.com/api/'+fileContent.path;
        allSearchWord.push(fileContent.path);
        allFileMap[fileContent.path] = info;
        info.path = fileContent.path;
        info.method = fileContent.method;
        info.version = fileContent.version;
        info.relyOn = fileContent.relyOn || [];
        var successStr = JSON.stringify(fileContent.success)+JSON.stringify(fileContent.params);
        var useModuleArr = [];
        moduleNames.forEach(function (name) {
          name = name.replace('公共模块->', '');
          if (successStr.indexOf(name) > 0) {
            if (!moduleUseApi[name]) moduleUseApi[name] = [fileContent];
            else moduleUseApi[name].push(fileContent);
            info.relyOn.push([name,'','公共服务','']);
          }
        });
        pathFileList.push(info);
      }
    }
  });
}

//搜索 文档
function getNodeBySearch(keyword) {
  var searchFilePath = [];
  searchWord.forEach(function (word) {
    if (word.indexOf(keyword) >= 0) {
      if (!allFileMap[word]) return;
      var info = allFileMap[word];
      info.path = (info.group || '') + '->' + (info.subGroup ? (info.subGroup + '->') : '') + info.name;
      searchFilePath.push(info);
    }
  });

  return searchFilePath;
}