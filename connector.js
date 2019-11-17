const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'123456',
    database:'my_db'
});

app.listen('3000', () => {
    console.log("Server started");
})