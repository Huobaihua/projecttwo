let view = require("./view")
let data = require("./data")
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
    if(req.path =="/delete"){
        let id = s.get("id");
        for (let i = 0; i < data.length; i++) {
            if(data[i].id == id){
                data[i].show=false
            }
        }
        let LIST = view.list();
        return LIST;
    }
    if(req.path =='/addData'){
        
    }
}
module.exports=router