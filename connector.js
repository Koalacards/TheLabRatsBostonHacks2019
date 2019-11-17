var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

let itemname = 'ban';
con.connect(function(err) {
  
  if (err) throw err;
  console.log("Connected!");
  con.query("use food", function (err, result) {
    if (err) throw err;
    console.log("here");
    con.query("SELECT * FROM stopnshop WHERE LOWER (stopnshop.itemname) LIKE '%' || LOWER('"+itemname+"') || '%' ORDER BY itemprice ASC", function (err, result) {
      if (err) throw err;
        console.log(JSON.parse(JSON.stringify(result)));
        con.query("SELECT * FROM starmarket WHERE LOWER (starmarket.itemname) LIKE '%' || LOWER('"+itemname+"') || '%' ORDER BY itemprice ASC", function (err, result) {
          if (err) throw err;
            console.log(JSON.parse(JSON.stringify(result)));
            con.query("SELECT * FROM targetFood WHERE LOWER (targetFood.itemname) LIKE '%' || LOWER('"+itemname+"') || '%' ORDER BY itemprice ASC", function (err, result) {
              if (err) throw err;
                console.log(JSON.parse(JSON.stringify(result)));
                con.query("SELECT * FROM wholefoods WHERE LOWER (wholefoods.itemname) LIKE '%' || LOWER('"+itemname+"') || '%' ORDER BY itemprice ASC", function (err, result) {
                  if (err) throw err;
                    console.log(JSON.parse(JSON.stringify(result)));
                });
            });
        });
    });
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
