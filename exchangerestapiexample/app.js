const amount=document.querySelector("#amount");
const firstSelect=document.querySelector("#firstCurrency");
const secondSelect=document.querySelector("#secondCurrency");
const currency=new Currency("USD","TRY");
const ui=new UI(firstSelect,secondSelect);

eventListeners();

function eventListeners(){
    amount.addEventListener("input",exchangeCurrency)
    firstSelect.onchange=function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.firstchange();
    };
    secondSelect.onchange=function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.secondchange();

    };
}

function exchangeCurrency(){
    currency.changeamount(amount.value);
    currency.exchange()
    .then(result=>ui.displayResult(result))
    .catch(err=>console.log(err)); 
}
