let vikt = prompt("Hur mycket är vikten?");
let längd = prompt("Hur mycket är längden?");
let bredd = prompt("Hur mycket är breddet?");
let höjd = prompt("Hur mycket är höjden?");

if(vikt<=8 & längd<=55 & bredd<=40 & höjd<=23){
    console.log(`godkänd och din bagadge vikt var ${vikt} och din bagadge längd var ${längd} 
    och din bagadge bredd var ${bredd} och din bagadge höjd var ${höjd}`)
}else{
    console.log(` inte godkänd och din bagadge vikt var ${vikt} och din bagadge längd var ${längd} och din bagadge bredd var ${bredd} och din bagadge höjd var ${höjd}`);
}
