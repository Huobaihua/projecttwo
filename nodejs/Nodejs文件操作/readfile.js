const fs =  require("fs");
// fs.readFile(path[,options],callback);
//调用模块中异步读取文件的方法
fs.readFile("./msg.txt","utf-8",(error,data) =>{
    if(error) throw error;
    console.log(data);
})


// 文件写入操作
fs.writeFile("./msg.txt","今天是个好日子",(error)=>{
    if(error) throw error;
    console.log("写入成功！");
})