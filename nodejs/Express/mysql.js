let mysql = require('mysql');
let con = mysql.createPool({
    host:'localhost',
    props:3306,
    user:'root',
    password:'mm123456',
    database:'uer',
    connectionLimit:10
})
module.exports=con;