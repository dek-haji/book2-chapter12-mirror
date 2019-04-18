console.log("working")
let userInput =document.querySelector("#message")
let userOutput1 = document.querySelector("#art1")
let userOutput2 = document.querySelector("#art2");

userInput.addEventListener("keyup",function(event){
    userOutput1.innerHTML = event.target.value,
    userOutput2.innerHTML = event.target.value
})