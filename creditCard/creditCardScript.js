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
                    alert('Sadrzi broj');
                }
            }
            else{
                alert('Greska ime');
            }
            break;
        case "creditCard":
            if(inputValue.length === 16){
                if(inputValue.match(letterRegex)){
                    alert('sadrzi slovo');
                }
            }
            else{
                alert('Greska kartica')
            }
            break;
        case "endTime":
                if(!inputValue === ''){

                }
                else{
                    alert('Greska datum kartica');
                }
            break;
        case "cvc":
            if(inputValue.length === 3){
                if(inputValue.match(letterRegex)){
                    alert('sadrzi slovo')
                }
            }
            else{
                alert('Greska CVC');
            }
            break;
        default:
            break;
       }
    });
    //later
})