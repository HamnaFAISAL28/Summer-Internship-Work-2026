 let p1=new Promise((resolve,reject)=>{

setTimeout(()=> {

    console.log("Resolved after 2 secs")
    resolve(56)

}, 2000)



p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
        resolve("Promise2")
    })
    return p2

}).then((value)=>{
    console.log("We are done")
    console.log(value)
})         



p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
       setTimeout(()=> {
           resolve("Promise2")
       }, 2000)
    })
    return p2
    
}).then((value)=>{
    console.log("We are done")
    console.log(value)
})         



p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
       setTimeout(()=> {
           resolve("Promise2")
       }, 2000)
    })
    return p2
    
}).then((value)=>{
    console.log("We are done")
    return 2

}) .then((value)=>{
    console.log("We are done")
    console.log(value)
}
 

const loadScrpt=(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script")
        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(1)
        }

        script.onerror=()=>{reject(0)}
    })
}       

let p1=loadScrpt("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)  
}).catch((error)=>{
    console.log("Error")
})




 
