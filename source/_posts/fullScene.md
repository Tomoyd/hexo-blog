---
title: fullScene
date: 2019-11-21 23:46:51
tags: dom
---
## 浏览器全屏
实现全屏功能，首先要考虑到的是浏览器兼容的问题，各个浏览器的全屏实现方法及标准的实现方法;其次要考虑到功能完整性，开启全屏和关闭全屏应是一致出现的,[预览地址](<https://tomoyd.github.io/FrontedTechStack/demo/FullScreen/full-screen>)
<!-- more -->
## 全屏方法处理
调用dom元素的标准全屏方法requestFullScreen()，考虑到兼容各个浏览器故有以下代码 ：

```javascript
const getMyRequestFullScreen=()=>{
    let myEl = document.documentElement;
    return myEl.requestFullScreen||myEl.webkitRequestFullScreen
    ||myEl.mozRequestFullScreen||myEl.msRequestFullScreen
}
// 调用得到通用的函数句柄
let openFullScreen=getMyRequestFullScreen()
// 为函数指定this的值，这里使用call（），这里假设targetElement为我们所要全屏的对象
openFullScreen.call(targetElement)
```

## 退出全屏处理

退出全屏，需要调用document的标准方法exitFullscreen(),兼容各个浏览器故有：

```javascript
const getExitFullScreen=()=>{
	return document.exitFullScreen||document.mozCancelFullScreen||
	document.webkitCancelScreen||document.msExitFullScreen
}
let exitFullScreen=getExitFullScreen()
exitFullScreen.call(targetElement)
```

## 判断是否处于全屏

标准属性fullscreenElement是否为null可以判断，考虑到各个浏览器兼容性故有：

```javascript
const isFullScreen=()=>{
	return (document.fullscreenElement&&document.fullscreenElement!==null)||
        document.webkitIsFullScreen||document.mozFullScreen
}
```

## 综合上述

 

```javascript
const handleFullScreen=(targetElement)=>{
	let openFullScreen=getMyRequestFullScreen()
	let shutFullScreen=getExitFullScreen()
	let isFull=isFullScreen()
	if(isFull){
		shutFullScreen()
	}else{
        openFullScreen()
    }
}
```

