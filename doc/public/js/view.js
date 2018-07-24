var tabIndex = 1000;
//api内容
function drawContent(info) {
  moduleInfo = info.moduleInfo;
  var content = contentDiv;
  content.innerHTML = '';
  content.info = info;
  var root = content;

  if (bShowHeader) {
    var headerDiv = normalArrayToTable(content.info.header, ['字段', '类型', '描述'], 'headerDiv',{bWithoutEdit:true});

    root.appendChild(headerDiv);
  }

  var tryBtn = document.createElement('button');
  tryBtn.innerText = 'try';
  tryBtn.className = 'btn btn-primary';
  tryBtn.onclick = function () {
    tryCall(info);
  };

  tabIndex = 1000;
  var pathDiv = createDiv('path', info.path.indexOf('http') == 0 ? info.path : 'http://app.ymatou.com/api/' + info.path);
  var methodDiv = createDiv('method', info.method.toUpperCase(), info.method);
  var titleDiv = createDiv('title', info.apiName + ' ');
  var tryDiv = document.createElement('pre');
  tryDiv.id = 'try';
  tryDiv.style.display = "none";
  tryDiv.style.overflow = 'auto';

  titleDiv.appendChild(tryBtn);
  root.appendChild(titleDiv);
  root.appendChild(tryDiv);
  root.appendChild(methodDiv);
  root.appendChild(pathDiv);

  if (!enableEdit) {
    editWindowDiv.style.display = "none";
  }
  else {
    methodDiv.setAttribute("contenteditable", "true");
    pathDiv.setAttribute("contenteditable", "true");
    pathDiv.onblur = methodDiv.onblur = saveEdit;
  }
  var versionDiv = createDiv('version', '版本:');
  root.appendChild(versionDiv);
  if (info.versionList.length > 1) {
    var select = document.createElement('select');
    info.versionList.forEach(function (version) {
      var option = document.createElement('option');
      option.value = version;
      option.innerText = version;
      if (version == info.version) {
        option.selected = true;
      }
      select.appendChild(option);
    });
    select.style = "font-size:16px";
    versionDiv.appendChild(select);
    select.onchange = function (event) {
      client.send({
        method: 'getDocContent',
        params: [info.group || info.apiGroup, info.subGroup, info.apiName, info.versionList[event.target.selectedIndex]]
      });
    };
  }
  else if (info.versionList.length == 1) {
    versionDiv.innerText = '版本:' + info.versionList[0];
  }

  var paramsDiv = createDiv('params', '参数:');
  if (enableEdit) paramsDiv.appendChild(createEditBtn(editTable.bind(null, 'params', content.info)));
  root.appendChild(paramsDiv);
  root.appendChild(jsonToTableWithEdit(info.params, info.paramsDesc, {tableName:'params', moduleInfo:info.moduleInfo, bWithoutEdit:!enableEdit}));

  var retValueDiv = createDiv('retValue', '返回值:');
  if (enableEdit) retValueDiv.appendChild(createEditBtn(editTable.bind(null, 'success', content.info)));
  root.appendChild(retValueDiv);
  root.appendChild(jsonToTableWithEdit(info.success, info.successDesc, {tableName:'success', moduleInfo:info.moduleInfo, bWithoutEdit:!enableEdit}));

  root.appendChild(createDiv('params', '依赖:'));

  var relyOn = normalArrayToTable(content.info.relyOn, ['功能', '提供人', '服务', 'wiki'], 'relyOn', {bWithoutEdit:!enableEdit});

  root.appendChild(relyOn);
  for (var i = 0; i < 10; i++)
    root.appendChild(document.createElement('br'))
}

function drawModule(info) {
  var content = contentDiv;
  content.innerHTML = '';
  content.info = info;
  var root = content;

  tabIndex = 1000;
  var titleDiv = createDiv('title', info.apiName + ' ');
  root.appendChild(titleDiv);

  if (!enableEdit) editWindowDiv.style.display = "none";

  var paramsDiv = createDiv('success', '');
  if (enableEdit) paramsDiv.appendChild(createEditBtn(editTable.bind(null, 'success', content.info)));
  root.appendChild(paramsDiv);

  root.appendChild(jsonToTableWithEdit(info.success, info.successDesc, {tableName:'success', moduleInfo:info.moduleInfo, bWithoutEdit:!enableEdit}));

  root.appendChild(createDiv('params', '依赖:'));
  var relyOn = normalArrayToTable(content.info.relyOn, ['功能', '提供人', '服务', 'wiki'], 'relyOn', {bWithoutEdit:!enableEdit});
  root.appendChild(relyOn);

  root.appendChild(createDiv('params', '使用接口:'));
  var usage = normalArrayToTable(info.usage, ['group','api','path', 'version'], 'usage', {bWithoutEdit:true});
  root.appendChild(usage);

  for (var i = 0; i < 10; i++)
    root.appendChild(document.createElement('br'))
}

function createEditBtn(onClick) {
  var a = document.createElement('button');
  a.className = 'btn btn-warning';
  a.onclick = onClick;
  a.innerText = '编辑JSON';
  return a;
}

function createDiv(className, innerHTML, id) {
  var div = document.createElement('div');
  div.className = className;
  div.id = id || className;
  div.style = 'margin:20px 0';
  if (typeof innerHTML == 'string') {
    div.innerHTML = innerHTML;
  }
  else {
    div.appendChild(innerHTML);
  }
  return div;
}