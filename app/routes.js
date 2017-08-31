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
  // get the answer from the query string
  var repairProblem = req.query.repairProblem
  //
  // if (answer === 'emergency') {
  //   // redirect to call rcc
  //   res.redirect('emergency-contact')
  // } else if (answer !== 'none') {
  //   // redirect to repair
  //   res.redirect('repair-details')
  //   // redirect to new repair
  // } else {
  //   res.render('new-repair-details')
  // }

  if (repairProblem === 'e')
    // redirect to call rcc
      res.redirect('raiserepair/emergency-contact')
   else if (repairProblem !== ('e' && '0'))
    // redirect to repair
      res.render('raiserepair/repair-details')
   else if (repairProblem === 0)
      res.redirect('raiserepair/new-repair-details')

  // res.render('raiserepair/repair-details')

})

router.get('/examples/over-18', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18

  if (over18 === 'false') {
    // redirect to the relevant page
    res.redirect('/docs/examples/under-18')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18')
  }
})

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

router.get('/raiserepair/confirmation', function (req, res) {
  res.render('raiserepair/confirmation')
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
