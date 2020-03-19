/*
* Set 构造函数：成员值是唯一的，没有重复的值
* 方法：add()，delete() has() clear() Array.from() 可以将set 转化为数组
* .keys() values() entries() forEach()  默认的遍历器是values
* 会认为 NaN与NaN相同
* 构造函数接收一个数组或者一个具有iterable接口的其他数据结构作为参数，用来初始化
* */

const testSet1 = new Set("1234uio");
console.log(Array.from(testSet1))

console.log("keys:",testSet1.keys(),"values",testSet1.values(),"entries",testSet1.entries());
for(let item of testSet1.entries()){
    console.log(item)
}
testSet1.forEach((item,key,setItem)=>{
    console.log(item,key,setItem)
})

// weakSet

/*
* 它的成员只能是对象，不可以遍历
* 初始化时 数组对象的成员必须是成对的数组
* */
let ws=new WeakSet()
ws.add([[1,3]])
console.log(ws);
ws.add([1,3])
console.log(ws);
// new WeakSet([1,3])  TypeError
