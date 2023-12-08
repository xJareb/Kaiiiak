let buttonNextPage = document.querySelector('.btnNext');
buttonNextPage.addEventListener('click',()=>{

    //let recieveLocation = document.querySelector('.comboboxLokacija').value;

    let recieveDate = document.querySelector('.inpDatumPreuzimanja').value;
    let recieveTime = document.querySelector('.inpVrijemePreuzimanja').value;

    let returnDate = document.querySelector('.inpDatumPovratka').value;
    let returnTime = document.querySelector('.inpVrijemePovratka').value;
    
    //localStorage.setItem('recieveLocation',recieveLocation);

    localStorage.setItem('recieveDate',recieveDate);
    localStorage.setItem('recieveTime',recieveTime);

    localStorage.setItem('returnDate',returnDate);
    localStorage.setItem('returnTime',returnTime);


    window.location.href = '/CarMenu/carMenu.html';
});

