let  fs = require('fs');
let  join = require('path').join;
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function getAllFileNameSync(startPath) {
  let result=[];
  function finder(path) {
    let files=fs.readdirSync(path);
    files.forEach((val,index) => {
      let fPath=join(path,val);
      let stats=fs.statSync(fPath);
      if(stats.isDirectory()) finder(fPath);
      if(stats.isFile()) result.push(val.replace('.json', ''));
    });

  }
  finder(startPath);
  return result;
}

module.exports = getAllFileNameSync;
// console.log(getAllFileNameSync('../config_data/config'));
