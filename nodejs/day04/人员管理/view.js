// let data = require('./data');
let login=()=>{
    let srt='/'
    return srt;
}
let list = (data) =>{ 
    console.log("美工做列表显示的数据是：");
    console.log(data);
    let HTML =`
    <a href="/add">添加人员</a>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="icon" type="image/x-icon" href="https://img2.baidu.com/it/u=668058670,2919039418&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=451">
</head>
    <table border="1">
    <tr>
        <th>id</th>
        <th>名字</th>
        <th>年龄</th>
        <th>操作</th>
    </tr>
    `
    for(var i=0;i<data.length;i++){
        HTML+=`<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>
           <a href="/del?id=${data[i].id}">  <button>删除</button> </a>
            <a href="/detail?id=${data[i].id}"> <button>查看</button> </a>
            <a href="/update?id=${data[i].id}"> <button>更新</button> </a>
        </td>
    </tr>`
    }
   HTML+= `</table>`;
    return HTML;
}

let detail=(user)=>{
    // console.log("美工收到的"+id);
  
  let HTML=`
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="icon" type="image/x-icon" href="https://img2.baidu.com/it/u=668058670,2919039418&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=451">
</head>
  <h1>${user.name}的个人信息</h1>
    <p>姓名: ${user.name}</p>
    <p>年龄：${user.age}</p>
    <img src="${user.img}" alt="">
    <p>这是我的个人简介</p>
  `
return HTML;

}

let add=()=>{
    let HTML=`
    <h1>增加人员</h1>
    <form action="/toadd" method="get">
     id: <input type="text" name="id"> <br>
     名字： <input type="text" name="name"> <br>
     年龄： <input type="text" name="age"> <br>
     <input type="submit" value="添加">
    </form>
    `

    return HTML;
}

let update=(obj)=>{
    let HTML=`
    <h1>修改信息</h1>
    <form action="/toupdate" method="get">
     id: <input type="text" name="id" readonly value="${obj.id}"> <br>
     名字： <input type="text" name="name" value="${obj.name}"> <br>
     年龄： <input type="text" name="age" value="${obj.age}"> <br>
     <input type="submit" value="更新">
    </form>
    `

    return HTML;
}
module.exports={login,list,detail,add,update};