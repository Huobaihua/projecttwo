/**
 * 封装函数，函数名 getRandomNum(min,max,countNum)
 * 生成 min~max 范围的 countNum 个不重复的随机数，存入数组并返回
 */
//生成指定数目和范围的随机数
// const getRandomNum = function(min, max, countNum) {
//     var arr = [];
//     for (let i = 0; i < countNum; i++) {
//         let number = Math.round(Math.random() * (max - min)) + min
//             // 如果数组里已经存在该数则重新生成
//         while (arr.indexOf(number) !== -1) {
//             number = Math.round(Math.random() * (max - min)) + min
//         }
//         arr.push(number)


//     }
//     // 在此处补全代码
//     return arr;
// };

// 法二
const getRandomNum = function(min, max, countNum) {
    var arr = [];
    // 在此处补全代码
    let set = new Set()
    while (set.size < countNum) {
        let number = Math.floor(Math.random() * (max - min)) + min;
        set.add(number)
    }
    arr = [...set]
    return arr;
};
module.exports = getRandomNum; //请勿删除