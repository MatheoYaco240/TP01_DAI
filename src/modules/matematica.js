const π = 3.14
console.log(π)

function suma(num1, num2){
    return num1 + num2
}

function resta(num1, num2){
    return num1 - num2
}

const multiplicacion = (num1, num2) => num1*num2

const division = (num1, num2) => num1/num2

module.exports = {
    suma, resta, multiplicacion, division
}

