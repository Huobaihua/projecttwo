let fs = require("fs");


// 写入文件
fs.writeFile("./msg.txt","今天是个好日子",(error)=>{
    if(error) throw error;
    console.log("写入成功！");
})

fs.writeFile(
    "./msg.txt",
    "，明天又是一个大晴天。",
    {flag:"a",encoding:"utf-8"},
    (error)=>{
        if(error) throw error;
        console.log("写入成功！");
    }
)