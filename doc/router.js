var path = require('path');
var fs = require('fs');
var querystring = require('querystring');

module.exports = function (req, res) {
  var url = req.url;
  var root = './public';
  if (url == '/') url = '/index.html';
  var query = querystring.parse(url.slice(url.indexOf('?')+1));

  if (query && query.method && query.path) {
    res.writeHead(200, { 'Content-type': 'application/json'});
    var doc = getDoc(query.path,query.method,query.version);
    if (doc) {
      res.end(JSON.stringify(doc));
    }
    else {
      query.msg = '找不到mock数据';
      res.end(JSON.stringify(query));
    }
  }
  else {
    res.writeHead(200, { 'Content-type': 'text/html'});
    try {
      res.end(fs.readFileSync(path.join(root,url)));
    }
    catch (e){
      res.end('404')
    }
  }
};


function getDoc(path, method, version) {
  path = path.indexOf('http') == 0?path:'http://app.ymatou.com/'+path;
  var dir = fs.readdirSync(__dirname + '/public/edit');
  var groupMap = {};
  for (var i = 0; i < dir.length; i++) {
    var curDir = dir[i];
    var files = fs.readdirSync(__dirname + '/public/edit/'+curDir);
    if (files.length == 0) {
      continue;
    }
    groupMap[curDir] = [];
    for (var m = 0; m < files.length; m++) {
      fileName = files[m];
      var file = fs.readFileSync(__dirname + '/public/edit/'+curDir+'/'+fileName);
      if (file) {
        var obj = JSON.parse(file.toString());
        if (obj.version == version
          && obj.method.toLowerCase() == method.toLowerCase()
          && obj.path.replace('http://app.ymatou.com/api/','') == path.replace('http://app.ymatou.com/api/','')) {
          return obj.success;
        }
      }
    }
  }

  return null;
}