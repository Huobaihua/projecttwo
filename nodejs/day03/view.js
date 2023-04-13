let data = require('./data')
let login=()=>{
    let str = `
    <form action="">
    账号：<input type="text" name="" id=""><br>
    密码：<input type="text" name="" id=""><br>
    <input type="button" name="" id="" value="登录">
    </form>
    `
    return str;
}
let list = ()=>{
    let str = `
    <table>
    <tr>
        <th>id</th>
        <th>名字</th>
        <th>年龄</th>
        <th>操作</th>
    </tr>
    `
    for (let i = 0; i < array.length; i++) {
        str+=`
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
       </tr>
       <td>
        <button>删除</button>
        <button>查看</button>
       </td>
        `
    }
    str+=`</table>`
    return str;
}
module.exports={login,list}