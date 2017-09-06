var express = require('express');
var app = express();
var router = express.Router();

// To pass data into the view
var repairItems = require('./repairItems.json');
var items = repairItems['repairItems'];

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

// add your routes here
// Raise repair routes for Maintain My Home Prototype

router.get('/raiserepair/what-is-problem', function (req, res) {
  // get the answer from the query string
  var repairType = req.query.repairType

  if (repairType === 'false') {
    // redirect to the relevant page
    res.redirect('/emergency-contact');
  } else {
    // if is any other value (or is missing) render the page requested
    res.render('raiserepair/what-is-problem');
  }

});

router.get('/raiserepair/start', function (req, res) {
  res.render('raiserepair/start')
});

router.get('/raiserepair/repair-details', function (req, res) {
  res.render('raiserepair/repair-details')
});

router.get('/raiserepair/search-property', function (req, res) {
  res.render('raiserepair/search-property')
});

router.get('/raiserepair/cannot-describe-repair', function (req, res) {
  res.render('raiserepair/cannot-describe-repair')
});

router.get('/raiserepair/cannot-find-property', function (req, res) {
  res.render('raiserepair/cannot-find-property')
});

router.get('/raiserepair/book-appointment', function (req, res) {
  res.render('raiserepair/book-appointment')
});

router.get('/raiserepair/book-appointment-contact', function (req, res) {
  res.render('raiserepair/book-appointment-contact')
});

router.get('/raiserepair/confirmation', function (req, res) {
  res.render('raiserepair/confirmation')
});

// Raise repair routes for prototype v1
router.get('/repair_request_start', function (req, res) {
  res.render('repair_request_start')
});

router.get('/repair_request_describe', function (req, res) {
  res.render('repair_request_describe', {'items' : items});
  // pass data into the view
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
