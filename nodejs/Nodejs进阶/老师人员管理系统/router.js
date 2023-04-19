// let mysql = require('mysql')
let view = require('./view')
// let conn = mysql.createConnection({
//     host:'localhost',
//     port:'3306',
//     user:'root',
//     password:'mm123456',
//     database:'lanqioa'
// })


let router = (req,res)=>{
    // let url = "http://localhost:8080"+req.url;
    // let myurl = new URL(url);
    // let s=myurl.searchParams
    if(req.paht =="/login"){
        let html = view.login();
        return html;
    }
    if(req.path =='/tologin'){
        let tname = s.get('tname');
        let tpwd = s.get('tpwd');
        let sql = "select * from teacher wherr tname=? and tpwd=?";
        let data =[tname,tpwd]
        conn.query(sql,data,(err,result)=>{
            if(result.length>0){
                console.log("登录成功");
                res.end()
            }else{
                //登录页面 并且提示账号或者密码错误
                let html =view.login("账号密码错误")
                res.write(html)
                // res.write("登录失败")
                res.end();
            }
        })
    }
}
module.exports=router;