var mysql = require('mysql');
var condb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "onlinestore"
});
conndb.connect(function(err) {
    if (err) throw err;
});
module.exports=condb;
