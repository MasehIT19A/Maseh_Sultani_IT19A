let text =document.querySelector("#input")
let button=document.querySelector("#button")
let right=document.querySelector("#right")
let left= document.querySelector("#left")
let result=document.querySelector("#palind")


button.addEventListener("click", palindrom)

function palindrom(){
    let textarea=text.value
    let word=textarea.split("")
    let r=word.reverse()
    let jo= r.join("")
    if(textarea==jo){
        result.innerHTML="PALINDROM"
    }else{
        result.innerHTML="INTE PALINDROM"
    }
    right.innerHTML=`Du har angivit texten: ${textarea}`
    left.innerHTML = `Din text bakläges är: ${jo}`
}











