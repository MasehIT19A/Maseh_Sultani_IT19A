let jamna=document.querySelector(".jamna");
let udda=document.querySelector(".udda");
let lektioner=document.querySelector(".lektioner");

jamna.innerHTML = "Jämna tal från 0 till 100: ";
for(let i=1; i<=100; i++){
    if( i % 2==0){
    jamna.innerHTML += `${i},`;
    }
}
udda.innerHTML = "Udda tal från 0 till 100:"
for(let j=1; j<=100; j++){
    if(j % 2==1){
        udda.innerHTML += `${j},`
    }
}

const lek = [`Svenska`,`Engelska`,`Programmering`, `Matematik`, `Idrott`];

lektioner.innerHTML = ("Mina lektioner är: <br> ");

let index = 1;

for(name  of lek){
    lektioner.innerHTML += `${index} ${name} <br>`;
    index++;
}