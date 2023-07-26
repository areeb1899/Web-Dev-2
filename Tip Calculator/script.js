const calculate = () => {
    //bill amount input 
    let billAmount = document.getElementById('bill_amount').value;

    //tip percentage input taken
    let tipPercentage = document.getElementById('percentage').value;

    //calculating tip amount
    let tipCalculate = billAmount * (tipPercentage / 100)


    //totaling the bill after the tip amount
    let total = Number(billAmount) + tipCalculate;

    //displaying the total tip amount 
    document.getElementById('tip_amount').value = tipCalculate.toFixed(2);

    //finally the rounded off total bill concludes 
    document.getElementById('total_bill').value = Math.round(total);

}

//reset button to clear all inputs
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let clearInput = document.getElementsByTagName("input");
    for (var i = 0; i < clearInput.length; i++)
        clearInput[i].value = '';

})

