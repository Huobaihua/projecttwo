let express = require('express');
let router = require('./router');
let body = require('body-parser');
let app = express();
app.listen(8080);
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(body.urlencoded({extended:true}));
app.use(router)