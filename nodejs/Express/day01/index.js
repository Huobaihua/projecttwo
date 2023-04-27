let express = require('express');
let router=require('./router')
let router2=require('./router2')
let body = require('body-parser')
let app = express();
app.listen(8080,(err)=>{
    if(err) throw err;
    console.log("服务器启动成功");
});
function f2(req,res,next){
    console.log("路由中间件拦截了...");
    next();
}
function f1(req,res,next){
    let time = new Date()
    console.log("在"+time+'有人来访问了...');
    next()
}

//把路由器挂到app上

app.use("/user",f1)
router.use(f2)
app.use(body.urlencoded({extended:true}))
app.use("/user",router);
app.use("/student",router2);


















// 处理请求
// app.请求方法('请求路径',(req,res)=>{
//     //请求方法和路径全匹配后执行的回调函数
//     res.send('返回内容');
// })

// app.get('/',(req,res)=>{
//     res.send("首页");
// })

// app.get('/list',(req,res)=>{
//     res.send("列表");
// })
// app.get('/login',(req,res)=>{
//     res.send("登录页面")
// })
// / 首页
//  /list 列表
// /login 登录


/**
 * let express = require('express')
 * let app = express()
 * app.listen(8080,(err)=>{
 * if(err) throw err;
 * console.log("服务器启动成功")
 *  
 * app.get('/',(req,res)=>{
 * res.send("首页")
 * })
 * })
 * 
 */