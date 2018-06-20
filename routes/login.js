var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var router = express.Router();
var Users = [];
/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login' });

});
function checkSignIn(req, res){
   if(req.session.user){
      next();     //If session exists, proceed to page
   } else {
      var err = new Error("Not logged in!");
      console.log(req.session.user);
      next(err);  //Error, trying to access unauthorized page!
   }
}
router.post('/', function(req, res) {
  console.log(Users);
  if(req.body.email==""|| req.body.password==""){
        console.log("please input data to text field");
        } else {
     Users.filter(function(user){
        if(user.id === req.body.id && user.password === req.body.password){
           req.session.user = user;
           res.redirect('/showdata');
        }
     });
     res.render('login', {message: "Invalid credentials!"});
  }
});
module.exports = router;
