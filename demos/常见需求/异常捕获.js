function  eventHandler(){
    console.log()
}
window.onload=()=>{
    window.onerror=(e)=>{
        console.log(e)
    };
    try {
        setTimeout(()=>{
            throw new Error('setTimeout,异步错误')
        })
    } catch (err) {
        console.log("捕获到了异常"+err)
    }
    new Promise(resolve=>{
        throw new Error("错误Promise")
    }).catch(e=>{
        console.log(e)
    })
    let xhr=new XMLHttpRequest();
    try{
        xhr.open("get");
    }catch (e) {
        console.log(e)
    }
    try{
        console.log('')
    }catch (e) {

    }
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4){

        }
    };
    xhr.send(null);
    xhr.onerror=(e)=>{
        console.log(e.message)
    }
    // console.log(')
    console.log(a)

};
