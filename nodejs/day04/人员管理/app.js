let router = require('./router');
let app = (req,res)=>{
    res.writeHeader(200,{"Content-type":"text/html;charset=utf-8"});
    req.path=req.url.split('?')[0];
    // http://localhost:8081/toadd?id=19&name=admin&age=18
    let result = router(req,res);
    if(result){
        res.write(result);
        res.end();
    }
    
}
module.exports=app;