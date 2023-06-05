//头部搜索条动画
function searchinput() {
    $(".search input").focus(function () {
        $(this).css("width", "300px");
        $(".search .iconfont").css("background-color", "#bbb8b8");
    })
    $(".search input").blur(function () {
        $(this).css("width", "200px");
        $(".search .iconfont").css("background-color", "rgb(240 237 237)");
    })
    let userId=localStorage.getItem('userId');
    let userImg=localStorage.getItem('userImg');
    console.log(userImg);
    console.log(userId);
    let isLogin=false;
    if(userImg){
        isLogin=true;// 登陆状态
    }else{
        isLogin=false
    }
   
    if(isLogin){
        // 登陆状态
        $('.loginStatus').html(`
                <button class="writing border">
                        <span class="iconfont"></span>
                       <a href="./addArtical.html"> 写文章</a> 
                </button>
       
                <div class="userimg rounded-circle">
                <img class="img" src="${userImg}"/>
                <div class="userNav border">
                <div> <a href="./admin.html">个人中心</a> </div>
                <div> <a href="" id="loginOut" onclick="loginOut()" >退出登陆</a></div>
                </div>
                </div>
               

        `).addClass('addition2').removeClass('addition')
    }else{
        // 未登陆
        $('.loginStatus').html(`
        <button class="writing border">
                        <span class="iconfont"></span>
                        写文章
                </button>
                <button class="reg"><a href="./login.html">登录</a></button>
                <!-- <div class="userimg rounded-circle border"></div> -->
        `).addClass('addition').removeClass('addition2')
    }
}
function loginOut(){
    localStorage.clear()
}

//动态加载首页博文与推荐作者数据
function loadindexdata() {
    // 请求首页文章列表
    $.ajax({
        url: 'http://localhost:3001/api/articleList',
        type: "get",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            if (!data) {
                $(".list").html('该栏目正在建设中，先去其他栏目下看看吧！');
                return false;
            }
            $(".list").html('');
            $.each(data, function (i, data) {
                $(".list").append(`<div class="list-item">
        <div class="list-info">
            <a href="./blog.html?id=${data.id}" class='title'>${data.title}</a>
            <p class='desc'>${data.descs}</p>
        </div>
    </div>`);
            });

        }
    })         
}

//动态加载首页推荐作者换一批
function loadauthorschange() {
    $.ajax({
        url: "http://localhost:3001/api/authorsList",
        type: 'get',
        dataType: "json",
        success: function (data) {
            if (!data) {
                $(".authorslist").html('该栏目正在建设中，先去其他栏目下看看吧！');
                return false;
            }
        let authors = data
        var resultval = [];
        for (var i = 0; i < 2; i++) {
            var ran = Math.floor(Math.random() * authors.length);
            resultval.push(authors.splice(ran, 1)[0]);
        };
        //遍历
        $(".authorslist").html('');
        $.each(resultval, function (i, data) {
            $(".authorslist").append(`<li style='margin-bottom:20px'>
        <a href="#" target="_blank" class="avatar">
            <img src="${data.headImg}" /></a>
            <a href="#" target="_blank" class="name">
            ${data.userName}
      </a>
            <p>
               ${data.userDesc}
            </p>
        </li>`);
        })
    }
})

}

//根据类别动态加载博文列表数据
function loadlistdata(category) {

    $.ajax({
        url:"http://localhost:3001/api/classifyArticleList/"+category,
        type:"get",
        dataType:'json',
        success:function(data1){
    if (data1==0) {
            $(".bloglist").html('该栏目正在建设中，先去其他栏目下看看吧！');
            return false;
        }
        $(".bloglist").html('');
            $.each(data1, function (i, data) {
                $(".bloglist").append(`<div class="list-item">
            <div class="list-info">
                <a href="./blog.html?id=${data.id}" class='title'>${data.title}</a>
                <p class='desc'>${data.descs}</p>
            </div>
        </div>`);
            });
        }
    })
    
}

//根据 URL 传参 ID 动态加载博文数据
function loadblogdata(idstr) {
    //得到URL传参
    let index = idstr.indexOf('=');
    let id;
    if (index == -1) {
        return;
    }
    id = idstr.substring(index + 1);
    $.getJSON("../data/blog.json", function (result) {

        if (!result[id]) {
            $(".blogtitle").text('');
            $("article").html('很抱歉，您正在浏览的这篇内容走丢了，过一会再看吧！');
            return false;
        }
        $(".blogtitle").text(result[id].title);
        $("article").html(result[id].desc);
    });
}