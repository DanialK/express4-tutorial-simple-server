var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	var user = req.session.user; 
	res.render('index', { title: 'Express 4 Tutorial', user : user? user: null });
});

module.exports = router;
