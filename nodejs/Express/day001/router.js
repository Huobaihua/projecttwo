let express = require('express');
let router= express.Router();

// 把路由挂载到路由器上
router.get('/',(req,res)=>{
    res.send('首页')
})
module.exports=router;