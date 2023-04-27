let mysql = require('mysql');

let conn=mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'mm123456',
    database:'lanqiao',
    connectionLimit:9
})

module.exports=conn;