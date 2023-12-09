function textStyle(element) {
    element.style.fontSize = '1.5em';
    element.style.textAlign = 'center';
    element.style.marginTop = '10px';
    element.style.marginBottom = '10px';
}

window.addEventListener('load',()=>{

    let carTitle = localStorage.getItem('carTitle');

    let recieveDate = localStorage.getItem('recieveDate');
    let recieveTime = localStorage.getItem('recieveTime');
    
    let returnDate = localStorage.getItem('returnDate');
    let returnTime = localStorage.getItem('returnTime');

    let orderTitle = document.querySelector('.order-content .title');
    orderTitle.innerText = carTitle;

    let recievePeriod = document.querySelectorAll('.order-data p');
    recievePeriod[0].innerText = recievePeriod[0].innerText + ' ' + recieveDate + ' ' + recieveTime;
    recievePeriod[1].innerText = recievePeriod[1].innerText + ' ' + returnDate + ' ' + returnTime;


    textStyle(orderTitle);
    
})

let counterCorrectInputs = 0;

let payButton = document.querySelector('.payment-announcement button');
payButton.addEventListener('click',()=>{
    let inputs = document.querySelectorAll('.creditCard-data input');
    inputs.forEach(element => {

        let inputsName = element.getAttribute('name');
        let inputValue = element.value;
        let numberRegex = /[0-9]/;
        let letterRegex = /[a-zA-Z]/;

       switch (inputsName) {
        case "name":
            let splitValue = inputValue.split(' ');
            if(splitValue.length === 2){
                let stringSplitValue = JSON.stringify(splitValue);
                if(stringSplitValue.match(numberRegex)){
                    alert('Vase ime sadrzi brojeve, provjerite Vas unos');
                }
                counterCorrectInputs++;
            }
            else{
                alert('Ime je obavezno, molimo Vas provjerite Vas unos');
            }
            break;
        case "creditCard":
            if(inputValue.length === 16){
                if(inputValue.match(letterRegex)){
                    alert('Vas broj kreditne kartice sadrzi slovo, provjerite Vas unos');
                }
                counterCorrectInputs++;
            }
            else{
                alert('Broj kreditne kartice je obavezan, molimo Vas provjerite unos')
            }
            break;
        case "endTime":
                if(inputValue !== ""){
                    counterCorrectInputs++;
                }
                else{
                    alert('Datum isteka vase kreditne kartice je obavezan, molimo Vas provjerite unos');
                }
                console.log(inputValue);
                console.log(typeof(inputValue));
            break;
        case "cvc":
            if(inputValue.length === 3){
                if(inputValue.match(letterRegex)){
                    alert('Vas CVC sadrzi slovo, molimo Vas provjerite unos')
                }
                counterCorrectInputs++;
            }
            else{
                alert('CVC je obavezan, molimo Vas provjerite unos');
            }
            break;
        default:
            break;
       }
    });
    if(counterCorrectInputs === 4){
        window.location.href = '/Welcome/welcome.html';
    }

})