var express = require('express');
var router = express.Router();
var Question  = require('../models/Question');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '首页'
  });
});

module.exports = router;