let view = require('./view')
let data = require('./data');
let logic = require('./logic')



let router=(req,res)=>{
     let url = "http://localhost:8080"+req.url;
       console.log(url);
     let myurl = new URL(url);
     let s=myurl.searchParams;

    if(req.path=='/'){
        let html = view.login();
        return html;
    }
    if(req.path=='/list'){// 人员列表
      // 1 数据
      let data= logic.showlist()
      // 2 页面
       let html= view.list(data);
        return html;
    }

    if(req.path=='/detail'){// 详情页
        // http://localhost:8080/detail?id=3
      
        let id = s.get('id');
        // console.log("要查看的id是"+id);
       let HTML= logic.detail(id);
       return HTML;
    }

    if(req.path=="/del"){
        let id=s.get('id');
        console.log("要删除的id是"+id);

      let HTML= logic.del(id);
      return HTML;
    }

    if(req.path=='/add'){//需要一个添加页面
      let html=  view.add();
      return html;
    }

    if(req.path=='/toadd'){// 向数据库添加一个人，并且显示新的列表
        let id = s.get('id')
        let name=s.get('name');
        let age = s.get('age');
        let img='https://n.sinaimg.cn/sinakd20123/184/w641h343/20230210/dee5-eba2584ec2852b9feaccd327cfc11fa8.jpg';
        let show=true;
        let obj={id,name,age,img,show};
        // data.push(obj);

        let html= logic.add(obj);

      //  let html= view.list()
       return html;
    }
 
    if(req.path=="/update"){ // 查找原始数据，返回带原始数据的更新页面
      let id = s.get('id');
      // 1 找到原始数据
     let obj= logic.searchOne(id);
     console.log("路由update收到逻辑给找到的信息是");
     console.log(obj);
      // 2 把数据嵌入到页面显示给用户
     let html= view.update(obj);    
        return html;
    }
    
    if(req.path=='/toupdate'){
      let id=s.get('id');
      let name=s.get('name');
      let age=s.get('age');
      let obj={id,name,age}
        let arr= logic.update(obj)
       let html= view.list(arr);
       return html;
    }
}
module.exports=router;

/*
/list   人员列表
/add  增加页面
/toadd  添加信息，显示最新人员列表

*/