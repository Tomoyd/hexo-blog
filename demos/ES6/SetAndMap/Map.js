/*
* 传统上的JavaScript只能使用字符串做键，Map可以使用对象作为键值
* Map()构造函数 初始化时接收一个数组作为参数，该数组的成员是表示键值对的数组,任何具有双元素数组的数据结构都可以当做Map构造函数参数
* 方法有：set() get() has() delete()
* 对象转为数组使用Object.entries()
* */

const map=new Map([["name","张三"]]);
map.size
map.set("age",111);
map.get("age")
map.has("name")
console.log(map)
console.log([...map])
map.clear();
console.log(map);
// weakMap只接受对象作为键名(null)除外


let obj={
    value:1,
    get a(){
        return this.value
    },
    set a(value){
        this.value=value+1
    }
}
console.log(obj.a)
obj.a=9
console.log(obj.a)







