function promiseAll(promises) {
    return new Promise((resolve,reject)=>{
        let values=[]
        promises.forEach(promise=>{
            promise=Promise.resolve(promise)
            promise.then(value=>{values.push(value)})
            promise.catch(err=>{
                reject(err)
            })
        })
        resolve(values)
    })

}
// Promise.all(Promise.reject(11))
promiseAll([Promise.resolve(1),123,4,new Promise((resolve,reject)=>{reject(0)})]).then(value=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
});
process.on("unhandledRejection",(err)=>{
    console.log(err)
})
// 那个先到来就执行他的结果
function promiseRace(promises) {
    return new Promise((resolve,reject)=>{
        promises.forEach(promise=>{
            promise=Promise.resolve(promise)
            promise.then(value=>{resolve(values)})
            promise.catch(err=>{
                reject(err)
            })
        })
    })
}
