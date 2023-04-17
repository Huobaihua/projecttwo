let fs = require("fs");
fs.unlink("./msg.txt",(error)=>{
    if(error) throw error;
    console.log("删除成功");
})