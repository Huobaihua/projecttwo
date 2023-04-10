let express = require('express');
let con = require('./mysql')
let  router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(__dirname+"/page/login.html");
})

router.post('/tologin',(req,res)=>{
    //1.拿到用户输入账号密码
    console.log(req.body);
    let uname = req.body.uname;
    let upwd = req.body.upwd;
    //2.去数据库查询
        //  连接数据库
        //  执行seleect
        let sql="select *from losc where uname=? and upwd=?"
        let data =[uname,upwd];
        con.query(sql,data,(err,result)=>{
            console.log(result);
            if(result.length>0){
                res.send('登录成功')
            }else{
                res.send('账号或密码错误')
            }
        })
})
module.exports=router;