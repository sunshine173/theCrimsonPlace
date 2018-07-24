var doc = [];
var fs = require('fs');
var files = fs.readdirSync(__dirname);
files.splice(files.indexOf('doc.js'),1);
files.splice(files.indexOf('doc.json'),1);
for (var i = 0; i < files.length; i++) {
    doc = doc.concat(require(__dirname+ '/' + files[i]));
}

module.exports = doc; 