let router = require('./router')
let app=(req,res)=>{
    res.writeHeaten(200,{"Content-type":"text/html;charse=utf-8"});
    req.path = req.url.split('?')[0];
    let result = router(req,res)
    if(result){
        req.wite(result);
        req.end();
    }
}
module.exports=app;