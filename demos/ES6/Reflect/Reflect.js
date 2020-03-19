/*
* Reflect 为操作对象而提供的新的API
* 1.看起来属于语言内部上的方法，如Object.defineProperty
* 放到Reflect对象上
* 2.修改Object方法的返回结果，让其变得更合理，比如Object.defineProperty(obj,name,desc)无法定义时会抛出错误，而Reflect对应的会返回false
* 3.让Object操作都变成函数行为 如 name in Object ,delete object[name]
* Reflect响应的 has(obj,name)和Reflect.deleteProperty(obj,name)
* 4，Reflect对象上的方法和Proxy方法意义对应
* */
