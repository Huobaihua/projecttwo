let router = require('./router')
let app=(req,res)=>{
res.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});
req.path=req.url.split('?')[0];
 router(req,res);
//  console.log("app要执行结果");
// if(html){
//     res.write(html);
//     res.end();
// }
}
module.exports=app;