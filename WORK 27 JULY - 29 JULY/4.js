let promise=new Promise((resolve,reject)=>{

console.log("promise pending")

setTimeout(()=> {

    console.log("promise fulfilled")
    resolve(true)


}, 5000)
 

})


let promise=new Promise((resolve,reject)=>{

console.log("promise pending")

setTimeout(()=> {

    console.log("promise resolved")
    resolve(true)
    

}, 5000)
 

})
 
console.log(p)







let promise=new Promise((resolve,reject)=>{

console.log("promise pending")

setTimeout(()=> {

    console.log("promise rejected")
    //resolve(true)
    reject(new Error("Error"))
    

}, 5000)
 

})
 
console.log(p)


let promise=new Promise((resolve,reject)=>{

console.log("promise pending")

setTimeout(()=> {

    console.log("promise rejected")
    //resolve(true)
    reject(new Error("Error"))
    

}, 5000)
 

})
 

let p2=new Promise((resolve,reject)=>{

console.log("promise pending")

setTimeout(()=> {

    console.log("promise rejected")
    //resolve(true)
    reject(new Error("Error"))
    

}, 5000)
 

})


let p1=new Promise((resolve,reject)=>{

console.log("promise pending")

setTimeout(()=> {

    console.log("promise rejected")
    //resolve(true)
    reject(new Error("Error"))
    

}, 5000)
 

})
 


p1.then((value)=>{
    console.log(value)
})



p2.then((value)=>{
    console.log(value)
})


p2.catch((error)=>
{
    console.log("Error")
})
 





