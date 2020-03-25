// 防抖问题
function debounce(fn, delay) {
    let timer = null
    return function (str) {
        console.log(99)
        clearTimeout(timer)
        timer = setTimeout(() => {
            //自动补全搜索的实现
            console.log(fn(str))
        }, delay);
    }
}

let selectionList = ["张三大", "张三小", "张三三", "张三的歌", "王老板"]

function fn(str) {
    let fragment=document.createDocumentFragment();

    let children=selectionList.filter(item => {
        return item.indexOf(str) === 0
    })
   children.map(item=>{
        let option=document.createElement("option");
        option.value=item
        fragment.appendChild(option);
    });
    document.getElementById("cardtype").innerHTML=""
    document.getElementById("cardtype").appendChild(fragment)
}
const input=debounce(fn, 100);

// debounce(fn, 100)("张三");
//节流
function throttle(fn,delay){
    let timer=null
    return function (value) {
        if(timer==null){
            fn(value)
        }
        timer=setTimeout(()=>{
            clearTimeout(timer)
            timer=null
        },delay)
    }
}
