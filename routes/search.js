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

/* GET home page. */
conn.query("SELECT * FROM tbl_brands ORDER BY id ASC;", function(err, rows, res){
        if(rows.length != 0){
      databrand = rows;
      res = JSON.stringify(databrand);
        }else{
            databrand = 'No data Found..';
            res = JSON.stringify(databrand);
    }
  });

  conn.query("SELECT * FROM tbl_categories ORDER BY id ASC;", function(err, rows, res){
          if(rows.length != 0){
        datacate = rows;
        res = JSON.stringify(datacate);
          }else{
              datacate = 'No data Found..';
              res = JSON.stringify(datacate);
      }
    });
    conn.query("SELECT * FROM tbl_products ORDER BY id ASC;", function(err, rows, res){
            if(rows.length != 0){
          data = rows;
          res = JSON.stringify(data);
            }else{
                data = 'No data Found..';
                res = JSON.stringify(data);
        }
      });
router.get('/', function(req, result, next) {
           result.render('search', { title: 'Search', data:data, datacate:datacate, databrand:databrand});
});

router.post('/', function(req, res, next) {
var optcate = req.body.selectcate;
let insearch = req.body.searchValue;
var optbrand = req.body.selectbr;
  conn.query("SELECT tbl_products.id, tbl_products.product_name, tbl_products.image, tbl_products.price, tbl_categories.name  FROM tbl_products LEFT JOIN tbl_categories on tbl_products.category_id = tbl_categories.id;", function(err, rows, res){
          if(rows.length != 0){
        data = rows;
      }
    })
    for (var i = 0; i < data.length; i++){
      res = JSON.stringify(data);
    }
});

module.exports = router;
