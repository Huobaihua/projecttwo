let express = require("express");
let router = require("./router")
let bodyParser = require('body-parser');
let app = express();
app.listen(8080);

app.use(bodyParser.urlencoded({extended:false}))
app.use(router);

