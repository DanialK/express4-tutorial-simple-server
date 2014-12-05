var express = require('express');
var router = express.Router();
var DB = require('../DummyDB');

router.get('/user/:id', function(req, res, next) {
	if(!req.session.user) return res.redirect('/login');
	if(req.session.user.id == req.params.id ) return res.render('profile', req.session.user);
 	var user = DB.getUser(req.params.id)
 	if(!user)
 		return next();
 	res.render('user', user);
});



module.exports = router;
