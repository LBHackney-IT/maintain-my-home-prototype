var express = require('express');
var app = express();
var router = express.Router();

var repairItems = require('./repairItems.json');
var items = repairItems['repairItems'];

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
// Raise repair routes for Maintain My Home Prototype
router.get('/raiserepair/repair-details', function (req, res) {
  res.render('raiserepair/repair-details')
});

router.get('/raiserepair/search-property', function (req, res) {
  res.render('raiserepair/search-property')
});

// Raise repair routes for prototype v1
router.get('/repair_request_start', function (req, res) {
  res.render('repair_request_start')
});

router.get('/repair_request_describe', function (req, res) {
  res.render('repair_request_describe', {'items' : items});

  function getJson(req, res, next) {
    res.send(items);
  }
});

router.get('/repair_request_contact', function (req, res) {
  res.render('repair_request_contact')
});

router.get('/repair_request_confirmation', function (req, res) {
  res.render('repair_request_confirmation')
});

module.exports = router
