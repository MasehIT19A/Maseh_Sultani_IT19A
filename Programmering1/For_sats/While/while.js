console.log("hej maseh");
let h1_titel = document.querySelector(".titel")
h1_titel.innerHTML = "While satser"

let p_talserie1 = document.querySelector(".talserie1")
let p_talserie2 = document.querySelector("talserie2")


let n = 10
while(n>=-10){
    p_talserie1.innerHTML += `${n}, `
    n--
}