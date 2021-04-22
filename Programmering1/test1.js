let F=0
let R=0
let P = [8,9,2,5,15]
let N = [3,4,7,6,11]
let s=1

for (let i=0; i<=p.length; i++){
    F= prompt(`${p[i]} * ${N[i]}`)
    R= P[i] * N[i]
    if(F==R){
        s+= i
    }
    let v = prompt("om du vill sluta trycka 1 annars 2 ")
    if(V==1){
        console.log(`Du får ${s} pöng`)
        break;
    }
    console.log(`Du får ${s} pöng`)
}