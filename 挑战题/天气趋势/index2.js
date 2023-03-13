// 指定图表的配置项和数据
const charData = {
title: {
text: '云课课程销量和销售额看板',
left: 'center',
},
grid: {
top: 80,
},
tooltip:{
show: true,
},
xAxis: {
data: [],
},
yAxis: [{
type: 'value',
name: '销售额',
position: 'left',
},
{
type: 'value',
name: '销量',
position: 'right',
}],
series: [
{
name: '销售额',
type: 'line',
data: [],
yAxisIndex: 0,
smooth: true
},
{
name: '销量',
type: 'bar',
data: [],
yAxisIndex: 1,
smooth: true
}
]
};
// 以下代码为模拟后端服务器返回数据
let index = 0;
function Ajax() {
return new Promise((resolve, reject) => {
const randomSum = () => (Math.random() * 500 + 900).toFixed(2);
const randomCount = () => (Math.random() * 50 + 80).toFixed(2);
let i = index++ * 10
let key = 10:${i == 0 ? "00" : i};
let saleObj = {};
let countObj = {};
if (index < 7) { Object.assign(saleObj, { [key]: randomSum() }) Object.assign(countObj, { [key]: randomCount() }) }
    javascript Copy code const respondBody={ "code" : 200, "msg" : "success" , "data" : { saleObj, countObj } };
    setTimeout(()=> {
    resolve(respondBody);
    }, 1000)
    })
    }

    async function renderChart() {
    const result = await Ajax();
    const { saleObj, countObj } = result.data;
    const myChart = echarts.init(document.getElementById('main'));
    charData.xAxis.data = Object.keys(saleObj); // X轴时间
    charData.series[0].data = Object.values(saleObj); // 销售额
    charData.series[1].data = Object.values(countObj); // 销量
    myChart.setOption(charData, true);
    document.querySelector("#data").innerText = JSON.stringify(charData);
    }
    renderChart();
    let times = 0;
    let timer = setInterval(() => {
    renderChart();
    ++times == 6 && clearInterval(timer);
    }, 2000);

    修复说明：

    在配置项中，调整了 title 的设置，去除了不必要的属性，并将文本居中显示；
    在 yAxis 中，设置了 position 属性来指定 “销售额” 和 “销量” 的位置；
    在 series 中，将 “销售额” 和 “销量” 的 data 属性都设置为空数组，因为后续会通过 AJAX 动态获取数据并赋值；
    在 Ajax 函数中，调整了生成随机数的方法，同时将生成的数据包装在对象中返回；
    在 renderChart 函数中，获取了 AJAX 返回数据的 saleObj 和 countObj，并将