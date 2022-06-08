const billInput = document.querySelector('#bill-input');
const peopleInput = document.querySelector('#number-of-people');
const customTipInput = document.querySelector('#custom-tip');
const tipBtns = document.querySelectorAll('.tip-btn')
const tipAmount = document.querySelector('#tip-amount')
const totalAmount = document.querySelector('#total-amount')
const resetBtn = document.querySelector('.reset-btn')

let typedInput = [billInput,peopleInput,customTipInput];

let bill = 0;
let numberOfPeople = 0;
let tip = 0;

typedInput.forEach(input=>{
    input.addEventListener('keyup', ()=>{
        if (input.id==='bill-input') bill = input.value;
        if (input.id==='number-of-people') numberOfPeople = input.value;
        if (input.id==='custom-tip') tip = input.value;
        showOutput();
    })
})

tipBtns.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        tip = btn.value;
        showOutput();
    })
})

resetBtn.addEventListener('click',()=>{
    billInput.value = '';
    customTipInput.value = '';
    peopleInput.value = '';
    tipAmount.textContent = '0.00';
    totalAmount.textContent = '0.00';
    bill = 0;
    tip = 0;
    numberOfPeople = 0;
})

function perPersonBill(bill,people,tip){
    perPersonTotal = bill/people + bill/people * tip / 100;
    return perPersonTotal;
}

function tipCalculator(bill,people,tip){
    perPersonTotal = bill/people + bill/people * tip / 100;
    tip = perPersonTotal - bill/people;
    return tip;
}


function showOutput(){
    let perPersonAmount = perPersonBill(bill,numberOfPeople,tip)
        if (bill && tip && numberOfPeople) totalAmount.textContent = `${perPersonAmount}`
        let perPersonTip = tipCalculator(bill,numberOfPeople,tip);
        if(bill && tip && numberOfPeople) tipAmount.textContent = `${perPersonTip}`;
}