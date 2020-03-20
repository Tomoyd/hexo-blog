## JavaScript内置类型

七种：

- String
- Number
- Boolean
- Undefined
- null
- Object
- Symbol

使用typeof 检查时，不会一一对应，除了null外都对应 且*返回的值是**小写**的**字符串***

> typeof null 返回的是 "object"
>
> typeof "123" === “string”
>
> typeof 123 === "number"
>
> typeof undefined === “undefined”
>
> typeof true ==="boolean"
>
> typeof {} ==="object"
>
> typeof Symbol() ==="symbol"
>
> typeof functionName==="function"
>
> 检测null 可以使用复合条件 typeof a==="object"&&!a

## 值和类型

JavaScript中，**变量是没有类型的， ** **只有值才有**

变量可以保存任何类型的值

1. typeof操作时，得到的结果是值的类型，而非变量的类型，总是返回一个字符串
2. 值的类型是无法修改的，但是可以将值转换为另外一个类型的值

#### undefined和undeclared

对于已经声明没有定义值的变量，typeof 会返回undefined

对于没有声明(undeclared的变量，typeof 仍然会返回undefined

> typeof 的安全防范机制使得一个未声明的变量也不会报ReferenceError错误，这样我们可以投机使用typeof 去识别某个全局变量是否被声明
>
> 应用：比如为某个缺失的功能写polyfill

**与undeclared变量不同的是**，访问某个对象上不存在的属性时，不会产生Reference错误

## 值

#### 数组

delete 运算符可以将从数组中将元素删除，不过并不会影响length属性，位置还是被占用的，不过此时为空，访问是为 undefined

如果一个键值能够被强制转换为十进制数字的话，会被当做数字索引来处理，数组键值的最大值影响length属性

#### 类数组

支持indexOf concat forEach等数组工具函数

如函数的argments对象或DOM元素列表

#### 字符串

相同点：都可以用索引访问，indexOf方法concat方法，对于索引，字符串并非总是合法语法，

str[1] 在老版本的IE中就不被允许，应该使用a.chartAt(1)

不同点：字符串是不可变的,而数组是可以变的,push pop splice,reverse

#### 数字

只有一种数字类型Number类型

```javaSript
//JavaScript中的正是就是小数部分为0的十进制数  IEEE754 双精度格式
42.0===42  //true
```

- 数字的语法；对于整数部分为0的，前面的0可以省略，小数部分为0的也可以省略

方法：toFixed() 指定小数位数，返回字符串

toPrecision():指定有效数位的显示位数，科学计数法有效位数

toExponential() 科学计数法，指数形式

对于常量时，.运算符首先会被识别为数字常量的一部分然后才是对象属性访问运算符

（42).toFixed()

42..toFixed()

0.4.toFixed()

有空格也是正确的，42 .toFixed()

十六进制：0x开头

八进制：0开头(ES6不再支持)，支持0o或0O

二进制：0b 或0B

Number.EPSILON  最小精度

#### 判断是否为整数

使用Number.isInteger ES6中的

之前的版本可以使用

```javascript
if(!Number.isInteger){
	Number.isInterger=function(num){
        return typeof num=="number"&&num%1==0
    }
}
```

检测是否为安全数

**isSafeInteger**

#### 特殊的值

null：关键字，不能做标识符，表示目前为空，赋过值

undfined：表示还没有赋值，可以做标识符，一般不会这样做，永远不要重新定义undefined

NaN：typeof NaN ===“number”  检测值是不是NaN 通过isNaN 可以但是 其他非数字的比如字符串也会返回true，因此可以利用NaN不等于自身来判断，也可以先检查类型是number 并且 isNaN为true

尽量使用Number.isNaN()

