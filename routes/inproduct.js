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

const storage = multer.diskStorage({
    destination: './images/',
    filename: function(req, file, cb){
      cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
  });

const upload = multer({
  storage:storage
}).single('inImage');

/* GET home page. */
router.get('/', function(req, result, next) {
  conn.query("SELECT * from tbl_categories",function(err, rows, res){
          if(rows.length != 0){
        datacate = rows;
        res = JSON.stringify(datacate);
          }else{
              datacate = 'No data Found..';
              res = JSON.stringify(datacate);
      }
        result.render('insertpro', {title: 'Insert Product Data', datacate:datacate});
    });
  });
// var upload = multer({ dest: 'images/' });
router.post('/', function(req, res, next){
  req.check('inName', 'Invalid user Name !').notEmpty();
  req.check('inImage', 'Invalid file upload !').notEmpty();
  req.check('inPrice', 'Invalid price value !').notEmpty();
  var errors = req.validationErrors();

  if (errors) {
     req.session.errors = errors;
     req.session.success = false;
   } else {
     req.session.success = true;
        upload(req, res, (er) => {
          if(err){
            res.render('insertpro', {
              msg: er
            });
          }
        upload(req, res, (err) => {
          if(err){
            res.render('insertpro', {
              msg: err
            });
          }else{
            console.log(req.file);
            res.send('upload successful');
          }
          });
});
module.exports = router;
