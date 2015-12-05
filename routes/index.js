var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});


router.get('/searching', function(req, res){
  var val = req.query.search;
  console.log('testing' + val)
  res.send('testing' + val + ' : ' + req.orginalUrl);
});

module.exports = router;
