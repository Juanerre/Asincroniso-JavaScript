// clase 1 estructura callback
function sum(num1, num2){
    return num1 + num2;
}

// funcion superior que recibe como parametro a sum
function calc(num1, num2, callback) {
    return callback(num1, num2);
}
// creamos el llamado para verlo en consola

console.log(calc(2,2, sum));

// otro ejemplo con tiempos

// preimer funcion o funcion superior que rcibira una funcion como parametro
function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 3000)
}
// creo la funcion que imprime los valores

function printDate(dateNow) {
    console.log(dateNow);
}
date(printDate);