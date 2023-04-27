let express = require('express');
let router = require('./router');
let body = require('body-parser');

let app = express();
app.listen(8088);

// 设置模版引擎
app.set("view engine", "ejs");
// 设置静态资源
app.use(express.static('public'))
// 设置body-parser
app.use(body.urlencoded({extended:true}));

// 把路由器挂在到app上
app.use(router);



