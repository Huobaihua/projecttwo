let view = require('./view')
let router = (req,res)=>{
    if(req.path == '/'){
        let HTML = view.login();
        return HTML;
    }
    if(req.path == '/list'){
        let HTML = view.list();
        return HTML;
    }
}
module.exports=router;