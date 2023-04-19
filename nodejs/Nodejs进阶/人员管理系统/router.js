let conn = require('./mysql')
let view = require('./view');



let router = (req, res) => {
    let url = "http://localhost:8080"+req.url;
    let myurl = new URL(url);
    let s = myurl.searchParams;

    //查询所有信息 ，并返回列表页面功能函数

    function showlist(){
        let sql = "select * from student";
        conn.query(sql,(err,result)=>{
        //    let arr =  JOSN.parse(JSON.stringify(result));
           let arr =JSON.parse(JSON.stringify(result));
           let listhtml = view.list(arr);
           res.write(listhtml);
           res.end();
        })
    }

    if (req.path == '/login') {
        let html = view.login();
        res.write(html);
        res.end();

    }
    if(req.path =='/tologin'){
        let tname = s.get('tname');
        let tpwd = s.get('tpwd');
        let sql = "select * from teacher where tname=? and tpwd=?";
        let data =[tname,tpwd];
        conn.query(sql,data,(err,result)=>{
            console.log("回调函数执行了，执行结果了");
            if(result.length>0){
                //请求最新列表
                showlist();
            }else{
                let html = view.login("账号或者密码错误");
                res.write(html);
                res.end()
            }
        })
    }
    if(req.path =="/del"){
    let sid = s.get('sid');
     let sql = "delete from student where sid=?"
     let data = [sid]
     conn.query(sql,data,(err,result)=>{
        if(result.affectedRows>0){
            console.log("删除成功");
        }
        // xxxxxx
        //查询最新列表
     })

    // if(req.path == "/detail"){

    // }
}
}
module.exports = router;