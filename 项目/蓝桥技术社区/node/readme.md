1,表

功能   表    操作
登陆   用户   查
注册   用户   插入
文章

增加文章  前端--》后端--》数据库
删除 id  前端id--》后端--》数据库删除  
修改
   id   前端id--》后端--》查找修改前数据
                        |
                前端- - -
    前端产生新的数据--》后端--》存入数据库 
       
查看一个详情
前端 id ---》后端--》id数据查询
                      |
    前端《---后端《--查到数据

数据库--》后端--》前端


前端（展示数据）       后端(处理链接请求，做数据库操作)



前端： 
http://127.0.0.1:5500/wp3/web/src/index.html
后端：
http://localhost:3001/api/articleList


总结关键流程
1，请求方式  get   post

get:
传参：  请求地址+参数  
eg：http://127.0.0.1:3001/api/detail/id
    id就是传递的参数

后端：
router.get('/detail/:id',(req,res)=>{
    req.params.id  // 后端开发获取前端传递的参数

    res.send(返回给前端的数据)
})

post
前端传值
let data={传给后端的数据}
$.ajax({
    url:"http://127.0.0.1:3001/api/login",
    type:'post',
    data:data, // 传给后端的志
})
后端：
router.post('/login',(req,res)=>{
    // 后端接受前端传来的值
    req.body.数据
})
