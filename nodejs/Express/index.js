// 登录页面
// 列表
//3.增加
let expresss = require('express');
let router = require('./router');
let bodyParser = require('body-parser');
let app = express();
app.listen(8088);
app.use(bodyParser.urlencoded({extends:false}))
app.use(router);