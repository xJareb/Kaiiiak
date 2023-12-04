window.addEventListener('load',()=>{

    let carTitle = localStorage.getItem('carTitle');

    let orderTitle = document.querySelector('.order-content .title');
    orderTitle.innerText = carTitle;

    orderTitle.style.fontSize = '1.5em';
    orderTitle.style.textAlign = 'center';
    orderTitle.style.marginTop = '10px';
    orderTitle.style.marginBottom = '10px';
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