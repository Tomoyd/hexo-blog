// 异步加载图片

console.log(window)
const asyncLoadImage=(url)=>{
    console.log(Image)
    return new Promise((resolve,reject)=>{
        console.log(Image)
        let imageLoader=new Image()
        console.log(99)
        imageLoader.onload=function () {
            resolve(imageLoader)
        };
        imageLoader.onerror=()=>{
            reject(new Error("加载不了该图片"))
        };
        imageLoader.src=url
    })
}
asyncLoadImage("http://es6.ruanyifeng.com/favicon.ico").then(resolve=res=>{console.log(res)},
    reject=err=>{
    console.log(err.message)
})