alert("hello")

setTimeout(function() {
   alert("I am inside of setTimeout function")
}, 3000 )


document.write("hello world")


let a = setTimeout(function() {
    alert("I am inside of setTimeout function")
}, 2000 )

console.log(a)


document.write("hello world")


let a = setTimeout(function() {
    alert("I am inside of setTimeout function")
}, 5000 )


clearTimeout(a)

console.log(a)



document.write("hello world")

let a = setTimeout(function() {
    alert("I am inside of setTimeout function")
}, 5000 )


let b=prompt("enter your name")
if("name"==b){
    clearTimeout(a)
    
}
console.log(a) 


document.write("hello world")

const sum = (a,b,c) => {
    console.log("Yes I am running "+(a+b+c))
    a+b+c
}

setTimeout(sum, 3000, 1,2,3) 

// gave output after exactly 3 seconds: Yes I am running 6


 setInterval(function(){
alert("setInterval")
},3000) 










