
let Ebiljett = 30;
let Mbiljett = 775;
let åke = prompt("Hur många gånger åker du?");
let kostnad = Ebiljett*åke;
if(kostnad<Mbiljett){
    console.log(`Du behöver enkel biljet för att du åker sällan och det kostar ${kostnad}kr`);
}else{
    console.log(`Du ska ha Månadskort för att du åker ofta och det kostant är ${kostnad}kr`);
}