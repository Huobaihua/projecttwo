//htttp模块 由服务器相关的功能
let http = require("http");
// 创建服务器
let server = http.createServer();
//设置端口 
server.listen(8080,(err)=>{
    if(err) throw err;
    console.log("服务器启动成功,运行在8080端口");
});

//一旦有请求进来开始接收处理
server.on("request",(req,res)=>{
    // console.log(req.url());
    let url= "Http://" + req.headers.host;
    let u2 = new URL(url);
    let s = u2.searchParams;
    let path = req.url.split('?')[0];
    res.writeHeader(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/"){
        res.write("首页")
        res.end();
    }
    if(req.url=="/list"){

        let name = s.get('name')
        res.write("<h1>list</h1>")
        res.end();
    }
    if(req.url=="/login"){
        res.write("login")
        res.end();
    }
})


//协议：// 地址； 端口；
