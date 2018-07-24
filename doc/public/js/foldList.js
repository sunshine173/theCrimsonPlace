var foldList = function (list, root, level) {
  var ul = document.createElement("ul");
  ul.setAttribute('cancelBubble', true);

  if (!level) level = 1;
  else level++;

  function getPath(root, path) {
    if (root) {
      return root+'\\'+path;
    }
    return path;
  }

  list.forEach(function (info) {
    var li = document.createElement("li");
    li.innerText = info.name;
    li.setAttribute('unselectable', 'none');
    li.setAttribute('onselectstart', 'return false;');

    if (info.list && info.list.length > 0) {
      li.className = 'headerNew';
      li.innerText = '♦'+info.name;
      if (root) li.innerText = '♢'+info.name;
      li.appendChild(foldList(info.list, getPath(root,info.name), level));
      li.onclick = onFoldClick;
    }
    else {
      if (!root) return;
      var group = root.split('\\')[0];
      var subGroup = root.split('\\')[1];
      if (level > 2) li.subGroup = subGroup;
      li.group = group;
      li.className = 'apiNew';
      li.api = info.name;
      li.setAttribute("onclick", "selectDoc(this);");
    }

    ul.appendChild(li);
  });

  return ul;
};

function onFoldClick(e) {
  var li = e.target;
  if (li.className != 'headerNew') return;
  e.stopPropagation();
  var nodes = li.childNodes;
  var stat = '';
  if (!li.isHide) {
    stat = 'none';
    li.isHide = true;
  }else {
    li.isHide = false;
  }
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.style) {
      node.style.display = stat;
    }
  }
}