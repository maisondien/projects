var express = require('express');
var router = express.Router();
var dateTime = require('node-datetime');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var multer  = require('multer');
var path  = require('path');
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
    database: "onlinestore"
});
conn.connect(function(err) {
    if (err) throw err;
});

router.get('/', function(req, result, next) {
  let insearch = req.body.searchValue;
  if (insearch==""){
    console.log("no data found");
    return false;
    }else {
    conn.query("SELECT tbl_products.id, tbl_products.product_name, tbl_products.image, tbl_products.price, tbl_categories.name  FROM tbl_products LEFT JOIN tbl_categories on tbl_products.category_id = tbl_categories.id WHERE tbl_products.product_name LIKE '%" + req.body.searchValue + "%';", function(err, rows, res){
          if(rows.length != 0){
        datase = rows;
        res = JSON.stringify(datase);
          }else{
              datase = 'No data Found..';
              res = JSON.stringify(datase);
      }
      result.render('result', { title: 'Result', datase:datase});
    });
  }
})
module.exports = router;
