var express = require('express');
var router = express.Router();
var dateTime = require('node-datetime');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
    database: "onlinestore"
});
conn.connect(function(err) {
    if (err) throw err;
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('insert', {title: 'Insert Data', success: false , errors: req.session.errors});
      req.session.errors = null;
});

router.post('/', function(req, res, next){
req.check('inUser', 'Invalid user address !').notEmpty();
req.check('inEmail', 'Invalid email address !').isEmail();
req.check('inPassword', 'Password is invalid !').notEmpty();
var errors = req.validationErrors();

if (errors) {
   req.session.errors = errors;
   req.session.success = false;
 } else {
   req.session.success = true;

  var dt = dateTime.create();
  var formatted = dt.format('Y-m-d H:M:S');

conn.query("Insert into tbl_users (name, password, email, created_at) Values ('"+req.body.inUser+"','"+req.body.inPassword+"','"+req.body.inEmail+"','"+formatted+"')",function(err, result){
     if(err) throw err;
        console.log("insert success");
       });
       res.redirect('/showdata');

     }
console.log(errors);
 res.redirect('/insert');
});
module.exports = router;
