let mysql = require('mysql');
let con=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'mm123456',
    database:'lanqiao_wp3',
    connectionLimit:10
})

module.exports=con;