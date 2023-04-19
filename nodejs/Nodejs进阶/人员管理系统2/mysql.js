let mysql = require('mysql');

let conn=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'mm123456',
    database:'lanqiao'
})
conn.connect()

module.exports=conn;