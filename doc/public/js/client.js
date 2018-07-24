function createClient(host) {
  var iosocket = io.connect(host);

  iosocket.on('connect', function () {
    console.log('connect');
    iosocket.send({method: 'getDocList'});
  });

  iosocket.on('disconnect', function () {
    console.log('disconnect');
  });

  iosocket.on('error', function (err) {
    console.log(err);
  });

  iosocket.on('packet', function (packet) {
    switch (packet.method) {
      case 'getDocList':
        if (!contentDiv) return;
        listDiv.innerHTML = contentDiv.innerHTML = '';
        var str = window.location.hash.replace('#', '') || '';
        var arr = str.split('->');

        listDiv.appendChild(foldList(packet.list));

        var apis = document.getElementsByClassName('apiNew');
        for (var i = 0; i < apis.length; i++) {
          if (arr.length > 2) {
            if (apis[i].group == arr[0] && apis[i].subGroup == arr[1] && apis[i].api == arr[2]) {
              selectDoc(apis[i]);
              return;
            }
          }
          else if (apis[i].group == arr[0] && apis[i].api == arr[1]) {
            selectDoc(apis[i]);
            return;
          }
        }
        selectDoc(apis[0]);
        break;
      case 'getDocContent':
        drawContent(packet.info);
        break;
      case 'getDocContentModule':
        drawModule(packet.info);
        break;
      case 'delApi':
        iosocket.send({method: 'getDocList'});
        break;
      case 'createApi':
        console.log('createApi', JSON.stringify(packet));
        if (!packet.success) {
          return alert(packet.msg);
        }
        window.location.hash = '#' + packet.group + '->' + packet.apiName;
        if (packet.subGroup) window.location.hash = '#' + packet.group + '->'+packet.subGroup+'->' + packet.apiName;
        iosocket.send({method: 'getDocList'});
        document.getElementById('createApiDiv').style.display = 'none';
        break;
      case 'tryCall':
        onTryCall(packet);
        break;
      case 'search':
        onSearch(packet);
        break;
      case 'getAllApi':
        drawAllApi(packet);
        break;
    }
  });

  return iosocket;
}

function createApi() {
  var group = document.getElementById('groupNameInput').value;
  var subGroup = document.getElementById('subGroupNameInput').value;
  var apiName = document.getElementById('apiNameInput').value;
  var version = document.getElementById('versionInput').value;
  var checked = document.getElementById('copyCurInfo').checked;

  client.send({method: 'createApi', params: [group, subGroup, apiName, version, checked ? contentDiv.info : null]});
}

function tryCall(info) {
  client.send({method: 'tryCall', params: [info]});
}

function delApi() {
  if (contentDiv.info.group == '公共模块') return alert('禁止删除公共模块');
  var close = confirm("确定要删除当前文档吗？");
  if (close) {
    client.send({method: 'delApi', params: [contentDiv.info]});
  }
}

function onTryCall(packet) {
  var content = packet.err || packet.body;

  var tryPre = document.getElementById('try');
  tryPre.style.display = "";
  tryPre.innerText = JSON.stringify(content, null, 2);
  tryPre.style.height = tryPre.innerText.length > 100 ? 300 : 100;
}

//搜索
function search() {
  var content = document.getElementById('searchInput').value;
  if (!content || content == '') {
    var searchResult = document.getElementById('searchResult');
    searchResult.className='hide';
    return false;
  }
  client.send({method: 'search', params: [content]});
}
function goto(group, subGroup, api) {
  
  client.send({method: 'getDocContent', params: [group, subGroup, api]});
  document.getElementById('searchResult').className='hide';
}

function onSearch(packet) {
  var content = packet && packet.list;
  if (!content) return;
  var searchResult = document.getElementById('searchResult');
  searchResult.className='show';
  searchResult.innerHTML = '<ul class="list-group">';
  content.forEach(function (item) {
    var path = item.group + '\',' + '\'' + item.subGroup + '\',' + '\'' + item.name;
    searchResult.innerHTML += '<li class="list-group-item"><a href="#" onclick="goto(\'' + path + '\')">' + item.name + '</a></li>';
  });
  searchResult.innerHTML += '</ul>';
}