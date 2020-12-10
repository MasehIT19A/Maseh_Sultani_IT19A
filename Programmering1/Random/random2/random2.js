/* Player 1: roll a dice */
/* Player 2: rolls a dice */
/* One with highest number wins */

let diceNumber1 = 0
let diceNumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice2_btn = document.querySelector("#dice_p2")
let p1_result = document.querySelector("#p1_result")
let p2_result = document.querySelector("#p2_result")
let result = document.querySelector("#result")
let button = document.querySelector("#buttonCheck")



dice1_btn.addEventListener("click", diceRoll1)
dice2_btn.addEventListener("click", diceRoll2)
button.addEventListener("click", checkwin)

function diceRoll1(){
    diceNumber1 = 1+Math.floor(Math.random()*6)
    p1_result.innerHTML = diceNumber1
    console.log(diceNumber1)
}

function diceRoll2(){
    diceNumber2 = Math.floor(Math.random()*6)+1
    p2_result.innerHTML = diceNumber2
}

function checkwin(){
    if(diceNumber1 > diceNumber2){
        console.log ("p1 win")
    result.innerHTML = ("Player1 is Winar")
    }else if(diceNumber2 > diceNumber1){
        console.log ("p2 win")
        result.innerHTML = ("Player2 is Winar")
    }else{
        result.innerHTML = ("They are same point")
        console.log ("Draw")
    }
}