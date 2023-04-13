let data = require('./data')
let list = () =>{
    data = data.filter(item=>item.show==true);
    console.log(data);
    let HTML =`
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
            <button>删除</button>
            <a href="/detail?id=${data[i].id}"> <button>查看</button> </a>
        </td>
    </tr>`
    }
   

   HTML+= `</table>`;
    return HTML;
}
module.exports=list;