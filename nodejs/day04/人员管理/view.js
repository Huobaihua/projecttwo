let data = require("./data")
let login = ()=>{
    let str = `<p>登陆页面</p>
    <form action="/list">
    账号:<input type="text" id="user"> <br>
    密码:<input type="password" id="upwd"><br>
    <input type="submit">
    </form>
    `
    return str
}
let list = () =>{
    data = data.filter(item=>item.show==true);
    let HTML =`
    <table border="1">
    <tr>
        <th>id</th>
        <th>名字</th>
        <th>年龄</th>
        <th>操作<a href="/add"><button>添加</button></a></th>
    </tr>
    `
    for(var i=0;i<data.length;i++){
        HTML+=`<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>
            <a href="/delete?id=${data[i].id}"><button>删除</button></a>
            <a href="/detail?id=${data[i].id}"><button>查看</button> </a>
        </td>
    </tr>`
    }
   HTML+= `</table>`;
    return HTML;
}
let detail = (id)=>{
    let ID = data.filter(item=>item.id==id)
    let str=`
    <table >
       <h1>${ID[0].id}的资料页</h1>
       <p>姓名:${ID[0].name}</p>
       <p>年龄:${ID[0].age}</p>
       <p><img src="${ID[0].img}" alt=""></p>
       <p>个人简介</p>
    </table>
    `
    return str
}
let addData = ()=>{

}
module.exports={login,list,detail}
