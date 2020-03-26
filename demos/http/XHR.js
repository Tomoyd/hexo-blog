function request(url,method,headers,data){
    let xhr=new XMLHttpRequest();
    xhr.open(method,url,true);
    xhr.timeout=3000
    xhr.responseType="text/json"
    xhr.setRequestHeader("Content-Type","text/json")
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4){
            console.log(xhr.status,xhr.statusText,xhr.responseText,xhr.response,xhr.responseXML)
            console.log(xhr.getResponseHeader("Content-type"));
        }
    }
    xhr.send(data)
    xhr.ontimeout=()=>{
        console.log()
    }
    xhr.onload=function () {

    }
    xhr.onerror=function (e) {
        console.log("onerror",e)
    }
}
request("http://localhost:3000","get","",null)
