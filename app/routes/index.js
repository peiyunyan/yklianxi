var express = require('express');
var router = express.Router();
var Mongo = require('Mongodb-curd');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
	let {page,pageSize,type} = req.query;
	page = (page - 1) * pageSize;
	pageSize = pageSize * 1;
	Mongo.find('user','aidou',)
});

module.exports = router;
