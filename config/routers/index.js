var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/configlist', function (req, res, next) {
  res.send({list:['a','b','c','d','e']})
});

router.post('/saveConfig', function (req, res, next) {
  res.send('success');
});

router.post('/config', function (req, res, next) {
  var configName = req.body.configName;

  res.send({
    configName:configName,
    server:'server side data '+configName,
    data: [        //数据，可以是数据，对象
      ['20080101', 999, 11, 12, 13,true],
      ['20090101', 20, 11, 14, 13,true],
      ['20010101', 30, 15, 12, 13,true],
      ['20010101', 32, 213, 21, 312,true],
      ['20010201', 32, 213, 21, 312,true],
      ['20010301', 32, 213, 21, 312,true],
      ['20010401', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010501', 32, 213, 21, 312,true],
      ['20010601', 32, 213, 21, 312,true]
    ],
    colHeaders:   ['时间', 'Kia', 'Nissan', 'Toyota', 'Honda','222'],
    columns: [     //添加每一列的数据类型和一些配置
      {
        type: 'date',   //时间格式
        dateFormat: 'YYYY-MM-DD',
        correctFormat: true,
        defaultDate: Date.now()
      },
      {
        type: 'dropdown', //下拉选择
        source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],
        strict: false   //是否严格匹配
      },
      {type: 'numeric'},  //数值
      {type: 'numeric',
        readOnly: true  //设置只读
      },
      { type: 'numeric',
        format: '$ 0,0.00'},  //指定的数据格式
      {type: 'checkbox'},  //多选框
    ]
  })
});

module.exports = router;
