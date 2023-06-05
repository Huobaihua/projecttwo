    项目前期分析

功能    表     操作
登录    用户   查询
注册    用户   查询


    查询所有用户    文章表    查询
首页
    推荐作者     用户     查询


  IT技术   分类文章列表   文章表  查询


  个人中心    当前用户信息    缓存     缓存数据
              当前用户文章   文章表   查询

写文章     写文章   文章表    增加

前端：
http://127.0.0.1:5500/%E9%A1%B9%E7%9B%AE/%E8%93%9D%E6%A1%A5%E6%8A%80%E6%9C%AF%E7%A4%BE%E5%8C%BA/web/src/list.html
后端：
http://localhost:3001/api/articleList

获取首页文章数据
_id	文章的唯一编号
title	文章标题
desc	文章摘要
author	文章的作者
authorId	作者 ID
classify	文章分类
content	文章内容


获取首页推荐作者
_id	作者的唯一编号
userName	作者名
headImg	作者头像地址
desc	作者描述

文章分类页加载文章列表数据
_id	文章的唯一编号
title	文章标题
time	发布时间
desc	文章摘要
author	文章的作者
authorId	作者 ID
classify	文章分类
content	文章内容

用户登录
userName	用户名
userPassword	密码
userId	用户 ID
userName	用户名
headImg	用户头像

用户注册
名称	说明
userName	用户名
userPassword	密码
desc	个人简介
响应数据说明：

名称	说明
userId	用户 ID
userName	用户名
headImg	用户头像
desc	个人简介
createTime	注册时间

个人中心页加载文章列表数据
_id	文章的唯一编号
title	文章标题
desc	文章摘要
author	文章的作者
authorId	作者 ID
classify	文章分类
content	文章内容

新增文章
名称	说明
title	文章标题
content	文章内容
desc	文章摘要
author	作者名
authorId	作者 ID
classify	文章分类
响应数据说明：

名称	说明
true	表示新增成功

更新文章
名称	说明
title	文章标题
content	文章内容
desc	文章摘要
author	作者名
authorId	作者 ID
classify	文章分类
响应数据说明：

名称	说明
title	文章标题
content	文章内容
desc	文章摘要
author	作者名
authorId	作者 ID
classify	文章分类