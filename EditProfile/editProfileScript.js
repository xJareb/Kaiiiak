let editButton = document.querySelector('.button-container button');
let dataInputs = document.querySelectorAll('.control-data input');
let controlButtons = document.querySelectorAll('.button-container-controll button');
let controlDiv = document.querySelector('.button-container-controll');

editButton.addEventListener('click',()=>{
    dataInputs.forEach(element => {
        element.disabled = false;
    });
    editButton.style.display = 'none';
    controlDiv.style.display = 'block';

    controlButtons[0].addEventListener('click',()=>{
        controlDiv.style.display = 'none';
        editButton.style.display = 'block';
        dataInputs.forEach(element => {
            element.disabled = true;
        });
    })
})

let faqButton = document.getElementById('FAQ');
faqButton.addEventListener('click',()=>{
    window.location.href = "/Faq/faq.html";
})

let changePasswordButton = document.getElementById('changePassword');
let personalButtonsDiv = document.querySelector('.control-buttons');
let changePasswordDiv = document.querySelector('.passwordC');
let discardChangesButton = document.querySelectorAll('.passwordButton button');

changePasswordButton.addEventListener('click',()=>{
    personalButtonsDiv.style.display = 'none';
    changePasswordDiv.style.display = 'block';

    discardChangesButton[0].addEventListener('click',()=>{
        changePasswordDiv.style.display = 'none';
        personalButtonsDiv.style.display = 'block';
    })

})