console.log("hej")
let p_satser1  = document.querySelector("#sats1");

for(let i=0; i<10; i++){
    p_satser1.innerHTML +=`${i}`
}

let p_satser2 = document.querySelector("#sats2");

for(let j=10; j>0; j--){
    p_satser2.innerHTML +=`${j} `;
}

for(let i=0; i<10; i++){
    console.log(`${i}:I will not write all over the walls`);
}


let p_summa = document.querySelector("#summa");
let summa = 0;

for(let p=0; p<=10; p++){
    summa+=p
}
p_summa.innerHTML = `${summa}`
//p_summa.innerHTML += (`1+2+3....9+10: ${summa}`);

let elever= ["Kokochun", "Henrik", "Thomas", "Tatiana", "Zsofia", "David", "Sucha"];
let p_klass=document.querySelector(".arry");

p_klass.innerHTML="Klass IT 19A innehåller följande elever: <br/>"

console.log(elever.length);

for(let k=0;  k< elever.length; k++){
    p_klass.innerHTML += (`${k+1}, ${elever[k]} <br/>`)
}
