let slumptal=Math.random()

console.log(slumptal)

let coinflip = Math.round(slumptal)

if(coinflip==0){
    console.log(`coin flip är 0: ${coinflip}`)
}else{
    console.log(`coin flip är 1: ${coinflip}`)
}


let count=1
let sex=0
let sannolikhet=0

while(count<=100){
    let tärning=Math.floor(Math.random() * 7)
    console.log(tärning)
    if(tärning==6){
        sex++
    }
    count++
}
sannolikhet=6/count
console.log(`antalet sexor: ${sex}`)
console.log(`sannolikheten 6 är : ${sannolikhet}`)