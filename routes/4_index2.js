var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('4_index2', { title: 'Index' });
});


module.exports = router;