let express = require('express');
let router=express.Router();//路由器
router.get('/',(req,res)=>{
    res.send("学生首页");
})

router.get('/list',(req,res)=>{
    res.send("学生列表");
})
router.get('/login',(req,res)=>{
    res.send("学生登录页面")
})



// /user/ 首页
// /user/list 用户列表
// /user/login 用户登录

// /student/list  学生列表
// /student/login 学生登录

module.exports=router;