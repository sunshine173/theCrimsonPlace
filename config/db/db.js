var mongoose = require('mongoose');
var options = {
  useNewUrlParser:true,
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    } ,
    reconnectTries:30,
    reconnectInterval:3000
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  }
};
mongoose.connect('mongodb://127.0.0.1:27017/config', options);

var configSchema = mongoose.Schema({
  name: String,
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
configSchema.index({ name: 1});

var db = mongoose.connection;
var Config;
db.on('error', function (err) {
  console.log(err);
  Config = null;
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
