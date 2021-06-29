var express = require('express');
var router = express.Router();
var SqliteDB = require('sqlite3').SqliteDB;
/* GET users listing. */
router.get('/', function(req, res, next) {
  var username=req.query['username'];
  var password=req.query['password'];
  var sql= "select cout(1) from user where username="+username+" and password= "+password;
  var db=new SqliteDB('../db/aiattendance.s3db');
  db.get(sql,function(data){
    console.log(data);

  })
db.close();



  res.send('0');
});

module.exports = router;
