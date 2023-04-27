let express = require('express');
let router=express.Router();//路由器
let data = [
    {id:1,name:'aa',age:15}
]
router.get('/',(req,res)=>{
    res.send("用户首页");
})

router.get('/list',(req,res)=>{
    res.send("用户列表");
})
router.get('/login',(req,res)=>{
    res.send("用户登录页面")
})



// /user/ 首页
// /user/list 用户列表
// /user/login 用户登录

// /student/list  学生列表
// /student/login 学生登录

module.exports=router;