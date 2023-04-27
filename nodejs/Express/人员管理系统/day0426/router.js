let express = require("express")
let router = express.Router()
let conn = require("./mysql")

router.get("/login", (req, res) => {
    res.sendFile(__dirname+"/page/login.html")
})
router.post("/tologin", (req, res) => {
    let tname = req.body.tname;
    let tpwd = req.body.tpwd;
    let sql = "select * from teacher where tname=? and tpwd=?";
    let data = [tname, tpwd]
    conn.query(sql, data, (err, result )=> {
        if (result.length > 0){
            res.redirect('/')
        }
    })
})
router.get("/", (req, res) => {
    let sql = "select * from student"
    conn.query(sql, (err, result) => {
        if (result.length > 0) {
            let arr = JSON.parse(JSON.stringify(result))
            res.render("list", { arr: arr })
        }
        else {
            throw err
        }
    })

})
router.get("/add",(req,res)=>{
    res.sendFile(__dirname+"/page/add.html")
})
router.post("/toadd",(req,res)=>{
    let sname = req.body.sname
    let sage = req.body.sage
    let sphone = req.body.sphone
    let sclass = req.body.sclass
    let sql = "insert into student(sname,sage,sphone,sclass) value(?,?,?,?)"
    let data = [sname,sage,sphone,sclass]
    conn.query(sql,data,(err,result)=>{
        if(result.affectedRows>0){
            res.redirect("/")
        }
    })
    
})
router.get("/del/:id",(req,res)=>{
    let sid = req.params.id
    let sql = "delete from student where sid=?"
    let data =[sid]
    conn.query(sql,data,(err,result)=>{
        if(result.affectedRows>0){
            res.redirect("/")
        }
    })
})
router.get("/update/:id",(req,res)=>{
    let sid = req.params.id;
    let sql = "select * from student where sid=?"
    let data = [sid]
    conn.query(sql,data,(err,result)=>{
        if(result.length>0){
            let arr = JSON.parse(JSON.stringify(result))
            res.render("update",{arr:arr})
        }
    })
})
router.post("/toupdate",(req,res)=>{
    let sid = req.body.sid
    let sname = req.body.sname
    let sage = req.body.sage
    let sphone = req.body.sphone
    let sclass = req.body.sclass
    let sql = "update student set sname=?,sage=?,sphone=?,sclass=? where sid=?"
    let data = [sname,sage,sphone,sclass,sid]
    conn.query(sql,data,(err,result)=>{
        if(result.affectedRows>0){
            res.redirect("/")
        }
    })
})
router.get("/detail/:id",(req,res)=>{
    let sid = req.params.id
    let sql = "select * from student where sid=?"
    let data = [sid]
    conn.query(sql,data,(err,result)=>{
        if(result.length>0){
            let arr = JSON.parse(JSON.stringify(result))
            res.render("detail",{arr:arr})
        }
    })
})
router.post("/toregin",(req,res)=>{
    let tname = req.body.tname
    let tpwd = req.body.tpwd
    let sql = "insert into teacher(tname,tpwd) value(?,?)"
    let data = [tname,tpwd]
    conn.query(sql,data,(err, result )=> {
        if(err)throw err
     if(result.affectedRows>0){
         res.redirect('/')
     }
    })
})
router.post("/search",(req,res)=>{
    let tname = req.body.tname
    let sql = "select * from student where sname like ?"
    let data = ["%"+tname+"%"]
    conn.query(sql,data,(err,result)=>{
        if(err)throw err
        if(result.length>0){
            let arr = JSON.parse(JSON.stringify(result))
            res.render("list",{arr:arr})
        }
    })
})
router.get("/quit",(req,res)=>{
    res.redirect("/")
})
module.exports = router