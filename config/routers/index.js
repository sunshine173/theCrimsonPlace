var express = require('express');
var router = express.Router();
var path = require('path');
var dir = require('../utils/dir');
var allConfig = dir(path.join(__dirname, '../config_data/config'));
var allEnum = dir(path.join(__dirname, '../config_data/enum'));
var allStruct = dir(path.join(__dirname, '../config_data/struct'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/configlist', function (req, res, next) {
  res.send({config:allConfig, enum: allEnum, struct:allStruct});
});

router.post('/saveConfig', function (req, res, next) {
  res.send('success');
});

router.post('/config', function (req, res, next) {
  var configName = req.body.configName;
  var type = req.body.type;

  var colHeaders = true;
  var columns = [];
  var retObj = {configName: configName};

  switch (parseInt(type)) {
    case 1: //枚举
      retObj.colHeaders = ["id", "名字"];
      retObj.columns = [{type:'numeric'}, {type:'numeric'}];
      retObj.data = require('../config_data/enum/'+configName+'.json');
      break;
    case 2: //字段配置
      retObj.colHeaders = ["字段名(英文)", "描述", "类型限定", "枚举名字", "是否严格匹配类型", "是否只读"];
      retObj.columns = [{}, {}, {
        type: 'dropdown', //下拉选择
        source: ['数值', '日期', '字符', '枚举'],
        strict: true   //是否严格匹配
      },  {},{type: 'checkbox'}, {type: 'checkbox'}];
      retObj.data = require('../config_data/struct/'+configName+'.json');
      break;
    case 3: //配置配置表
      var struct = require('../config_data/struct/'+configName+'.json');
      retObj.colHeaders = getHeaders(struct);
      retObj.columns = getColumns(struct);
      retObj.data = require('../config_data/config/'+configName+'.json');
      break;
  }

  console.log(retObj)
  res.send(retObj);
});

//字段固定第一个
function getHeaders(struct) {
  let headers = [];
  struct.forEach(function (list) {
    headers.push(list[0]);
  });

  return headers;
}

function getColumns(struct) {
  let columns = [];
  let index = {"字段名":0, "描述":1, "类型限定":2, "枚举名字":3, "是否严格匹配类型":4, "是否只读":5}
  struct.forEach(function (list) {
    if (!list[index.类型限定]) columns.push({});
    else {
      let column = {strict:list[index.是否严格匹配类型], readOnly:list[index.是否只读]};
      switch (list[index.类型限定]) {
        case '数值':
          column.type = 'numeric';
          break;
        case '字符':
          column.type = 'string';
          break;
        case '日期':
          column.type = 'date';
          column.dateFormat = 'YYYY-MM-DD';
          column.correctFormat = true;
          column.defaultDate = Date.now();
          break;
        case '枚举':
          column.type = 'dropdown';
          column.source = getEnum(list[index.枚举名字]);
          column.strict = true;
          break;
      }

      columns.push(column);
    }
  });

  return columns;
}

function getEnum(name) {
  var enums = require('../config_data/enum/'+name+'.json');
  var enumNames = [];
  enums.forEach(function (list) {
    enumNames.push(list[1]);
  });
  return enumNames;
}
module.exports = router;
