var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM starmarket", function (err, result) {
    if (err) throw err;
    console.log("queried");
  });
});

/*
var execsql = require('execsql');

dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root'
},
sql = 'use db_cam;',
sqlFile = __dirname + '/db.sql';
execsql.config(dbConfig)
.exec(sql)
.execFile(sqlFile, function(err, results){
    console.log(results);
}).end();
*/
