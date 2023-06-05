let express = require('express');
let con = require('../mysql')
let router=express.Router();

// 首页查询所有文章列表
router.get('/articleList',(req,res)=>{
  let sql="select * from article order by time desc";
  con.query(sql,(err,result)=>{
    // console.log(result);
    res.send(JSON.stringify(result)) ;
  })
})

// 文章列表
router.get("/classifyArticleList/:classify",(req,res)=>{
  let classify=req.params.classify;
  let sql="select * from article where classify=?";
  let data=[classify]
  con.query(sql,data,(err,result)=>{
    console.log(result);
    res.send(JSON.stringify(result))
  })
})

// 文章增加
router.post("/addArticle",(req,res)=>{
  let title=req.body.title;
  let desc=req.body.desc;
  let author=req.body.author;
  let authorId=req.body.authorId;
  let classify=req.body.classify;
  let content=req.body.content;
  let time = req.body.time;
  console.log(req.body);
  let sql="insert into article(title,descs,author,authorId,classify,content,time) value(?,?,?,?,?,?,?)";
  let data=[title,desc,author,authorId,classify,content,time];
  con.query(sql,data,(err,result)=>{
    if(err) throw err;
    console.log(result);
    if(result.affectedRows>0){
      res.send("1")
    }else{
     res.send("0")
    }
  })




})

router.get("/classifyArticleList/:categry",(req,res)=>{
  let category = req.body.categry;
  let sql="select * from article where classify=?";
  let data=[category]
  con.query(sql,data,(err,require)=>{
    console.log(require);
    if(require.affectedRows>0){
      res.send(JSON.stringify(result))
    }else{
      res.send("0")
    }
   
  })

})

//查看文章详情
router.get("/findArticleDetails/:id",(req,res)=>{
console.log("后端收到前端传递的id是");
console.log(req.params.id);
let id = req.params.id;
let sql="select * from article where id=?";
let data = [id];
con.query(sql,data,(err,result)=>{
  if(err) throw err;
  console.log(JSON.stringify(result));
  if(result.length>0){
    res.send(JSON.stringify(result));
  }else{
    res.send("0")
  }
})
})

//查看个人中心文章列表
router.get('/myArticleList/:id',(req,res)=>{
  let id = req.params.id;
  console.log("获取前端传来的用户ID");
  let sql ="select * from article where authorid=?";
  let data=[id];
  con.query(sql,data,(err,result)=>{
    if(err) throw err;
    console.log(JSON.stringify(require));
    res.send(JSON.stringify(result))
  })
})


module.exports=router;
