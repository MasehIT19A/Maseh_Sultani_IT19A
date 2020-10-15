let colorpicker = document.querySelector("#colorPicker")
let rektangel = document.querySelector("#rektangel")

rektangel.style.backgroundColor = "green"

colorpicker.addEventListener("change", colorChanger)


function colorChanger(n){
    
    console.log(n)
    rektangel.style.backgroundColor = n
}

/*(kokchun style) let color = n.target.value;
    console.log(color)
    rektangel.style.backgroundColor = color */