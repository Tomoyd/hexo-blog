---
title: a 标签
date: 2019-11-15 01:04:00
tags: a 标签
categories: HTML
comments: false
---

## 使用背景

a 标签在实际开发过程中是会常用到，比如**下载，跳转页面，导航**等功能的实现，[示例地址](<https://tomoyd.github.io/hexo-blog/demos/aTag.html>)

## 实现下载

有三种方式可以实现

- 直接使用`href`属性链接到资源地址

  ```html
  <a href="资源地址">下载</a>
  ```

- 加入download属性

  ```html
  <a href="资源地址" download>下载</a>
  ```

这两种方式其实可以看做是一种下载方式，不带download属性时，浏览器会执行默认行为，即浏览器能打开预览的则打开预览，否则直接下载

- JavaScript 实现下载

  这种方式本质上也是创建一个可以链接资源的标签，然后进行手动点击，触发资源请求下载,本主题当然是使用a标签了

  ```javascript
         function dowloadFile（）{
                 let aTag=document.createElement('a')
                  aTag.download="text.txt"
                  aTag.style.display='none'
  
                  //    创建a标签的href连接的地址
                  aTag.href="资源地址"
                  //    手动点击
                  aTag.click();
                  aTag=null
         }
  ```

  还有一种需求就是**导出**功能，其实导出的话其原理是一致的，只是需要自己根据内容**创建URL地址**

  ```javascript
  // 创建内容的连接地址
  let blogContent=new Blog([content]) // content 为我们要导出的内容
  let urlContent = URL.createObjectURL(blogContent)
  //urlContent赋给href属性即可
  ```

  