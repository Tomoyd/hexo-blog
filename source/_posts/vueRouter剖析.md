---
title: vueRouter剖析
date: 2020-03-06 04:14:49
tags:
keywords:
description:
---
#### vueRouter使用

总体来看,要想使用vueRouter,需要三步:

- 声明一个vueRouter的实例
- 将vueRouter实例挂载到我们的vue实例的router选项
- 在组件中使用视图标签router-view

#### 路由基础

1. 路由匹配规则:通配符和匹配动态匹配,以及直接写死

   ```text
   path:"/foo/123"   只能匹配123
   path："/foo/:id"  以id为参数接收第二个数，可以匹配/foo/123 /foo/uuu 等
   path："/foo/*"    /foo/iii  /foo/8  /foo/hznag /foo/
   ```

2. 路由嵌套:

   1. 父组件中使用视图
   2. 路由规则上，添加children字段，包含子组件，路由信息

3. 路由导航:

   编程时导航路由实例调用push方法，this.$router.push()  

   - 参数可以是字符串如 “/foo”

   - 对象：{path:"/foo",params:{id:1}}  {name:"foo",params:{id:1}}  

     {name:"foo",query:{key:1}}

4. 命名视图和命名路由:

   1. 路由配置时可以给一个name属性以命名

   2. 视图也可以进行命名使用，以匹配相关的视图 如：

      ```text
      <router-view name="test"><router-view>
      
      在路由声明时，
      components:{
      	defualt:DefautComponent,
      	test:TestComponent
      }
      ```

      

5. 重定向和别名:

   redirect："/a",也可以是个函数，参数为to

   别名：为路由建立别名字，如path:"/a",alias:"/b"

6. 路由传参:

   参数会以params存在路由信息对象上，为了解耦，可以在路由声明上声明

   props为true，或者返回一个对象的函数，这个函数的参数为路由信息对象

7. 模式:

   命名为history是要注意增加一个能够覆盖所有的情况的候选资源，如果匹配不到任何静态资源，就返回一个index.html页面

#### 路由守卫

离开或进入时会触发的路由守卫：

##### 全局的路由守卫：

路由实例的beforeEach 三个参数 to form next

next() 参数可以是空，false，路径，error

beforeResolve：路由确认之前，同时所有组件内守卫和异步路由组件之后 触发

后置：

afterEach()  to,from

##### 路由独享守卫

beforeEnter选项to form next

##### 组件内守卫

beforeRouteEnter

beforeRouteUpdate

beforeRouteLeave

#### 路由元信息

路由配置的meta字段

可以在路由信息matched字段中查找

#### 过渡效果

可以在视图上加一些过渡效果

#### 数据获取

可以选择在路由组件的钩子函数和路由钩子函数中获取API数据

#### 滚动行为

添加scrollBehavior：字段在由实例里面，返回一个对象 位置信息{x:0,y:0}或者{selector：to.hash}

#### 懒加载：

使用import动态引入组件 import("a.vue")

使用webpack打包到一个文件chunk中：import(/* webpackChunkName: "group-foo" */ './Foo.vue')