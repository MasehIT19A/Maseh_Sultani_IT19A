let textArea=document.querySelector("#textArea")
let contwordBtn=document.querySelector("#contwordBtn")
let p_displayWord = document.querySelector("#displayWords")

contwordBtn.addEventListener("click", contWords)

function contWords(){
    console.log("kör  funktionen contWords")
    let text = textArea.value
    let words=text.split(" ")
    console.log(words.length)
    p_displayWord.innerHTML = words.length

}