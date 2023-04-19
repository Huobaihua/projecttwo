// 1.引入mysql
let mysql = require("mysql");
// 2.创建连接对象
let conn =  mysql.createConnection({
    host:"localhost",//连接主机
    port:"3306",//端口
    user:"root",//连接账号
    password:"mm123456",//连接密码
    database:"lanqiao"//连接数据库名字
})
// 3.连接数据库
conn.connect((err)=>{
    if(err) throw err;
    console.log("数据库连接成功...");
})

// let sql = "select * from student";
// conn.query(sql,(err,result)=>{
//     if(err){
//         throw err
//     }else{
//         console.log(JSON.parse(JSON.stringify(result)));
//         // 1.把数据转成JSON
//     }
// })


// 查询一个人的详情
// let sql = "select * from student where sid=?"
// let data = [3]
// conn.query(sql,data,(err,result)=>{
//     console.log(result);
// })


// 增加一个信息
// let sql = "insert into student(sname,sage,sphone,sclass) value(?,?,?,?)"
// let data =['李信','28','183365','web01'];
// let query= conn.query(sql,data,(err,result)=>{
//     console.log(query);
// })


// 删除一个学生的信息
// let sql = "delete from student where sid=?";
// let data = [9];
// conn.query(sql,data,(err,result)=>{
//     if(result.affectedRows>0){
//         console.log("删除成功");
//     }
// })

//修改一个学生的数据
// let sql = "update student set sname=? where sid=?";
// let data = ['马小跳',2];
// conn.query(sql,data,(err,result)=>{
//     if(result.affectedRows>0){
//         console.log("修改成功");
//     }
// })
// conn.end();
