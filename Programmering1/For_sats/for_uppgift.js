let jämna=document.querySelector(".jämna");
let udda=document.querySelector(".udda");
let lektioner=document.querySelector(".lektioner");


for(let i=1; i<=100; i++){
    if(i/2==0){
        jämna.innerHTML += (`${i}`);
    }
}
   