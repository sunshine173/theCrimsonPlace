var http = require('http')
  , socketio = require('socket.io')
  , router = require('./router')
  , api = require('./api')
  , fs = require('fs')
  , mkdir = require('mkdir-p')
  , apiService = require('./apiService/bin/www')
  , cookieParser = require('cookie-parser')
  , copydir = require('copy-dir')
  , csurf = require('express');

var server = http.createServer(function(req, res) {
  router(req,res);
}).listen(8000, function() {
  console.log('Listening at: http://localhost:8000');
});

socketio.listen(server).on('connection', function (socket) {
  socket.on('message', function (packet) {
    api[packet.method].apply(socket, !Array.isArray(packet.params)?[packet.params] || []:packet.params||[]);
  });
});

process.on('uncaughtException', function (err) {
  console.log(err.stack);
});


setInterval(function () {
  var d = new Date();
  if (d.getHours() == 0 && d.getMinutes() == 0 && d.getSeconds() == 0) {
    copydir.sync(__dirname+'/public/edit', __dirname+'/public/edit'+new Date().getDay());
  }
},1000);
// transformConfig();

//apidoc转换格式
function transformConfig() {
  var files = fs.readdirSync(__dirname+'/public/config');
  var doc = [];
  for (var i = 0; i < files.length; i++) {
    doc = doc.concat(require(__dirname+ '/public/config/' + files[i]));
  }

  for (i = 0; i < doc.length; i++) {
    var info = doc[i];
    var group = info.group || info.apiGroup;
    var name = info.apiName || info.apiDescription;
    var version = info.version;
    if (group){
      //把描述转换成路径
      var descObj = {};
      getDesc(descObj, info.params, info.paramsDesc);
      info.paramsDesc = descObj;
      descObj = {};
      getDesc(descObj, info.success, info.successDesc);
      info.successDesc = descObj;
    }

    mkdir.sync(__dirname+'/public/edit/'+group);

    fs.writeFileSync(__dirname+'/public/edit/'+group+'/'+name+'_'+version+'.json', JSON.stringify(info,null,2));
  }
}

function getDesc(descObj, obj, desc, path) {
  path = path || '';
  for (var key in obj) {
    var descInfo = desc[key];
    var subObj = obj[key];
    if (Array.isArray(subObj)) {
      descObj[getPath(path, key)] = getDesc(descObj, subObj, desc, getPath(path, key));
    }
    else if (typeof subObj == 'object') {
      descObj[getPath(path, key)] = getDesc(descObj, subObj, desc, getPath(path, key));
    }
    else {
      if (Array.isArray(descInfo)) descInfo = descInfo.shift();
      descObj[getPath(path, key)] = descInfo;
    }
  }
}

function getPath(path, key) {
  if (!path) return key;
  return path+'.'+key;
}