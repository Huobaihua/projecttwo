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
    if(req.path=='/list'){
        let html = logic.showlist()
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

    if(req.path=='/add'){
      let html=  view.add();
      return html;
    }

    if(req.path=='/toadd'){
        let id = s.get('id')
        let name=s.get('name');
        let age = s.get('age');
        let img='https://n.sinaimg.cn/sinakd20123/184/w641h343/20230210/dee5-eba2584ec2852b9feaccd327cfc11fa8.jpg';
        let show=true;
        let obj={id,name,age,img,show};
        data.push(obj);

       let html= view.list()
       return html;
    }

}
module.exports=router;