let p1=new Promise((resolve,reject)=>{

setTimeout(()=> {
  alert("Resolved after 2 secs")
    resolve(1)
}, 2000)



p1.then((value)=>{
    console.log("Resolved after 2 secs")


})


p1.then((value)=>{   
   alert("Resolved after 2 secs") 

    
})

p1.then(()=>{
    console.log("Congrats")

      return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve(4)
        }, 2000)

}).then((value)=>{

    console.log(value)
})
