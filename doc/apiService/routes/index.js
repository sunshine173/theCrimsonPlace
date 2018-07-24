var express = require('express');
var router = express.Router();
var api = require('../../api');

router.post('/create', function (req, res, next) {
  api.saveEdit(req.body);
  res.send('ok')
});

module.exports = router;
