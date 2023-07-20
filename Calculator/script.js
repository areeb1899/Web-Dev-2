let num1 = prompt('Enter the first number');
num1 = Number.parseInt(num1);
let num2 = prompt('Enter the second number');
num2 = Number.parseInt(num2);
document.getElementById("number1").textContent ="First Number: " +num1;
document.getElementById("number2").textContent ="Second Number: "+ num2;



let resultCalc = document.getElementById("result");

function add() {
    let result = num1 + num2
    resultCalc.textContent = "Result: " + result;



}

function substract() {
    let result = num1 - num2
    resultCalc.textContent = "Result: " + result;
}

function multiply() {
    let result = num1 * num2
    resultCalc.textContent = "Result: " + result;
}

function divide() {
    let result = (Math.round(num1) /(num2)).toFixed(2)
    resultCalc.textContent = "Result: " + result;
}

function mod(){
   let result= num1%num2;
   resultCalc.textContent = "Result: " + result;
// console.log(result);

}
function reset() {
    window.location.reload();
}