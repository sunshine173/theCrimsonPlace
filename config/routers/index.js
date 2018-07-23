let express = require('express');
let router = express.Router();
let dbService = require('../db/db_service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/configlist', async function (req, res, next) {
  let allList = await dbService.getConfigList();
  let allConfig = [];
  let allEnum = [];
  let allStruct = [];
  allList.forEach(function (config) {
    switch (config.type) {
      case 1://枚举
        allEnum.push(config.name);
        break;
      case 2://配置结构
        allStruct.push(config.name);
        break;
      case 3://配置
        allConfig.push(config.name);
        break;
    }
  });
  res.send({config:allConfig, enum: allEnum, struct:allStruct});
});

router.post('/saveConfig', async function (req, res, next) {
  let configName = req.body.name;
  let type = req.body.type;
  let config = req.body.config || [];
  let struct = req.body.struct || [];
  type = parseInt(type);
  let saveObj = {
    "name" : configName,
    "type" : type,
    "config" : config,
    "struct" : struct,
    "updateTime" : Date.now()
  };
  let result = await dbService.updateConfig(saveObj).catch(err=>errHandler(res, err));
  if (result) res.send("success");
});
router.post('/createConfig', async function (req, res, next) {
  let configName = req.body.name;
  let type = req.body.type;
  type = parseInt(type);
  let saveObj = {
    "name" : configName,
    "type" : type,
    "config" : [],
    "struct" : [],
    "createTime" : Date.now()
  };
  let result = await dbService.createConfig(saveObj).catch(err=>errHandler(res, err));
  if (result) res.send('success');
});

router.post('/config', async function (req, res, next) {
  let configName = req.body.configName;
  let type = req.body.type;

  let colHeaders = true;
  let columns = [];
  let retObj = {configName: configName};

  type = parseInt(type);
  let config = await dbService.getConfig(configName, type).catch(err=>errHandler(res, err));
  if (!config) return res.send('err');

  retObj.data = config.config;
  switch (type) {
    case 1: //枚举
      retObj.colHeaders = ["id", "名字"];
      retObj.columns = [{type:'numeric'}, {}];
      break;
    case 2: //字段配置
      retObj.colHeaders = ["字段名(英文)", "描述", "类型限定", "枚举名字", "是否严格匹配类型", "是否只读"];
      retObj.columns = [{}, {}, {
        type: 'dropdown', //下拉选择
        source: ['数值', '日期', '字符', '枚举'],
        strict: true   //是否严格匹配
      },  {},{type: 'checkbox', default:true}, {type: 'checkbox', default:false}];
      break;
    case 3: //配置配置表
      let structConfig = await dbService.getConfig(configName, 2).catch(err=>errHandler(res, err));
      if (!structConfig || !structConfig.config) return res.send('需要配置结构');
      retObj.colHeaders = getHeaders(structConfig.config);
      retObj.columns = await getColumns(structConfig.config).catch(errHandler);
      break;
  }

  res.send(retObj);
});

function errHandler(res, err) {
  res.send(err.message);
  // throw err;
}

//字段固定第二个
function getHeaders(struct) {
  let headers = [];
  struct.forEach(function (list) {
    if (list[1]) headers.push(list[1]);
  });

  return headers;
}

async function getColumns(struct) {
  let columns = [];
  let index = {"字段名":0, "描述":1, "类型限定":2, "枚举名字":3, "是否严格匹配类型":4, "是否只读":5};
  for (let i = 0; i < struct.length; i++) {
    let list = struct[i];
    if (!list[index.类型限定]) columns.push({});
    else {
      let column = {strict:list[index.是否严格匹配类型], readOnly:list[index.是否只读]};
      switch (list[index.类型限定]) {
        case '数值':
          column.type = 'numeric';
          break;
        case '字符':
          break;
        case '日期':
          column.type = 'date';
          column.dateFormat = 'YYYY-MM-DD';
          column.correctFormat = true;
          column.defaultDate = Date.now();
          break;
        case '枚举':
          column.type = 'dropdown';
          column.source = await getEnum(list[index.枚举名字]).catch(errHandler);
          column.strict = true;
          break;
      }

      columns.push(column);
    }
  }

  return columns;
}

async function getEnum(name) {
  let enums = await dbService.getConfig(name, 1).catch(errHandler);
  if (!enums || !enums.config) throw new Error('未找到枚举');
  enums = enums.config;
  let enumNames = [];
  enums.forEach(function (list) {
    if (list[1]) enumNames.push(list[1]);
  });
  return enumNames;
}

module.exports = router;
