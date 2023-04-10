
let express = require('express');
let con = require('./mysql');
let router=express.Router();

router.get('/',(req,res)=>{
    res.sendFile(__dirname+"/page/login.html")
})
router.post(('/tologin',(res,req)=>{
    // 1.拿到用户输入的账号密码
    console.log(req.body);
    let uname = req.body.uname;
    let upwd = req.body.upwd;
    // 2.去数据库查询 1.连接数据库 2.执行select语句
    let sql="select * form losc where uname=? and upwd=?";
    let data = [uname.upwd];
    con.query(sql,data,(err,result)=>{
        console.log(result);
        if(result.length>0){
            res.send('登录成功过，显示列表')
        }else{
            res.send('账号或者密码错误')
        }
    })
}))
module.exports=router;