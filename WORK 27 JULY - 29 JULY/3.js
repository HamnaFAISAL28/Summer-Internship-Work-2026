let promise=new Promise(function(resolve,reject){

    alert("Promise is pending");

resolve(56)
})



conosle.log("Hello one")

setTimeout(function() {

    console.log("This message is displayed after 2 seconds");
}, 2000);


console.log("Hello")


console.log(promise)