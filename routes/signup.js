var express = require('express');
var router = express.Router();
var DB = require('../DummyDB');

router.get('/signup', function(req, res) {
	if(req.session.user) return res.redirect('/user/' + req.session.user.id);
 	res.render('signup', { title: 'Sign Up' });
});

router.post('/signup', function(req, res) {
	var credentials = req.body;
	var user = DB.createUser(credentials);
	req.session.user = user;
	res.redirect('/user/' + user.id);
});


module.exports = router;
