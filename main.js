// 1. Boton que te diga con un alert si el usuario es mayor o menor de edad en un input
function edad(){

    let num = parseFloat(document.getElementById("edad").value)

    if (num < 18)
    alert("Usted es menor de edad")
    else
    alert("Usted es mayor de edad")

}

// 2. Realizar una calculadora sencilla (2 input y cuatro botones con - + / *)
function suma(){
    let num1 = parseFloat(document.getElementById("campo1").value)
    let num2 = parseFloat(document.getElementById("campo2").value)

    if (document.getElementById("+").value == "+")
    resultado.innerHTML = (eval(num1 + num2))

}

function resta(){
    let num1 = parseFloat(document.getElementById("campo1").value)
    let num2 = parseFloat(document.getElementById("campo2").value)

    if (document.getElementById("-").value == "-")
    resultado.innerHTML = (eval(num1 - num2))

}

function multiplicacion(){
    let num1 = parseFloat(document.getElementById("campo1").value)
    let num2 = parseFloat(document.getElementById("campo2").value)

    if (document.getElementById("*").value == "*")
    resultado.innerHTML = (eval(num1 * num2))

}

function division(){
    let num1 = parseFloat(document.getElementById("campo1").value)
    let num2 = parseFloat(document.getElementById("campo2").value)

    if (document.getElementById("/").value == "/")
    resultado.innerHTML = (eval(num1 / num2))

}
