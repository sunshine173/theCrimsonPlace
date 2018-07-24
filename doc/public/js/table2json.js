var tableToJson = function (table,tableName, moduleInfo) {
  function getTableInfo (table,tableName) {
    var desc = {};
    var obj = getTableObj(table,desc,tableName);
    return {retInfo:obj, descObj:desc};
  }

  function getTableObj(table,descObj,tableName) {
    var obj = {};
    if (moduleInfo && (moduleInfo['公共模块->'+table.className] || moduleInfo[table.className])) {
      return table.className;
    }
    
    for(var i=0;i<table.rows.length;i++) {
      var nodeList = table.rows[i].childNodes;
      var item0 = nodeList.item(0);
      var item1 = nodeList.item(1);
      var item2 = nodeList.item(2) || {};
      var name = item0.innerText;
      var type = item1.innerText;
      var desc = item2.innerText;

      if (!name) continue;

      var path = item2.path?item2.path.slice(0,item2.path.lastIndexOf('.')+1) + name:undefined;
      var bTitle = item0.innerHTML == '字段';
      var bTable = item2.tagName == 'TABLE';
      if (bTitle) {
        continue;
      }
      obj[name] = safeGetValue(contentDiv.info[tableName],path) != undefined?safeGetValue(contentDiv.info[tableName],path):getValue(type);
      if (!bTable) descObj[path] = desc;
      else {
        if (Array.isArray(obj[name])) {
          obj[name][0] = getTableObj(item2,descObj,tableName);
        }
        else {
          obj[name] = getTableObj(item2,descObj,tableName);
        }
      }
    }

    return obj;
  }

  function getValue(type) {
    var value;
    var bArray = type.indexOf('[]') > 0;
    var basicType = type.replace('[]','');
    var basicValue;
    switch (basicType.toLowerCase()) {
      case 'string':
        basicValue = 'string';
        break;
      case 'number':
        basicValue = 1;
        break;
      case 'boolean':
        basicValue = true;
        break;
      case 'object':
        basicValue = {};
        break;
      case 'array':
        basicValue = [];
        break;
    }
    if (bArray) {
      value = [];
      if (basicType.toLowerCase() != 'object' && basicType.toLowerCase() != 'array') {
        value.push(basicValue);
      }
    }
    else {
      value = basicValue;
    }
    return value;
  }

  function safeGetValue(obj, path) {
    if (!path) return;
    var pathArr = path.split('.');
    var tempNode = obj;
    for (var i = 0; i < pathArr.length; i++) {
      tempNode = tempNode[pathArr[i]];
      if (tempNode === undefined) {
        return undefined;
      }
      else if (tempNode === null) {
        return null;
      }
    }

    return tempNode;
  }

  return getTableInfo(table,tableName);
};

var normalTableToArr = function (table) {
  var obj = [];
  for(var i=1;i<table.rows.length;i++) {
    var nodeList = table.rows[i].childNodes;
    var arr = [];
    for (var m = 0; m < nodeList.length; m++) {
      var item = nodeList[m];
      arr.push(item.innerText);
    }
    obj.push(arr);
  }
  return obj;
};