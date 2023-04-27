let express = require('express');
let router = require('./router');
let app = express()
app.listen(8080);
router.use(router)
app.use(express.static('public'))