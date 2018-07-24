var fs = require('fs');
var mkdir = require('mkdir-p');
var Path = require('path');

module.exports = function() {
  var files = fs.readdirSync(__dirname+'/public/edit');
  files.forEach(function (file) {
    backupFiles(Path.join(__dirname,'public/edit',file));
  });
  console.log('done')
};

function backupFiles(path) {
  var files = fs.readdirSync(path);
  files.forEach(function (fileName) {
    saveFile(path,fileName);
  })
}

function saveFile(path,fileName) {
  var data = fs.readFileSync(Path.join(path,fileName));
  path = path.replace('public\\edit','public\\edit'+new Date().getDay());
  mkdir.sync(path);
  fs.writeFileSync(Path.join(path,fileName),data);
}