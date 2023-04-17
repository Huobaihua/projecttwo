let data = require('./data');
let view = require('./view')


let showlist=()=>{
    data = data.filter(item=>item.show==true);
  let html=  view.list(data);
  return html;
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


module.exports={detail,showlist,del}