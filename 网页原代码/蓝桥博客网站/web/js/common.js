//头部搜索条动画
function searchinput() {
    $(".search input").focus(function() {
        $(this).css("width", "300px");
        $(".search .iconfont").css("background-color", "#bbb8b8");
    })
    $(".search input").blur(function() {
        $(this).css("width", "200px");
        $(".search .iconfont").css("background-color", "rgb(240 237 237)");
    })
}

//动态加载首页博文与推荐作者数据
function loadindexdata() {
    $.getJSON("/data/index.json", function(result) {
        if (!result["recommendblog"]) {
            $(".list").html('该栏目正在建设中，先去其他栏目下看看吧！');
            return false;
        }
        $(".list").html('');
        $.each(result["recommendblog"], function(i, data) {
            $(".list").append(`<div class="list-item">
        <img class='list-pic' src='${data.imgsrc}' />
        <div class="list-info">
            <a href="/src/blog.html?id=${data.id}" class='title'>${data.title}</a>
            <p class='desc'>${data.desc}</p>
        </div>
    </div>`);
        });
        if (!result["recommendauthors"]) {
            $(".authorslist").html('该栏目正在建设中，先去其他栏目下看看吧！');
            return false;
        }
        $(".authorslist").html('');
        $.each(result["recommendauthors"], function(i, data) {
            $(".authorslist").append(`<li style='margin-bottom:20px'>
                <a href="#" target="_blank" class="avatar">
                    <img src="${data.headimg}" /></a>
                    <a href="#" target="_blank" class="name">
                    ${data.name}
              </a>
              
               
                <p>
                   ${data.desc}
                </p>
            </li>`);
        });
    });
}

//动态加载首页推荐作者换一批
function loadauthorschange() {
    $.getJSON("/data/index.json", function(result) {
        if (!result["authors"]) {
            $(".authorslist").html('该栏目正在建设中，先去其他栏目下看看吧！');
            return false;
        }
        $(".authorslist").html('');

        let authors = result["authors"];
        var resultval = [];
        for (var i = 0; i < 3; i++) {
            var ran = Math.floor(Math.random() * authors.length);
            resultval.push(authors.splice(ran, 1)[0]);
        };
        //遍历
        $.each(resultval, function(i, data) {
            $(".authorslist").append(`<li style='margin-bottom:20px'>
                <a href="#" target="_blank" class="avatar">
                    <img src="${data.headimg}" /></a>
                    <a href="#" target="_blank" class="name">
                    ${data.name}
              </a>
              
        
                <p>
                   ${data.desc}
                </p>
            </li>`);
        });
    });
}

//根据类别动态加载博文列表数据
function loadlistdata(category) {
    $.getJSON("/data/list.json", function(result) {
        if (!result[category]) {
            $(".bloglist").html('该栏目正在建设中，先去其他栏目下看看吧！');
            return false;
        }
        $(".bloglist").html('');
        $.each(result[category], function(i, data) {
            $(".bloglist").append(`<div class="list-item">
        <img class='list-pic' src='${data.imgsrc}' />
        <div class="list-info">
            <a href="/src/blog.html?id=${data.id}" class='title'>${data.title}</a>
            <p class='desc'>${data.desc}</p>
        </div>
    </div>`);
        });
    });
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
    $.getJSON("/data/blog.json", function(result) {

        if (!result[id]) {
            $(".blogtitle").text('');
            $("article").html('很抱歉，您正在浏览的这篇内容走丢了，过一会再看吧！');
            return false;
        }
        $(".blogtitle").text(result[id].title);
        $("article").html(result[id].desc);
    });
}