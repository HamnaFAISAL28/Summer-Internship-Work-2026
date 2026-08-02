console.log("hello world");
var a= 7;
console.log(a);

a="hamna";
console.log(a);
 let b="Hamna";
 {
    let b='this';
    console.log(b);
 }
console.log(b);

const author="Hamna";

var a=undefined;
// number,boolean,BigInt,string,symbol,null,undefined

let a1=5;
let b1=false;
let c=BigInt("567")+ BigInt("3");
let d= null;
let e=undefined;
let f=Symbol("I am a nice symbol");
let h="hamna";

console.log(a,b,c,d,e,f,h);
console.log(typeof d);

const item={
    "Hamna": true,
    "Zoha":false
}

console.log(item["Hamna"]);

//concatenation
let a2="Hamna";
let b2=5;
console.log(a2+b2);

//datatype
console.log(typeof (a2+b2));

//change const value
const a3={
    name:"Hamna",
    section:1
}
a3['name']="Haya";
console.log(a3);
a3['year']=2024;
console.log(a3);

//conditional statements 
//prompt asks, alert tells
// typecasting: Datatype.parseInt()


let ab= prompt("Enter your age")
console.log(typeof ab);

ab=Number.parseInt(a)
if(ab>0)
{
    alert("Valid Age");
}
else if(ab>10&&ab<15)
{
    alert("OK");
}
else{
    alert("Try Again");
}

console.log("You can",(a<18?"NOT DRIVE":"DRIVE"));

// guess the number
let b=Math.random()*100;
let a=Number.parseInt(b);
let input;
let score=100;
let guesses=0;

while(input!=a)
{
input=prompt("Enter any Number to check your guess! : ")
input=Number.parseInt(input);
guesses=guesses+1;

if(input>a&&input<=100&&input>=1)
{
    console.log("Your guess is greater than original Number")
}
else if(input<a&&input<=100&&input>=1)
{
  console.log("Your answer is less than original Number")  
}
else
{
    console.log("Your answer is correct")
    console.log("The Guess is ", a)
}

}
score=score-guesses
console.log("You score is: ",score)

// arr1 add a number
let arr=[5,6,7,8,9]
let a=prompt("Enter any number to add to the array: ")
a=Number.parseInt(a)
arr.push(a)
console.log(arr)

//arr2 add numbers until 0
let arr=[5,6,7,8,9]
let a;
do{
a=prompt("Enter any number to add to the array: ")
a=Number.parseInt(a)
arr.push(a)
} while(a!=0);

console.log(arr)

//arr3 filter for numbers div by 10
let arr=[60,7,80,9]
let n=arr.filter((x)=>{
    return x%10==0
})

console.log(n);

//arr4 square of numbers array
let arr=[2,3,4,5]
let n=arr.map((x)=>{
    return x*x
})

console.log(n)

//arr5 reduce to find factorial
let arr=[1,2,3,4,5]
let n=arr.reduce((x,y)=>{
    return x*y
})

console.log(n)


//11 july
console.log(window)
console.log(document)
console.log(document.body)
document.body.style.background="yellow"
document.body.style.background="white"
alert("Hamna")
location.href="www.google.com"
document.getElementsByClassName("zp-open-popup-button")
document.getElementsByClassName("zp-open-popup-button")[1]




