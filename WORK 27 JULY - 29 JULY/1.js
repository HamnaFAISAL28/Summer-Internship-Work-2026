let a=prompt("Enter a number:");
let b=prompt("Enter another number:");
let sum = Number(a) + Number(b);
console.log("The sum of " + a + " and " + b + " is: " + sum);


console.log("Start")
setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);
conosle.log("End")



function loadScript(src,callback) {
  let script = document.createElement('script');
  script.src = src;
    script.onload = () => callback(script) 
    document.head.appendChild(script)
} 



function loadScript(src,callback) {
  let script = document.createElement('script');
  script.src = src;
    script.onload = function() {
        console.log("Script loaded successfully with SRC: " + src);
        callback();
    }
    document.head.appendChild(script)
} 



function hello()
{
 alert("Hello World");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",hello)