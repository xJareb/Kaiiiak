let buttonNextPage = document.querySelector('.btnNext');

buttonNextPage.addEventListener('click',()=>{

    let recieveLocation = document.querySelector('.comboboxLokacija').value;

    let recieveDate = document.querySelector('.inpDatumPreuzimanja').value;
    let recieveTime = document.querySelector('.inpVrijemePreuzimanja').value;

    let returnDate = document.querySelector('.inpDatumPovratka').value;
    let returnTime = document.querySelector('.inpVrijemePovratka').value;


        var inpDatumPreuzimanja = document.querySelector(".inpDatumPreuzimanja").value;
        var inpDatumPovratka = document.querySelector(".inpDatumPovratka").value;
        var inpVrijemePreuzimanja = document.querySelector(".inpVrijemePreuzimanja").value;
        var inpVrijemePovratka = document.querySelector(".inpVrijemePovratka").value;

        var datumPreuzimanja = new Date(inpDatumPreuzimanja);
        var datumPovratka = new Date(inpDatumPovratka);
    
        if (datumPovratka.getTime() < datumPreuzimanja.getTime()) {
            alert("Datum povratka ne može biti manji od datuma preuzimanja");
            return; // Indicates that the dates are not valid
        } 
    
        // If the control reaches here, the dates are valid

    
    
    localStorage.setItem('recieveLocation',recieveLocation);

    localStorage.setItem('recieveDate',recieveDate);
    localStorage.setItem('recieveTime',recieveTime);

    localStorage.setItem('returnDate',returnDate);
    localStorage.setItem('returnTime',returnTime);


    window.location.href = '/CarMenu/carMenu.html';
});
let firstLogged = localStorage.getItem("logged");
let loginButton = document.querySelector('.btnLogin');
loginButton.addEventListener('click',()=>{
    
    if(firstLogged !== null)
    {
    if(firstLogged === "true")
    {
        window.location.href = "/Welcome/welcome.html";
    }
    else{
        window.location.href = "/Login/login.html";
    }
    }
    else{
    window.location.href = "/Login/login.html";
    }

})
let buttonRegister = document.querySelector('.btnRegister');
buttonRegister.addEventListener('click',()=>{
   if(firstLogged !== null)
   {
   if(firstLogged === "true")
   {
       window.location.href = "/Welcome/welcome.html";
   }
   else{
       window.location.href = "/Register/register.html";
   }
   }
   else{
   window.location.href = "/Register/register.html";
   }
})