let login=()=>{
    let style=`
    <style>
    h1{
        color: aqua;
        text-align: center;
    }
    form{
        /* border: 1px solid red; */
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
    <h1>登录页面</h1>
    <form action="/tulogin">
        账号： <input type="text" name="tname"><br>
        密码： <input type="text" name="tpwd"><br>
        <input id="submit" type="submit">
    </form>
    `

return style+HTML;
}
module.exports={login};