let mysql = require('mysql');
let conn = mysql.createConnection({
    host:'localhost',
    port:'',
    user:'root',
    password:'mm123456',
    database:'lanqiao'
})
conn.connect((err)=>{
if(err) throw err;
console.log("数据库连接成功");
})