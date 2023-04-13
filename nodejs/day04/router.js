let view = require('./view')
let router = (req,res)=>{
    let 
    if(req.path == '/'){
        let HTML = view.login();

        return HTML;
    }
    if(req.path == '/list'){
        let HTML = view.list();
        return HTML;
    }
    if(req.path == '/details'){
        let HTML = 
    }
}
module.exports=router;