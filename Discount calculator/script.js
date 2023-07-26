const calculate = () => {
    //bill amount input 
    let billAmount = document.getElementById('bill_amount').value;

    //discount percentage input taken
    let discountPercentage = document.getElementById('percentage').value;

    //calculating discount amount
    let discountCalculate = billAmount * (discountPercentage / 100)


    //totaling the bill after the discounted amount
    let total = Number(billAmount) - discountCalculate;

    //displaying the total discounted amount 
    document.getElementById('discount_amount').value = discountCalculate.toFixed(2);

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

