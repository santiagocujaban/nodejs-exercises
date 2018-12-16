const Math = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if(x2 == 0) {
        console.log("No puedes dividir entre cero!");
    }
    else {
        return x1 / x2;
    }
}

Math.suma = add;
Math.resta = substract;
Math.multiplicacion = multiply;
Math.division = divide;

module.exports = Math;