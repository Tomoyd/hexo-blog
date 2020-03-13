/* 场景需求，
* 分页的效果不是太好尤其是图片类的展示，
* 这时我们可以用无限分页模式，
* 网页达到视口的底部时进行自动加载下一部分
*
* 1. 视口滚动到底部
* 2. 触发加载更多后面的内容
* 可能的问题
*
* scrollHeight：全不内容的高度
* clientHeightL视窗的高度
* scrollTop视窗上面隐藏的部分
* */

const colors=["Gray","Green","GreenYellow",
    "HoneyDew","HotPink","IndianRed","Indigo","Ivory",
    "LightCyan",
    "lightGoldenRodYellow"];
function scrollCallBackFunc(myDiv,color) {
    let p=document.createElement("p",);
    p.style.height=100+"px";
    p.style.backgroundColor=color;
    myDiv.appendChild(p)
}
function throttleHandler(fn,delay){
    var timeouter=null
    let myDiv=document.querySelector("div");
    myDiv.style.height=window.innerHeight+100+"px";
    colors.forEach(item=>{
        fn(myDiv,item)
    });
    return ()=>{
        if(myDiv.children.length<100&&window.pageYOffset>100){
            if(!timeouter){
                timeouter=setTimeout(()=>{
                    clearTimeout(timeouter);
                    timeouter=null
                },delay);
                    fn(myDiv,colors[Math.floor(Math.random()*10)])
                }
        }
    }
}
window.onload=()=>{
    window.onscroll=throttleHandler(scrollCallBackFunc,100)
}

