---
title: event_loop
date: 2020-01-04 23:54:01
tags: js
---

## 事件循环

> 事件循环机制

`JavaScript`是单线程的，事件循环就是解决其运行阻塞的一种机制

宏任务：script，`setTimeout`，`setInternal`,`setImmediate`,I/O，`UI`事件

微任务：process，`nextTick`，Promise，`Object.observe`,`MutationObserver`

**1. 主线程执行任务，会形成一个执行栈，从任务列表中读取任务是循环不断的，这个运行机制形成了事件循环，**

**2. 执行第一个宏任务，依次执行代码，遇到微任务推到微任务队列中，遇到宏任务放到宏任务队列中**

**3. 执行完第一个宏任务中的非宏任务和非微任务代码后，取出所有的微任务，执行完**

**4. 取出宏任务队列首个宏任务，按照步骤2,步骤3，步骤4循环执行，直到所有的执行完**

**注意：对于所有的同步任务来说，同步用会在主线程形成一个执行栈**

**对于异步任务，等待某个时机，触发线程，将回调函数加到队列中执行**

```javascript
new Promise(resolve => {
    resolve(1);
    Promise.resolve().then(() => console.log(2));
    console.log(4)
}).then(t => console.log(t));
console.log(3);
```

依次会输出：4，3，2，1