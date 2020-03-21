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

- null：关键字，不能做标识符，表示目前为空，赋过值

- undfined：表示还没有赋值，可以做标识符
  1. 使用void 运算符，可以返回undefined   一般不会这样做，如void 0
  2. 永远不要重新定义undefined

- NaN：是number类型 typeof NaN会返回"number"，自身不等于自身

  1. 使用window.isNaN：NaN值和非数字值都会返回true

  2. ES6提供的isNaN函数：Number.isNaN() :只有NaN值才返回true，相应的polyfill:

     ```javascript
     if(!Number.isNaN){
         Number.isNaN=function(num){
           // return num!==num  
             return (typeof num==="number")&&(window.isNaN(num))
         }
     }
     ```

- 无穷数

  正负无穷数：

  正无穷：Infinity

  负无穷：-Infinity

  正无穷可以与正无穷相加

  负无穷可以与负无穷相加

  无穷异号相加，为NaN

  无穷数相除为NaN

  相乘为对应的无穷数

  有穷整数除以无穷数为0

  0乘以无穷数为NaN

- 零值

  -0 0

  加减法不会得到负号0，除非0前面有负号

  从正负零转为字符串都是 “0”

  从字符串正负0转为Number时，会正确的转化  === == 号比较正负零总是true

  判断是否为负零：

  ```javascript
  function isNegZero(n){
      n===Number(n);
      return (n===0)&&(1/n===-Infinity)
  }
  ```

  #### 特殊等式：

  Object.is()  函数

  来判断是否绝对相等，可以用来判断，NaN和-0等情况

  polyfill

  ```javascript
  if(!Object.is){
  	Object.is=function(v1,v2){
  		// -0情况
          if(v1===0&&v2===0){
              return 1/v1===1/v2
          }
          //NaN
          if(v1!==v1){
              return v2!==v2
          }
          retuen v1===v2
  	}
  }
  ```

  #### 值和引用

  JavaScript对值和引用的赋值在语法上没有区别

  简单值总是通过值赋值来进行赋值传递

  复合值总是通过引用复制的方式来赋值/传递

  基本类型即使是类型封装，也不能修改其值



## 原生函数

- String()
- Number()
- Boolean()
- Array()
- Object()
- Function()
- RegExp()
- Date()
- Error()
- Symbol()

基本类型封装后返回的是object

```javascript
let a=new String(12)
typeof a==="object";//true
```

#### 内部属性

typeof 返回为 object的对象 都包含一个内部属性[[Class]]

这个属性无法直接访问，可以通过Object.prototype.toString.call(obj)来查看

```javascript
Object.prototype.toString([1,2,3])// "object Array"
```

这样我们可以进行参考基本类型值的自动包装

#### 封装对象包装

> 基本类型值没有.length 和.toString这样的属性和方法
>
> 此时JavaScript会自动为基本类型值包装一个封装对象

封装对象总是truthy

#### 拆封

通过valueOf() 函数进行拆封

用到封装类型的值时会发生隐式拆封(即强制转换)

#### 原生函数做构造函数

1. 可以使用new 也可以不用
2. 能不用尽量不用

Date()  创建对象必须使用new 

Error() 带不带new都可以

Symbol：不能带new

###### 原生原型

原生构造函数都有自己的prototype对象，该对象上包含类型的特有行为特征

## 强制类型转换

隐式转换的情况：强制类型转换

JavaScript中强制类型转换总是返回标量基本类型值，发生在语言的运行时

#### 抽象值操作：

字符串，数字和布尔值之间的类型转换基本规则

1. ToString

   一般来说toString和JSON.stringify（）字符串化基本上一一致

   对于一些符合JSON结构标准的都是可以用JSON字符串化的

   而一些不符合JSON结构标准：undefined，function，symbol以及循环引用

   **直接遇到他们，JSON会返回undefined**

   **在数组中，转为null**

   **在对象中，会被忽略**

   循环引用的对象执行时会报错

   JSON.stringify序列化对象时会执行对象上的toJSON方法

   此外：JSON.stringify可以传递一个可选参数

   可选参数可以是一个数组，对象属性的数组，包含在数组中的属性将会被序列化

   可选参数是一个函数，两个参数为键和值，如果想忽略某个可以返回undefined，

   还有参数为space 控制缩进

   **JSON.stringify并不是强制类型转换，但是它涉及ToString类型转换**

   1. 对于数字，字符串,布尔值，null JSON.stringify规则与ToString基本相同
   2. 如果传递给JSON.stringify的对象中定义了 toJSON方法，name该方法会在字符串化前调用，以便将队形转为安全的JSON值

2. ToNumber；

   - true转换为1，false转换为0 undfined NaN ，null 0
   - 处理失败时会返回NaN

   对于对象，首先转换为相应的基本类型值，如果返回的是非数字的值，再按照以上进行强制转换

   为了将值转换为相应的基本类型值，抽象操作ToPrimitive，首先检测是否有valueOf方法

   如果有并且返回基本类型值，就使用盖子进行强制转换，否则就使用toString返回值进行前置转换

   均不返回则会报错

   如Object.create(null)值就没有valueOf()和toString()

3. ToBoolean

   - 假值：

     undefined

     null

     false

     -0，0 NaN

     “”

     假值对象，不属于js语言的范畴，将他们强制转换时会为false，如document.all

     假值的封装对象都为真

     

     #### 显示强制转换

     数字和字符串之间通过 String() Number()内建函数

     强制转换还有，正负符号，toString()

     1. 日期显示转换为数字

     +new Date()

     2. ~运算符 ~(x)  ===-(x+1)

     3. 显示解析字符串数字

        Number():全体的情况

        parseInt()：考虑部分的情况，只能是字符串值或者数值，基数决定了有效数字范围

        parseFloat()：考虑部分的情况，只能是字符串值或者数值

     4. 显示转换为布尔值

        Boolean

        !!

#### 隐式强制类型转换

> 减少代码冗余，让代码更简洁

1. 数字与字符串之间的隐式转换

   +运算符，有一个未字符串，则另一个会被转为字符串

   1. 如果有一个是对象首先对其调用ToPrimitive操作，数字调用上下文，

      如数组会将两个数据调用，valueOf，toString之后进行相加

   2. 如果一个操作数为字符串则进行字符串拼接

   3. 否则数字加法

   -号，首先转为字符串，然后再将字符串转换为数字

2. 布尔值

   条件判断 if while for do...while

   ||和&& 选择器运算符



#### 宽松相等和严格相等

== 允许在相等比较中进行强制类型转换

===不允许



比较时：

转换规则，对象<字符串<布尔值<数字

## 语法

#### 语句和表达式

1. 语句 相当于句子

2. 表达式相当于短语
3. 运算符相当于标点符号和连接词

###### 语句的结果值

使用ES7 的do{表达式} 可以获取语句的结果值

## 优先级

&&大于|| 大于？：

## 错误

编译阶段的错误，无法通过trycatch捕获