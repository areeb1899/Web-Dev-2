

function add() {
    const input1=document.getElementById('input1').value;
    const input2=document.getElementById('input2').value;
    let result = Number(input1) + Number(input2);
    document.getElementById('showResult').textContent="Result: " + result;;


}

function substract() {
    const input1=document.getElementById('input1').value;
    const input2=document.getElementById('input2').value;
    let result = Number(input1) - Number(input2);
    document.getElementById('showResult').textContent="Result: " + result;;
}

function multiply() {
    const input1=document.getElementById('input1').value;
    const input2=document.getElementById('input2').value;
    let result = Number(input1) * Number(input2);
    document.getElementById('showResult').textContent="Result: " + result;;
}

function divide() {
    const input1=document.getElementById('input1').value;
    const input2=document.getElementById('input2').value;
    let result = Number((input1) / (input2)).toFixed(2);
    document.getElementById('showResult').textContent="Result: " + result;;
}

function mod(){
    const input1=document.getElementById('input1').value;
    const input2=document.getElementById('input2').value;
    let result = Number(input1) % Number(input2);
    document.getElementById('showResult').textContent="Result: " + result;;

}
function reset() {
    window.location.reload();
}
