let router = require('./router');
let app = (req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    req.path = req.url.split('?')[0];
   // let html = 
    router(req, res);
    // if (html) {
    //     res.write(html);
    //     res.end();
    // }

}



module.exports = app;