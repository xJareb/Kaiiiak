function textStyle(element) {
    element.style.fontSize = '1.5em';
    element.style.textAlign = 'center';
    element.style.marginTop = '10px';
    element.style.marginBottom = '10px';
}

let reservationData = localStorage.getItem("reservations");
let reservationDataTemp = JSON.parse(reservationData);
let locationR = localStorage.getItem("recieveLocation");
let recieveDate = localStorage.getItem('recieveDate');
let recieveTime = localStorage.getItem('recieveTime');
let returnDate = localStorage.getItem('returnDate');
let returnTime = localStorage.getItem('returnTime');
let user = localStorage.getItem("loginUsername");

window.addEventListener('load',()=>{

    let image = document.querySelector('.images img');
    image.src = reservationDataTemp.image;

    let orderTitle = document.querySelector('.order-content .title');
    orderTitle.innerText = reservationDataTemp.title;

    let orderPrice = document.querySelector('.price p');
    orderPrice.innerText = reservationDataTemp.info;

    let recievePeriod = document.querySelectorAll('.order-data p');
    recievePeriod[0].innerText = recievePeriod[0].innerText + ' ' + recieveDate + ' ' + recieveTime;
    recievePeriod[1].innerText = recievePeriod[1].innerText + ' ' + returnDate + ' ' + returnTime;
    textStyle(orderTitle);

    let price = reservationDataTemp.info.substring(0,reservationDataTemp.info.indexOf('/'));
    let numberPrice = parseInt(price.substring(0,price.indexOf('K')));

    let total = document.querySelector('.order-total p');
    total.innerText +=' ' + numberPrice.toString() + 'KM';
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

        postMethod();
    }

})
let postMethod = () => {


    let newObj = {
        foto: reservationDataTemp.image,
        car: reservationDataTemp.title,
        locationr: locationR,
        dater: recieveDate,
        timer: recieveTime,
        dateb: returnDate,
        timeb: returnTime,
        byuser: user
    };

    fetch('https://65665f6864fcff8d730ebcb1.mockapi.io/Reservations', {
        method: "POST",
        body: JSON.stringify(newObj),
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(r => {

            r.json().then(t => {
                window.location.href = '/Welcome/welcome.html';
                localStorage.removeItem("reservations");
                localStorage.removeItem("recieveLocation");
                localStorage.removeItem("recieveDate");
                localStorage.removeItem("recieveTime");
                localStorage.removeItem("returnDate");
                localStorage.removeItem("returnTime");
            })

        })
}