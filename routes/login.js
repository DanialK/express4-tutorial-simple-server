var express = require('express');
var router = express.Router();
var DB = require('../DummyDB');

router.get('/login', function(req, res) {
	if(req.session.user) return res.redirect('/user/' + req.session.user.id);
 	res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res) {
	if(req.session.user) return res.redirect('/user/' + req.session.user.id);
	var credentials = req.body;
	var users = DB.getUsers();
	for (var i = 0; i < users.length; i++) {
		var usr = users[i];
		if(usr.password == credentials.password && usr.username == credentials.username ){
			req.session.user = usr;
			return res.redirect('/user/' + usr.id);		
		}
	};
	res.status(401).render('login', { title: 'Login', message : 'Check your credentials'});
});

router.get('/signout', function(req, res){
	req.session.destroy(function(){
		res.redirect('/');
	});
});


module.exports = router;
