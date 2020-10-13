let name = "Maseh";


function sayhello(){
    let alder = 20;
    console.log(`Hej ${name} du är ${alder} år gammal`)
}

sayhello(); 

function additione(tal1, tal2){
    let summa= tal1+tal2;
    return summa;
}
console.log (`Additione av 2+5=${additione(2,5)}`);

function subtraktion(tal1, tal2){
    let summa = tal1 - tal2;
    return summa;
}
console.log (`Subtraktion av 2+5=${subtraktion(6,2)}`);

function divition(tal1, tal2){
    
    let summa = tal1 /  tal2;
    if( tal2==0){
        return " du får inte dela tal på null !!"
    }
}
console.log (`Divition av två tal är =${divition(10,0)}`);

function multiplikation (tal1, tal2){
    let summa = tal1 * tal2;
    return summa;
}
console.log (`Multiplikation av två tal är =${multiplikation(3,9)}`);

