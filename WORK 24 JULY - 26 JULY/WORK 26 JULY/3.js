 btn.addEventListener('click', function(e) {

    alert("Hello World")

})

btn.addEventListener('click', function(e) {

    alert("Hello World 2")

}) 




    btn.addEventListener('click', function(e) {

    alert("Hello World")

})

btn.addEventListener('click', function(e) {

    alert("Hello World 2")

})




let a=prompt("What is your favorite Number? ")
if(a==2)
{
    btn.removeEventListener('click', function(e) {
        alert("Hello World1")
    })
}
 


let x = function(e) {

    alert("Hello World")

}

let y = function(e) {

    alert("Hello World2")

}


btn.addEventListener('click', x)


btn.addEventListener('click', y)


let a=prompt("What is your favorite Number? ")
if(a=="2")
{
    btn.removeEventListener('click', x)
    alert("Hello World2")
}




let x= fuction(event)( {
    console.log(event.target)
    console.log(event.type,event.ClientX,event.ClientY)
})