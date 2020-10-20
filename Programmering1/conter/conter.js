let p_siffra = document.querySelector("#siffra");
let upp = document.querySelector("#uppknapp");
let ned = document.querySelector("#nedknapp");
let reset = document.querySelector("#reset");
let p_tecken = document.querySelector("#tecken");

let siffra = 0;

p_siffra.innerHTML = siffra;
p_tecken.innerHTML = "NOll"

upp.addEventListener("click", raknaUpp)
upp.addEventListener("click", raknaned)
upp.addEventListener("click", resetnummer)

function raknaUpp(){
    siffra = siffra +1;
    console.log(siffra);
    p_siffra.innerHTML = siffra;
}

function raknaned(){
    siffra= siffra -1;
    p_siffra.innerHTML = siffra
    chick()
}

function resetnummer(){
    siffra = 0;
    p_siffra.innerHTML = siffra;
    chick()
}


function chick(){
    if(siffra < 0){
        p_tecken.innerHTML = "Negativ"
        p_siffra.style.color="darkred";
    }else if (siffra < 0){
        p_tecken.innerHTML = "Positive"
        p_siffra.style.color = "green;"
    }else {
        p_tecken.innerHTML = "NOll"
        p_siffra.style.color = "blue";
    }
}