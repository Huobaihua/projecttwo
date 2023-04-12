let router = require('./router')
let app=(req,res)=>{
    res.writeHeader(200,{"Content-type":'text/html;charset=utf-8'});
    req.path = req.url.split('?')[0];// /a
   // 交给路由判断
  let result= router(req,res);
  if(result){
    res.write(result);
    res.end();
  }

}

module.exports=app;

