/*
* Iterator 遍历器，集合的数据结构，主要是数组和对象
* set和map
* 作用有三个：
* 1.为各种数据结构，提供一个统一的，简便的访问接口；
* 2.使得数据结构的成员按照某种次序排列
* 3.ES6创造了一种新的遍历命令for ...of
*
* Iterator 遍历器过程是这样的
* 1，创建一个指针对象，指向当前数据结构的起始位置，也就是说遍历器的本质就是一个指针对象
* 2，第一次调用next方法，可以将指针指向数据结构的第一个成员
* 3，第二次调用指针对象的next方法，指针指向数据结构的第二个成员
* 4，不断调用直到结束
* 注：每次调用返回的是一个包含value和done两个属性的对象，其中value属性是当前成员的值，done是一个布尔值，表示遍历是否结束
*
* */
function makeIterator(array){
    var  nextIndex=0;
    return{
        next:function () {
            return nextIndex<array.length ? {value:array[nextIndex++],done:false}:{value:undefined,done:true};
        }
    };
}
var it=makeIterator(["a","b"]);
console.log(it.next());
console.log(it.next());
console.log(it.next());

