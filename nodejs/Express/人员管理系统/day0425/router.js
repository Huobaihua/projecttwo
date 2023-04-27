let express = require('express');
let conn = require('./mysql');
let router = express.Router();

// 学生列表页面
router.get('/', (req, res) => {
  let sql = "select * from student";
  conn.query(sql, (err, result) => {
    let arr = JSON.parse(JSON.stringify(result))
    res.render("list", { arr });
  })
})
// 搜索
router.post('/search', (req, res) => {
  let keyword = req.body.keyword;
  let sql = "select * from student where sname like ?";
  let data = ['%' + keyword + '%'];
  conn.query(sql, data, (req, result) => {
    let arr = JSON.parse(JSON.stringify(result))
    res.render("list", { arr });
  })
})

//    显示登陆页面
router.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/page/login.html')// 返回一个文件
  // __dirname 当前文件的绝对路径
})
// 登陆操作  登陆成功跳转列表页面
router.post('/tologin', (req, res) => {
  let tname = req.body.tname;
  let tpwd = req.body.tpwd;
  let sql = "select * from teacher where tname=? and tpwd=?";
  let data = [tname, tpwd];
  conn.query(sql, data, (err, result) => {
    if (result.length > 0) {// 登陆成功
      res.redirect('/')
    }
  })
})
// 注册
router.post('/toregin', (req, res) => {
  let tname = req.body.tname;
  let tpwd = req.body.tpwd;
  let sql = "insert into teacher(tname,tpwd) value(?,?)";
  let data = [tname, tpwd];
  conn.query(sql, data, (req, result) => {
    if (result.affectedRows > 0) {
      res.redirect('/')
    }
  })
})

// 增加学生信息页面
router.get('/add', (req, res) => {
  res.sendFile(__dirname + '/public/page/studentAdd.html')
})
// 增加学生信息操作
router.post('/toadd', (req, res) => {
  let sname = req.body.sname;
  let sage = req.body.sage;
  let sphone = req.body.sphone;
  let sclass = req.body.sclass;
  let sql = "insert into student(sname,sage,sphone,sclass) value(?,?,?,?)";
  let data = [sname, sage, sphone, sclass];
  conn.query(sql, data, (err, result) => {
    if (result.affectedRows > 0) {
      res.redirect('/');
    }
  })
})

//删除学生信息
router.get("/del/:id", (req, res) => {
  let id = req.params.id
  let sql = "delete from student where sid=?";
  let data = [id];
  conn.query(sql, data, (err, result) => {
    if (result.affectedRows > 0) {
      res.redirect('/')
    }
  })
})

// 更新页面
router.get("/update/:id", (req, res) => {
  let id = req.params.id;
  let sql = "select * from student where sid=?";
  let data = [id];
  conn.query(sql, data, (err, result) => {
    let arr = JSON.parse(JSON.stringify(result));
    res.render('update', { stu: arr[0] })
  })
})
// 处理更新
router.post('/toupdate', (req, res) => {
  let sname = req.body.sname;
  let sage = req.body.sage;
  let sphone = req.body.sphone;
  let sclass = req.body.sclass;
  let sid = req.body.sid;
  let sql = "update student set sname=?,sage=?,sphone=?,sclass=? where sid=?";
  let data = [sname, sage, sphone, sclass, sid];
  conn.query(sql, data, (err, result) => {
    if (result.affectedRows > 0) {
      res.redirect('/');
    }
  })
})


module.exports = router;

