var express = require('express');
var app = express();
var router = express.Router();

var repairItems = require('./repairItems.json');
var items = repairItems['repairItems'];
// var keywords =
// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

// Repair steps
router.get('/repair_request_start', function (req, res) {
  res.render('repair_request_start')
});

router.get('/repair_request_describe', function (req, res) {
  res.render('repair_request_describe', {'items' : items});

  function getJson(req, res, next) {
    res.send(items);
    // res.send(keywords);
  }
  console.log(items[0]['name']);
});

router.get('/repair_request_contact', function (req, res) {
  res.render('repair_request_contact')
});

router.get('/repair_request_confirmation', function (req, res) {
  res.render('repair_request_confirmation')
});

module.exports = router
