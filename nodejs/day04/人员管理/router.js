let view = require("./view")
let router = (req,res)=>{
    let url = "http://localhost:8080"+req.url
    let myurl = new URL(url)
    let s = myurl.searchParams
    
    
    if(req.path=="/"){
       let HTML = view.login()
        return HTML
    }
    if(req.path=="/list"){
        let LIST = view.list()
        return LIST
    }
    if(req.path=="/detail"){
        let DETAIL = view.detail(s.get("id"))
        return DETAIL
    }
    if()
}
module.exports=router