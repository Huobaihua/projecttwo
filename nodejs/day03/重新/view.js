let data = require('./data')

let login = () => {
    let str = ` <form action="/list">
    账号： <input type="text"> <br>
    密码： <input type="text"> <br>
    <input type="submit">
  </form>`

    return str;
}

let list = () => {
    let str = `
    <table border="1">
    <tr>
        <th>id</th>
        <th>名字</th>
        <th>年龄</th>
        <th>操作</th>
    </tr>
`
    for (let i = 0; i < data.length; i++) {
        str += `
    <tr>
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].age}</td>
    <td>
        <button>删除</button>
        <button>查看</button>
    </td>
</tr>
    `
    }

    str += `</table>`;

    return str;

}

module.exports = { login, list }