let conn = require('./mysql');
let view = require('./view');


let router=(req,res)=>{
     let url="http://localhost:8080"+req.url;
     let myurl = new URL(url);
     let s=myurl.searchParams;
     // 查询所有信息，并返回列表页面功能函数
     function showlist(){
        let sql="select * from student";
        conn.query(sql,(err,result)=>{
        let arr= JSON.parse(JSON.stringify(result)) ;
        console.log(arr);
        let listhtml=view.list(arr);
        // console.log(show);
        res.write(listhtml);
        res.end();
        })

     }

    if(req.path=='/login'){
         let html=  view.login();
         res.write(html)
         res.end();
    }

    if(req.path=="/tologin"){
        let tname = s.get('tname');
        let tpwd = s.get('tpwd'); 
      let sql="select * from teacher where tname=? and tpwd=?";
      let data=[tname,tpwd];
      conn.query(sql,data,(err,result)=>{
        console.log("回调函数执行了，执行结果了");
       if(result.length>0){
        // 请求最新列表
       showlist()
       // 登陆成功 显示学生列表
       }else{
        // 登陆失败显示登陆页面，提示账号或者密码错误
        let html=view.login("账号或者密码错误")
        res.write(html);
        res.end();
       }
      })
    }

    if(req.path=="/del"){
      let sql = "delete from student where sid=?";
      let data = [sid]
        // xxxx
        // 查询最新列表
    }
    if(req.path == "/add"){
      let html = view.add();
      res.write(html);
      res.end()
    }
    if(req.path =="/toadd"){
      let sname =s.get('sname');
      let sage = s.get('sage')
      let sphone = s.get('sphone');
      let sclass=s.get('sclass');
      let sql = "insert into student(sname,sage,sphone,sclass) value(?,?,?,?)"
      let data = [sname,sage,sphone,sclass];
      conn.query(sql,data,(err,result)=>{
        if(result.affectedRows>0){
          showlist();
        }
      })
    }


}
module.exports=router;

