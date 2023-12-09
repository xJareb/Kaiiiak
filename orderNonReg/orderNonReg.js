var Ime = document.getElementById('input1');
var errorMessageIme = document.getElementById('error-message');
var Prezime=document.getElementById('input2');
var errorPrezimena=document.getElementById('errormessage');
Ime.addEventListener('input', function () {
  var regexIme = /^[A-Z][a-z]*$/;

  if (regexIme.test(Ime.value)) {
    errorMessageIme.textContent = '';
  } else {
    errorMessageIme.textContent = 'Nevalidan unos imena, pocnite velikim slovom bez brojeva.';
  }
});

Prezime.addEventListener('input', function () {
    var regexPrezime = /^[A-Z][a-z]*$/;
    if(regexPrezime.test(Prezime.value)){
        errorPrezimena.textContent = '';
    }
    else{
        errorPrezimena.textContent = 'Nevalidan unos prezimena, pocnite velikim slovom bez brojeva.';
    }
})
var BrojTelefona = document.getElementById('input3');
var errorMessageBroj = document.getElementById('error-messageBroj');
BrojTelefona.addEventListener('input', function () {
    var regexBroj = /^(\+\d{1,4}\s*)?\d{9,13}$/;
        if(regexBroj.test(BrojTelefona.value)){
        errorMessageBroj.textContent = '';
    }
    else{
        errorMessageBroj.textContent = 'Nevalidan unos broja telefona, molimo bez razmaka i samo brojevi.';
    }
})
var Grad = document.getElementById('input5');
var errorMessageGrad = document.getElementById('error-messageGrad');
Grad.addEventListener('input', function () {
    var regexGrad = /^[A-Z][a-z]*$/;
    if(regexGrad.test(Grad.value)){
        errorMessageGrad.textContent = '';
    }
    else{
        errorMessageGrad.textContent = 'Nevalidan unos grada, pocnite velikim slovom bez brojeva.';
    }
})