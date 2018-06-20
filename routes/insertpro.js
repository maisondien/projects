var express = require('express');
var router = express.Router();
var dateTime = require('node-datetime');
var mysql = require('mysql');
var multer = require("multer");
var bodyParser = require('body-parser');
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

const storage = multer.diskStorage({
    destination: './images/',
    filename: function(req, file, cb){
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({
  storage:storage
}).single('inImage');

/* GET home page. */
conn.query("SELECT * from tbl_brands",function(err, rows, res){
        if(rows.length != 0){
      databr= rows;
      res = JSON.stringify(databr);
        }else{
            databr = 'No data Found..';
            res = JSON.stringify(databr);
    }
  });
router.get('/', function(req, result, next) {
  conn.query("SELECT * from tbl_categories",function(err, rows, res){
          if(rows.length != 0){
        datacate = rows;
        res = JSON.stringify(datacate);
          }else{
              datacate = 'No data Found..';
              res = JSON.stringify(datacate);
      }
        result.render('insertpro', {title: 'Insert Product Data', databr:databr, datacate:datacate, success: false , errors: req.session.errors});
        req.session.errors = null;
    });
  });
// var upload = multer({ dest: 'images/' });
router.post('/', function(req, res, next){
      upload(req, res, (err) => {
        if(err){
          res.render('insertpro', {
            msg: err
          });
        }else{
          req.check('inName', 'Invalid user Name !').notEmpty();
        //  req.check('inImage', 'Invalid file upload !').notEmpty();
          req.check('inPrice', 'Invalid price value !').notEmpty();
          var errors = req.validationErrors();
          if (errors) {
             req.session.errors = errors;
             req.session.success = false;
            res.redirect('/insertpro');
           } else {
             req.session.success = true;
              var image =  req.file.filename;
            var dt = dateTime.create();
      var formatted = dt.format('Y-m-d H:M:S');
            conn.query("Insert into tbl_products (product_name, image, price, category_id, brand_id, created_at) Values ('"+req.body.inName+"','"+image+"','"+req.body.inPrice+"','"+req.body.myselect+"','"+req.body.slbrand+"','"+formatted+"') ",function(err, result){
              if(err) throw err;
            console.log("upload success");
           });
            res.redirect('/showdata');
          }
        }
       });
   });
module.exports = router;
