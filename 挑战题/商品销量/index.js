/**

@description ajax 请求，通过传递的 currentPage, pageSize 获取到当前页和总页数的数据
@param {string} url 请求地址，必填
@param {string} method 请求方式，可选参数，默认为 get
@param {object} query 查询参数对象，包括 currentPage 和 pageSize，必填
@return {object} {data,total} data为data.json中data数组的部分数据，total为data.json中total的值
*/
async function ajax({ url, method = "get", query: { currentPage, pageSize } }) {
    // 根据函数参数 query 对象 currentPage, pageSize 获得当前页的数据
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const response = await fetch(${url}?start=${start}&end=${end});
    const { data, total } = await response.json();
    return { data, total };
    }
    class Pagination {
    /**
    * @param {Element} root
    * @param {object} config 配置对象，包括 pageSize、total、pagerCount、currentPage 和 currentChange，其中 pageSize、total 和 pagerCount 为必填项，currentPage 和 currentChange 为可选项
    */
    constructor(root, { pageSize, total, pagerCount, currentPage = 1 }, { currentChange } = {}) {
    if (pagerCount % 2 === 0) {
    pagerCount--;
    }
    this.root = root;
    this.pageSize = pageSize || 10;
    this.total = total;
    this.pagerCount = pagerCount || 7;
    this.currentPage = currentPage || 1;
    this.currentChange = currentChange || (() => {});
    
    kotlin
    Copy code
        this.totalPages = Math.ceil(total / pageSize);
        this.initPagination();
    }
    
    /**
     * @description 初始化分页组件，首次创建和 this.currentPage 改变时调用
     * */
    initPagination() {
        const indexArr = createPaginationIndexArr(this.currentPage, this.totalPages, this.pagerCount);
        const template = this.renderPagination(indexArr);
        this.root.innerHTML = `
            <div class="pagination">
                <div class="btn btn-left" id="btn-prev">&lt;</div>
                <ul class="pager">${template} </ul>
                <div class="btn btn-right" id="btn-next">&gt;</div>
            </div>
        `;
        this.initEvents();
        this.currentChange(this.currentPage);
    }
    
    /**
     * @description 根据序号数组生成分页组件的字符串模板
     * @param {Array} indexArr 分页数组 indexArr
     * @return {String} 分页组件的字符串模板
     */
    renderPagination(indexArr) {
        let template = '';
        indexArr.forEach((index, i) => {
            if (index === 'more-prev' || index === 'more-next') {
                template += `<li class="pager-ellipsis more">${index === 'more-prev' ? '...' : '...'}</li>`;
            } else {
                const isActive = index === this.currentPage ? 'active' : '';
                template += `<li class="pager-item ${isActive}" data-page="${index}">${index}</li>`;
            }
        });
        return template;
    }
    
    /** 
     * @description 事件绑定，改变 this.currentPage 的值,值在 1 到 this.totalPages 之间
     **/
    initEvents() {
        this.root.querySelector("#btn-prev").