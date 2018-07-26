var mysql = require('mysql');
var express = require('express');
var dateTime = require('node-datetime');
var bodyParser = require('body-parser');

var flash  = require('req-flash');
var router = express.Router();
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

var datapro = [];
conn.query("SELECT * from tbl_products",function(err, rows, res){
    if(rows.length != 0){
      datapro = rows;
      res = JSON.stringify(datapro);
        }else{
            datapro = 'No data Found..';
            res = JSON.stringify(datapro);
    }
  });
var datauser = [];
router.get('/(:user_id)', function(req, result) {
  var uid = req.params.user_id;
  conn.query("SELECT * from tbl_users where user_id = ? ", [uid], function(err, rows, res){
          if(rows.length != 0){
        datauser = rows;
        res = JSON.stringify(datauser);
       }else{
          datauser = 'No data Found..';
          res = JSON.stringify(datauser);
       }
      result.render('edit', {title: 'Edit Data', datapro:datapro, datauser:datauser});
    });
  });

  router.post('/(:user_id)', function(req, result){
    var id = req.params.user_id;
      var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    console.log(req.body.inUser);  // use the generateHash function in our user mode
    console.log(req.body.inPassword);
    console.log(req.body.inEmail);
          var data = {
          name : req.body.inUser,
          password : req.body.inPassword,
          email : req.body.inEmail,
          updated_at : formatted
          }
if (data.name == "" || data.password == "" || data.email == "")
  {
    console.log("please input data ");
  }
      else {
        conn.query('UPDATE tbl_users set ? where user_id = ? ', [data, id ], function (req, error, res) {
            if(error) {
          throw error;
        }
        else {
        console.log("update data sucessfully..");
              }

    });
  }
          result.redirect('/showdata');
});

module.exports = router;
