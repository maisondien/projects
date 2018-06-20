var mysql = require('mysql');
var express = require('express');
var dateTime = require('node-datetime');
var bodyParser = require('body-parser');
var multer  = require('multer');
var path  = require('path');
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

var data = [];
  router.get('/(:id)', function(req, result) {
  var proid = req.params.id;
  conn.query("SELECT * from tbl_products where id = ? ", [proid], function(err, rows, res){
          if(rows.length != 0){
        data = rows;
        res = JSON.stringify(data);
       }else{
          data = 'No data Found..';
          res = JSON.stringify(data);
       }
   result.render('proEdit', {title: 'Edit Data', data:data});
    });

  });

module.exports = router;
