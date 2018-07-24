var request = require('request');
var fs = require('fs');

var paramId = 120;
var moduleId = 10;
var pageId = 11;
var actionId = 12;

var moduleMap = {};
var pageMap = {};

var allDoc = {
  "createDateStr": "2016-12-9",
  "user": {
    "name": "孙香冬",
    "id": 14
  },
  "id": 7,
  "version": "0.0.0.31",
  "introduction": "",
  "name": group,
  "moduleList": [

  ]
};

var publicPath = './public/edit/公共模块';
var publicFiles = fs.readdirSync(publicPath);

var publicModuleMap = {};
var publicModuleDescMap = {};
publicFiles.forEach(function (file) {
  publicModuleMap[file.replace('.json', '')] = JSON.parse(fs.readFileSync(publicPath+'/'+file)).success;
  publicModuleMap[file.replace('.json', '')].moduleName = file.replace('.json', '');
  publicModuleDescMap[file.replace('.json', '')] = JSON.parse(fs.readFileSync(publicPath+'/'+file)).successDesc;
  publicModuleDescMap[file.replace('.json', '')].moduleName = file.replace('.json', '');
});

replacePublicModule(publicModuleMap['商品卡片']);

var path = './public/edit/social.app';
var group = 'social.app';
var files = fs.readdirSync(path);
function readFile(fileName, rootPath) {
  var stat = fs.statSync(rootPath+'/'+fileName);
  if (stat.isDirectory()) {
    var files = fs.readdirSync(rootPath+'/'+fileName);
    for (var i = 0; i < files.length; i++)
      readFile(files[i], rootPath+'/'+fileName)
    return;
  }
  var file = fs.readFileSync(rootPath+'/'+fileName);
  // if (fileName.indexOf('添加用户账户') < 0) return
  var o = JSON.parse(file);
  replacePublicModule(o.success);
  replacePublicModule(o.params);
  transform(o);
}

function replacePublicModule(params) {
  if (Array.isArray(params)) {
    if (typeof params[0] != 'string') replacePublicModule(params[0]);
    else {
      var name = params[0].replace('公共模块->', '');
    if (publicModuleMap[name]) {
      params[0] = publicModuleMap[name];
    }
  }
    return;
  }
  for (var key in params) {
    key = key.replace('公共模块->', '');
    if (key == 'moduleName') continue;
    if (typeof params[key] == 'string' && publicModuleMap[params[key]]) {
      params[key] = publicModuleMap[params[key]];
    }
    if (typeof params[key] == 'object') {
      replacePublicModule(params[key]);
    }
  }
}

for (var i = 0; i < files.length; i++) {
  readFile(files[i], path);
}

var ret = {};
ret.modelJSON = JSON.stringify(allDoc);
console.log(allDoc)
console.log(JSON.stringify(allDoc,false,2))
console.log(JSON.stringify(ret));

function getModule(doc) {
  // group = doc.apiGroup || group;
  group = group.replace('.app', '');
  group = group.toLocaleLowerCase();
  if (moduleMap[group]) return moduleMap[group];

  var module = {
    "id": ++moduleId,
    "introduction": "",
    "name": group,
    "pageList":[]
  };

  moduleMap[group] = module;
  allDoc.moduleList.push(module);

  return module;
}

function getPage(doc) {
  var pageName = doc.apiDescription || doc.apiName;
  pageName = pageName.toLowerCase();
  if (pageMap[pageName]) return pageMap[pageName];

  var page = {
    "id": pageId++,
    "introduction": "",
    "name": pageName,
    actionList:[]
  };

  pageMap[pageName] = page;

  return page;
}

function transform(doc) {
  var module = getModule(doc);

  var page = getPage(doc);
  module.pageList.push(page);

  var action = {
    "id": actionId++,
    "name": doc.version,
    "description": "",
    "requestType": doc.method=='get'?"1":"2",
    "requestUrl": doc.path,
    "responseTemplate": ""
  };
  page.actionList.push(action);
  action.requestParameterList = getParam(doc.params, doc.paramsDesc);
  action.responseParameterList = getParam(doc.success, doc.successDesc);
}

function getPublicModuleDesc(params, key, path) {
  if (typeof params != 'object') return '';
  if (!publicModuleDescMap[params.moduleName]) return '';
  return publicModuleDescMap[params.moduleName][key] ||publicModuleDescMap[params.moduleName][path+'.'+key]|| '';
}

function getParam(params, desc, arr, path) {
  var paramsArr = arr || [];
  for (var key in params) {
    if (key == 'moduleName') continue;
    var paramObj = {
      "identifier": key,
      "name": desc[path?path+'.'+key:key] || getPublicModuleDesc(params, key, path),
      "remark": "",
      "parameterList": [],
      "validator": ""
    };
    while (paramObj.name.indexOf('<br/>') >= 0) {
      paramObj.name = paramObj.name.replace('<br/>', '')
    }

    while (paramObj.name.indexOf('/') >= 0) {
      paramObj.name = paramObj.name.replace('/', '或')
    }

    paramObj.id = ++paramId;

    if (Array.isArray(params[key])) {
      paramObj.dataType = 'array<'+typeof params[key][0]+'>';
      if (typeof params[key][0] == 'object') {
        getParam(params[key][0], desc, paramObj.parameterList, path?path+'.'+key+'.0':key+'.0');
      }
    }
    else {
      paramObj.dataType = typeof params[key];
      if (typeof params[key] == 'object') {
        getParam(params[key], desc, paramObj.parameterList, path?path+'.'+key:key);
      }
    }

    paramsArr.push(paramObj);
  }

  return paramsArr;
}

