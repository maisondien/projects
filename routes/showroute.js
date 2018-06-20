var express = require('express');
var router = express.Router();
var params = require('express-params');
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

var data = [];

var datauser = [];

  router.get('/', function(req, result) {
    conn.query("SELECT * from tbl_users",function(err, rows, res){
            if(rows.length != 0){
          datauser = rows;
          res = JSON.stringify(datauser);
            }else{
                datauser = 'No data Found..';
                res = JSON.stringify(datauser);
        }
      });

      conn.query("SELECT * from tbl_products",function(err, rows, res){
          if(rows.length != 0){
            data = rows;
            res = JSON.stringify(data);
              }else{
                  data = 'No data Found..';
                  res = JSON.stringify(data);
          }
        });
  result.render('loaddata', {title: 'Show Data',  data:data, datauser: datauser });
  });

router.post('/users/(:user_id)', function (req, result) {
       var uid = req.params.user_id;
       conn.query("delete from tbl_users where user_id = ? ", [uid], function (err, res, req){
  if (err) {
    throw err;
    }else{
  	console.log('User deleted successfully! id = ' ,  uid);
        res = JSON.stringify(datauser);
      }
  });
  result.redirect('/showdata');

});
router.post('/product/(:id)', function (req, result) {
       var proid = req.params.id;
       conn.query("delete from tbl_products where id = ? ", [proid], function (err, res, req){
  if (err) {
    throw err;
    }else{
  	console.log('Product deleted successfully! id = ' ,  proid);
        res = JSON.stringify(data);
      }
  });
  result.redirect('/showdata');

});

module.exports = router;
