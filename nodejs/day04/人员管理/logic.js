// let data = require('./data');
let data=[
  {id:1,name:'高启强',age:30,
  img:'https://t10.baidu.com/it/u=1496909903,196968944&fm=30&app=106&f=PNG?w=640&h=360&s=D8259D540053818888A875530300C0E4',
  show:true},
  {id:2,name:'高启盛',age:28,
  img:'https://img2.baidu.com/it/u=668058670,2919039418&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=451',
  show:true},
  {id:3,name:'陈舒婷',age:29,
  img:'https://n.sinaimg.cn/sinakd20123/184/w641h343/20230210/dee5-eba2584ec2852b9feaccd327cfc11fa8.jpg',
  show:true},
  {id:4,name:'唐小龙',age:27,show:false},
]

module.exports=data;
let view = require('./view')


let showlist=()=>{
    data = data.filter(item=>item.show==true);

  // let html=  view.list(data);
  return data;
}

let detail=(id)=>{
    let obj= data.filter(item=>item.id==id);
    let user = obj[0];
   let html=view.detail(user)
   return html;
}

let del=(id)=>{
    for(var i=0;i<data.length;i++){
        if(data[i].id==id){
            data[i].show=false
        }
    }
    data = data.filter(item=>item.show==true);
  let html=view.list(data);
  return html;
}

let add=(obj)=>{
  data.push(obj);/// 添加

  data = data.filter(item=>item.show==true);
  let html=view.list(data);
  return html;

}

let searchOne=(id)=>{
  console.log("仓库管理员searchOne收到的id是"+id);
  let obj={};
  for(var i=0;i<data.length;i++){
    if(data[i].id==id){
      obj=data[i]
    }
  }
   return obj;
}

let update=(obj)=>{
  for(var i=0;i<data.length;i++){
    if(data[i].id==obj.id){
      data[i].name=obj.name;
      data[i].age=obj.age
    }
  }
 // 过滤出最新要显示的数据
  data = data.filter(item=>item.show==true);
  
  return data;
}


module.exports={detail,showlist,del,add,searchOne,update}