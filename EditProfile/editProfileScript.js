let editPersonalData = document.querySelector('.personal-data');
editPersonalData.addEventListener('click',()=>{
    let allInputs = document.querySelectorAll('.control-data input');
    allInputs.forEach(element => {
        element.disabled = false;
    });
    let buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = `<button class="discardChanges">Odustani</button><button>Sacuvaj</button>`;

    /*let discardChanges = document.querySelector('.discardChanges');
    discardChanges.addEventListener('click',()=>{
        editPersonalData.removeEventListener('click');
    })*/
})