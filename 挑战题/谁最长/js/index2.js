/**
 * 封装函数，传入任意数量的数组，返回长度最大的数组集合
 */
const getMaxArrays = (...arrays) => {
  // TODO：待补充代码
  if(!arrays || arrays.lenght <=0) return[]
  if(arrays.length === 1 && Array.isArray(arrays[0]))return [arrays[0]]
  let lengthArr = []
  for(let i = 0; i<arrays.length; i++){
    const item =arrays[i];
    if(!Array.isArray(item)) return[]
    lengthArr.push(item.length)
  }
  if(new Set(lengthArr).size === 1)return[]
  let maxLen  =Math.max(...lengthArr)
  return arrays.filter(item=>item.length === maxLen)
};
module.exports = getMaxArrays; //请勿删除
