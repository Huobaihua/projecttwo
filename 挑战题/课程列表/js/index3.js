let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数

// TODO：待补充代码

// 显示当前页码
function showPagination(maxPage,pageNum){
  document.querySelector('#pagination').innerHTML =`
  共${maxPage}页,当前${pageNum}页
  `
}

//得到每页数据
function getPageData(data){
  return data.slice((pageNum - 1)*5,pageNum*5)
}
//渲染每一页
function renderHtml(pageData){
  document.querySelector('#list').innerHTML = pageData.map(item=>`
  <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${item.name}</h5>
      <small>${(item.price / 100).toFixed(2)}</small>
    </div>
    <p class="mb-1">
      ${item.description}
    </p>
  </a>
  </div>
  `).join('')
}

let data //总数据
let pageData //每页数据

axios.get('./js/carlist.json')
.then(res=>{
  data = res.data
  console.log(data);
  maxPage = Math.ceil(data.length / 5)
  // 显示当前页码
  showPagination(maxPage,pageNum)
  //得到每页数据
  pageData = getPageData(data)
  console.log(getPageData);
  //渲染每一页
  renderHtml(pageData)
})


// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  prev.classList.remove('disabled')
  pageNum--
  console.log(pageNum);
  if(pageNum<= 1){
    this.classList.add('disabled')
    pageNum = 1
  }
    // 显示当前页码
    showPagination(maxPage,pageNum)
    //得到每页数据
    pageData = getPageData(data)
    console.log(getPageData);
    //渲染每一页
    renderHtml(pageData)
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码
  prev.classList.remove('disabled')
  pageNum++
  console.log(pageNum);
  if(pageNum>= maxPage){
    this.classList.add('disabled')
    pageNum = maxPage
  }
    // 显示当前页码
    showPagination(maxPage,pageNum)
    //得到每页数据
    pageData = getPageData(data)
    console.log(getPageData);
    //渲染每一页
    renderHtml(pageData)
};
