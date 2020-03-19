/*
* Proxy 用于修改某些操作的默认行为
* 等同于在语言层面做出修改，属于一种元编程，对编程语言进行编程
* 可以认为在目标对象，进行赋值取值之前进行了一层拦截，对该对象的访问都必须先通过这层拦截，可以对外界的访问进行过滤和改写
*
* Proxy 接收两个参数 一个是target对象，一个是handler handler一般可以设置get 和set钩子函数
* get接收三个参数 分别是target propKey receiver(即proxy本身)
* set接收四个参数 target propKey value receiver
* */

let proxy=new Proxy({},{
    get(target, p, receiver) {
        console.log("get",target,p,receiver)
        return Reflect.get(target,p,receiver)
    },
    set(target, p, value, receiver) {
        console.log("set",target,p,value,receiver)
        return Reflect.set(target,p,value+1,receiver)
    }
});
// proxy.count=1;

let funProxy=new Proxy(function (x,y){
    return x+y
},{
    get(target, p, receiver) {
        if(p==="prototype"){
            return Object.prototype
        }
        return "say:"+p
    },
    apply(target, thisArg, argArray) {
        console.log(thisArg,argArray)
        return argArray[0]
    },
    construct(target, argArray, newTarget) {
        console.log("constructor",newTarget,argArray)
        return {value:argArray}
    }
})
funProxy(2,3);
new funProxy(3,4)
console.log(funProxy.prototype===Object.prototype)
console.log(funProxy.gender)


