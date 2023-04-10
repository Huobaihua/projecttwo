/**
 * @description: 数据类型检测
 * @param {*} data 传入的待检测数据
 * @return {*} 返回数据类型
 */
function getType(data) {
  // TODO：待补充代码
if(typeof data != 'object'){
  return typeof data;
}
// return Object.prototype.toString.call(data).replace(/^\[object (/S+)/]$/,"$S1")
return Object.prototype.toString.call(data).slice(8,-1)
}

module.exports = {
  getType
}


// console.log(typeof 's');
// console.log(typeof 0);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof Symbol());
// console.log(typeof 123n);
// console.log(typeof null);
// console.log(typeof function fn(){});
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof new Date);
// console.log(typeof new Map);
// console.log(typeof new Set);
// console.log(typeof /a/);


console.log(Object.prototype.toString.call('s'));
console.log(Object.prototype.toString.call(0));
console.log(Object.prototype.toString.call(false));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(Symbol()));
console.log(Object.prototype.toString.call(123n));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(function fn(){}));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(new Date));
console.log(Object.prototype.toString.call(new Map));
console.log(Object.prototype.toString.call(new Set));
console.log(Object.prototype.toString.call(/a/));

