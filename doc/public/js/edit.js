function editTable(table, docInfo) {
  if (!enableEdit) return;
  var win = editWindowDiv;
  win.style.display = "";
  win.innerHTML = '';
  
  var title = document.createElement('div');
  title.id = 'editTitle';
  title.setAttribute('style', 'height:50px; background-color: gray;');
  title.innerText = '按ESC保存修改';
  win.appendChild(title);

  var code = document.createElement('textarea');
  code.value = JSON.stringify(docInfo[table], null, 2);
  code.id = 'editArea';  
  code.setAttribute("contenteditable", "true");
  code.setAttribute("spellcheck", "false");
  code.setAttribute('style', 'margin:5px 15px;height:630px;overflow:auto;width:93%');
  win.appendChild(code);
  
  code.addEventListener("keydown", keyPress, false);
  
  function checkJson() {
    title.innerText = '';
    try {
      var obj2=eval("("+code.value+")");
      return true;
    }
    catch (e) {
      try{
        JSON.parse(code.value);
      }
      catch (e) {
        title.innerText = e.message;
        var pos = title.innerText.slice(title.innerText.lastIndexOf('position ')+9);
        pos = parseInt(pos);
        code.setSelectionRange(pos, pos+1);
        return false;
      }
    }
  }
  
  function keyPress(event) {
    event = event || window.event;
    if (event.keyCode == 27) {
      var content = document.getElementById('content');
      var info;
      try {
        checkJson();
        info = eval("("+code.value+")");
      }
      catch (e) {
        try{
          JSON.parse(code.value);
        }
        catch (e) {
          title.innerText = e.message;
          return;
        }
      }
      content.info[table] = info;
      code.value = JSON.stringify(info,null,2);
      if (contentDiv.info.group == '公共模块') drawModule(contentDiv.info);
      else drawContent(contentDiv.info);
      saveEdit();
    }
    else if (event.keyCode == 9) {
      event.returnValue = false;
      event.preventDefault();
    }
  }
}