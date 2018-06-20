var mysql = require('mysql');
var express = require('express');
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

var prodata = [];
  router.get('/', function(req, res) {
    conn.query("SELECT * from tbl_products", function(err, rows, res){
        if(rows.length != 0){
          prodata = rows;
            }
        });
        for (var i = 0; i < prodata.length; i++){
        res.send(JSON.stringify(prodata));
      }
  });
  module.exports = router;
