var Ime = document.getElementById('input1');
var errorMessageIme = document.getElementById('error-message');
var Prezime=document.getElementById('input2');
var errorPrezimena=document.getElementById('errormessage');
Ime.addEventListener('input', function () {
  var regexIme = /^[A-Z][a-z]*$/;

  if (!regexIme.test(Ime.value) && Ime.value != "") {
      alert('Nevalidan unos imena, pocnite velikim slovom bez brojeva.');
      Ime.value="";
  } 
});

Prezime.addEventListener('input', function () {
    var regexPrezime = /^[A-Z][a-z]*$/;
    if(!regexPrezime.test(Prezime.value) && Prezime.value != ""){
        alert('Nevalidan unos prezimena, pocnite velikim slovom bez brojeva.');
        Prezime.value="";
    }
    
})


var Grad = document.getElementById('input5');
var errorMessageGrad = document.getElementById('error-messageGrad');
Grad.addEventListener('input', function () {
    var regexGrad = /^[A-Z][a-z]*$/;
    if(!regexGrad.test(Grad.value) && Grad.value != ""){
        alert('Nevalidan unos grada, pocnite velikim slovom bez brojeva.');
 Grad.value="";
    }
    
})
let nextButton = document.querySelector('.Sadrzaj');
nextButton.addEventListener('click',()=>{
    let cardNonLogged = localStorage.getItem("nonLogged");
    if(cardNonLogged === "true")
    {
        window.location.href = "/creditCard/creditCard.html";
        localStorage.removeItem("nonLogged");
    }
    else{
        window.location.href = "/Welcome/welcome.html";
        localStorage.removeItem("reservations");
        localStorage.removeItem("recieveLocation");
        localStorage.removeItem("recieveDate");
        localStorage.removeItem("recieveTime");
        localStorage.removeItem("returnDate");
        localStorage.removeItem("returnTime");
    }
    
})