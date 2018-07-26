var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();
var Users = [];
/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login' });

});
router.post('/', function(req, res) {
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
});
module.exports = router;
