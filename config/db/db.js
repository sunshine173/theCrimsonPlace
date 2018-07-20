let mongoose = require('mongoose');
let options = {
  useNewUrlParser:true,
  reconnectTries:1000,
  reconnectInterval:3000,
  keepAlive: 1,
  connectTimeoutMS: 30000
};
let configSchema = mongoose.Schema({
  name: {type:String,index: {unique: true, dropDups: true}},
  createTime:{type: Date, default: Date.now},
  updateTime:{type: Date, default: Date.now},
  //配置
  config:Array,
  //配置结构
  struct:Array,
  //类型
  type:Number,
  //最后操作说明
  lastChangeDesc:String
});
var Config;

mongoose.connect('mongodb://127.0.0.1:27017/config', options);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log(err);
});
db.once('open', function (callback) {
  console.log('open');
  Config = mongoose.model('config', configSchema);
});

module.exports.getConfig = function () {
  return Config;
};



// configSchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

// var fluffy = new Kitten();
// Kitten.findOne({name:'12345'}, function (err, result) {
//   result.id = 111;
//   result.save(console.log)
// })
