let login=(msg)=>{
    if(!msg){
        msg=""
    }
    
    let style=`
    <style>
        h1{
            color: skyblue;
            text-align: center;
        }
        form{
            /* border:1px solid red; */
            text-align: center;
            font-size: 20px;
        }
        input{
            border: none;
            border-bottom: 1px solid #ccc;
            margin-top: 20px;
            width: 300px;
            font-size: 20px;
            line-height: 30px;
        }
        input:focus{
            outline: none;
        }
        #submit{
            background-color: skyblue;
            color: white;
            line-height: 40px;
            border-radius: 4px;
            margin-top: 30px;
        }
        p{
            font-size:16px;
            color:red;
        }
    </style>
    `
let HTML=`
<h1>登陆页面</h1>
    <form action="/tologin">
        账号： <input type="text" name="tname"> <br>
        密码： <input type="text" name="tpwd"> <br>
        <p>${msg}</p>
        <input id="submit" type="submit">
</form>
`
return style+HTML;
}

let list=(arr)=>{
    console.log("美工拿到的数据");
    console.log(arr);
    let style=`
    <style>
        table{
            width: 70%;
            margin:0px auto;
            border-collapse: collapse;
            border: 1px solid #ccc;
      
            color: #333;
        }
     button{
        margin: 0px 10px;
        color: white;
     }
     th{
        border: none;
        /* border-bottom: 2px solid black; */
        background-color: skyblue;
        line-height: 45px;
        color: white;
     }
     td{
        border: none;
        border-bottom: 1px solid #ccc;
        text-align: center;
        line-height: 40px;
     }
     tr:hover{
        background-color: rgba(150,150,150,0.3);
     }
     button{
        background-color: skyblue;
        border: none;
        border-radius: 4px;
     }
     button:hover{
        pointer-events: painted;
     }
     #add{
        display: block;
        width: 80px;
        height: 40px;
        background-color: rgb(93, 159, 93);
        text-align: center;
        line-height: 40px;
        border-radius: 4px;
        text-decoration: none;
        color: white;
        margin: 30px auto;
     }
     h1{
        text-align: center;
     }
     #del{
      width: 50px;
      height: 25px;
      background-color: rgb(244, 76, 76);
     }
     #update{
      width: 50px;
      height: 25px;
      background-color: orange;
     }
    </style>
    `

    let HTML=`
    <h1>人员列表页面</h1>
    <a id="" href="/add">添加学生信息</a>
    <table>
        <tr>
            <th>id</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>手机号</th>
            <th>班级</th>
            <th>操作</th>
        </tr>
     `
    for(var i=0;i<arr.length;i++){
        HTML+=`
        <tr>
          <td>${arr[i].sid}</td>
          <td>${arr[i].sname}</td>
          <td>${arr[i].sage}</td>
          <td>${arr[i].sphone}</td>
          <td>${arr[i].sclass}</td>
          <td> 删除 </td>
        </tr>
        `
    }
    HTML+=`  </table>`

     return style+HTML;
}

let add=()=>{
    let style= `
    <style>
    h1{
        color: skyblue;
        text-align: center;
    }
    form{
        /* border:1px solid red; */
        text-align: center;
        font-size: 20px;
    }
    input{
        border: none;
        border-bottom: 1px solid #ccc;
        margin-top: 20px;
        width: 300px;
        font-size: 20px;
        line-height: 30px;
    }
    input:focus{
        outline: none;
    }
    #submit{
        background-color: skyblue;
        color: white;
        line-height: 40px;
        border-radius: 4px;
        margin-top: 30px;
    }
</style>
    `
    let HTML=`
    <h1>添加学生信息</h1>
    <form action="/toadd">
      姓名：  <input type="text" name="sname"> <br>
      年龄： <input type="text" name="sage"> <br>
      手机号： <input type="text" name="sphone"> <br>
      班级： <input type="text" name="sclass"> <br>
       <input id="submit" type="submit" value="添加">
    
    </form>
    `

    return style+HTML;
}

module.exports={login,list,add}