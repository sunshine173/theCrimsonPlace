var db = require('./db');


// setInterval(function () {
//   var Config = db.getConfig();
//   if (Config) {
//     Config.findOne({name:'someEnum'}, function (err, config) {
//       if (err) {
//         console.log(err);
//       }
//       console.log(config.name)
//     })
//   }
// }, 1000);

exports.saveConfig = async function (config, callback) {
  var Config = db.getConfig();
  if (!Config) return callback(new Error('数据库未连接'));

  var config = new Config(config);

};

exports.getConfig = async function (name) {
  return await new Promise((resolve, reject) => {
    var Config = db.getConfig();
    Config = null;
    if (!Config) return reject(new Error('数据库未连接'));

    Config.findOne({name:name}, function (err, config) {
      if (err) return reject(err);

      resolve(config);
    })
  });
};

exports.getConfigList = async function (callback) {
  var Config = db.getConfig();
  if (!Config) return callback(new Error('数据库未连接'));

  Config.find(function (err, configs) {
    if (err) return callback(err);

    callback(null, configs);
  })
};

setTimeout(async ()=> {
  var config = await module.exports.getConfig('someEnum').catch(errHandler)
  console.log(config)
}, 2000);

