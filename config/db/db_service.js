let db = require('./db');

exports.updateConfig = async function (config) {
  if (!config.name || !config.type) throw new Error('参数错误');
  let query = getConfigModel().updateOne({name:config.name, type:config.type}, {$set:config} ,{upsert:true});
  return await  query.exec().then().catch((err)=>{throw err;});
};

exports.getConfig = async function (name, type) {
  let query = getConfigModel().findOne({name:name, type:type});
  return await query.exec().then().catch((err)=>{throw err;});
};

exports.getConfigList = async function () {
  let query = getConfigModel().find();
  return await query.exec().then().catch((err)=>{throw err;});
};

function errHandler(err) {
  throw err;
}

function getConfigModel() {
  let Config = db.getConfig();
  if (!Config) throw new Error('数据库未连接');
  return Config;
}

// async function test() {
//   var config = await module.exports.updateConfig({
//     "config" : [],
//     "struct" : [],
//     "createTime" : Date.now(),
//     "updateTime" : Date.now(),
//     "name":"insertName2",
//     "type":1
//   }).catch((err)=>{console.log('111',err)});
//
//   console.log(config);
// }
// setTimeout(test, 1000);
// setInterval(async function () {
//   console.log(await module.exports.getConfigList());
// }, 1000);
