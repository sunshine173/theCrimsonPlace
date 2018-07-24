function jsonToTableWithEdit(json, descObj, option) {
  if (!option) option = {};
  var tableName = option.tableName
    , path = option.path
    , moduleInfo = option.moduleInfo || {}
    , bWithoutEdit = option.bWithoutEdit
    , bModule = option.bModule;

  var table = document.createElement('table');
  if (path) table.path = path.replace(/.0/g,'');
  table.className = tableName;
  table.id = tableName;
  if (bModule) table.style.border = '#888888 2px solid';
  //标题
  if (Object.keys(json).length > 0) table.appendChild(getTableHeader());

  var createTd = getPublicModule(moduleInfo, tableName) || bWithoutEdit?createTdWithoutEdit:createContentTd;
  for (var key in json) {
    var tr = document.createElement('tr');
    tr.className = 'content';
    //字段
    tr.appendChild(createTd(key));
    var value = json[key];
    //公共模块
    var module = getPublicModule(moduleInfo, value);
    if (module) {
      tr.appendChild(createTd(getType(Array.isArray(value)?[module.success]:module.success)));
      tr.appendChild(jsonToTableWithEdit(module.success, module.successDesc, {tableName:value, bWithoutEdit:true, moduleInfo:option.moduleInfo, bModule:true}));
      table.appendChild(tr);
      continue;
    }
    //类型
    tr.appendChild(createTd(getType(value)));

    //描述
    var subPath = Array.isArray(value) && typeof value[0] == 'object'?getPath(path, key + '.0'):getPath(path, key);
    var desc = Array.isArray(value)?value[0]:value;

    if (typeof desc == 'object')
      tr.appendChild(jsonToTableWithEdit(desc, descObj, {path:subPath, bWithoutEdit:bWithoutEdit, moduleInfo:option.moduleInfo}));
    else {
      tr.appendChild(createTd(descObj[subPath], 'desc', subPath));
    }

    table.appendChild(tr);
  }

  return table;
}

function normalArrayToTable(array, title, tableName, option) {
  if (!option) option = {};
  var bWithoutEdit = option.bWithoutEdit;

  var table = document.createElement('table');
  table.className = table.id = tableName;
  var tr = document.createElement('tr');
  tr.className = 'header';
  var all = {};
  var count = 0;
  title.forEach(function (str) {
    if (str.indexOf('@') >= 0) {
      all[count] = true;
    }
    count++;
    tr.appendChild(createRelyOnTd(str, 'header', true));
  });
  table.appendChild(tr);
  if (array && array.length)
  for (var i = 0; i < array.length; i++) {
    var infoArr = array[i];
    tr = document.createElement('tr');
    if (option.hideEmptyLine && infoArr.join('') == '') continue;
    for (var m = 0; m < title.length; m++) {
      if (all[m]) {
        option.hideEmptyLine = true;
        tr.appendChild(normalArrayToTable(infoArr[m], ['功能', '提供人', '服务'], tableName, option));
      }
      else
        tr.appendChild(createRelyOnTd(infoArr[m] || '', title[m], bWithoutEdit));
    }

    table.appendChild(tr);
  }

  return table;
}

function createRelyOnTd(str, className, bWithoutEdit) {
  var td = document.createElement('td');
  td.className = className || 'content';

  str = typeof str != 'string' ? '' : str;
  str = str.replace(/<br\/>/g, '\n');
  str = str.replace('http://', '');
  td.innerText = str;

  if (!bWithoutEdit) {
    td.setAttribute("contenteditable", "true");
    td.onfocus = supportEditTd.bind(null, td);
  }

  if (className == 'wiki') {
    td.innerHTML = '<a target="_blank" href="http://'+td.innerText+'">'+td.innerText+'</a>'
  }

  td.onkeydown = supportEditLine.bind(td);
  return td;
}

function getPath(root, path) {
  if (!root) {
    return path;
  }
  return root + '.' + path;
}

function getType(value) {
  if (Array.isArray(value)) {
    return getType(value[0]) + '[]';
  }
  return typeof value;
}

function getTableHeader() {
  var tr = document.createElement('tr');
  tr.className = 'header';
  ['字段', '类型', '描述'].forEach(function (str) {
    tr.appendChild(createTdWithoutEdit(str, 'header'));
  });
  return tr;
}

var tabIndex = 1000;
function createContentTd(str, className, path) {
  var td = document.createElement('td');
  td.className = className || 'content';

  if (className == 'desc') {
    td.tabIndex = tabIndex;
    tabIndex++;
  }

  td.setAttribute("contenteditable", "true");
  td.onfocus = supportEditTd.bind(null, td);
  td.path = path;
  str = typeof str != 'string' ? '' : str;
  str = str.replace(/<br\/>/g, '\n');
  td.innerText = str;

  td.onkeydown = supportEditLine.bind(td);

  return td;
}

function createTdWithoutEdit(str, className) {
  var td = document.createElement('td');
  td.className = className || 'content';
  str = typeof str != 'string' ? '' : str;
  str = str.replace(/<br\/>/g, '\n');
  td.innerText = str;

  return td;
}

function getPublicModule(moduleInfo, value) {
  var str = value;
  if (Array.isArray(value)) str = value[0];
  return moduleInfo[str] || moduleInfo['公共模块->'+str];
}

function supportEditLine(event) {
  event = event || window.event;
  if (event.ctrlKey) {
    //enter
    if (event.keyCode == 13) {
      addTr(this);
    }
    //del
    else if (event.keyCode == 46) {
      delTr(this);
    }
  }
}

function supportEditTd(td) {
  td.onblur = saveEdit;

  //检查是否最后一行，是 添加新行
  var tr = td.parentNode;
  if (!tr.nextSibling) {
    addTr(td);
  }
  td.focus();
}

function addTr(td) {
  var tr = td.parentNode;
  var newTr = document.createElement('tr');

  for (var i = 0; i < tr.childNodes.length; i++) {
    var node = tr.childNodes[i];
    var newNode = document.createElement('td');
    newTr.appendChild(newNode);
    newNode.path = node.path;
    newNode.onfocus = supportEditTd.bind(null, newNode);
    newNode.onkeydown = supportEditLine.bind(newNode);
    newNode.innerText = "";
    newNode.setAttribute("contenteditable", "true");
  }

  insertAfter(newTr, tr);
}

function delTr(td) {
  var tr = td.parentNode;
  var table = tr.parentNode;
  table.removeChild(tr);
  saveEdit();
}

function insertAfter(newEl, targetEl) {
  var parentEl = targetEl.parentNode;
  if (parentEl.lastChild == targetEl) {
    parentEl.appendChild(newEl);
  } else {
    parentEl.insertBefore(newEl, targetEl.nextSibling);
  }
}