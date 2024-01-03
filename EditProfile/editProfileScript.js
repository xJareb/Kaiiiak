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
let loggedUser=localStorage.getItem("loginUsername");
let username = document.querySelector('.control-image p');
username.innerText = loggedUser;

let loadHistoryBody = document.querySelector('.table-reservation');
let autoNumber = 1;
let isLogged = localStorage.getItem("logged");
let loadHistoryReservations = () =>{
    if(isLogged === "true")
    {
    fetch(`https://65665f6864fcff8d730ebcb1.mockapi.io/Reservations`)
            .then(
                r => {
                    if (r.status !== 200) {
                        alert("Server javlja grešku: " + r.status);
                        return;
                    }

                    r.json().then(obj => {
                        for (const x of obj) {
                            if(username.innerText === x.byuser)
                            {
                                loadHistoryBody.innerHTML += 
                                `<table>
                                <tr>
                                    <th>${autoNumber++}</th>
                                    <th><img src="${x.foto}" class="historyPhoto"></th>
                                    <th>${x.car}</th>
                                    <th>${x.location}</th>
                                    <th>${x.dater}</th>
                                    <th>${x.timer}</th>
                                    <th>${x.dateb}</th>
                                    <th>${x.timeb}</th>
                                    <th>Recenzija</th>
                                </tr>
                            </table>
                                `
                            }
                        }
                    });
                }
            )
            .catch(
                err => {
                    alert("Error: " + err);
                }
            );
    }
}

loadHistoryReservations();

let dataContainer = document.querySelector('.name-surname');
let personalDataContainer = document.querySelector('.info');
let image = document.querySelector('.image');
let controlButton = document.querySelector('.control-buttons p');

let loadPersonalInfo = () =>{
    if(isLogged === "true")
    {
    fetch(`https://65736729192318b7db420fdd.mockapi.io/kaiiak/Korisnik`)
    .then(
        r => {
            if (r.status !== 200) {
                alert("Server javlja grešku: " + r.status);
                return;
            }

            r.json().then(obj => {
                for (const x of obj) {
                    if(username.innerText === x.KorisnickoIme.toLowerCase()){
                        dataContainer.innerHTML = `
                        <input type="text" value="${x.Ime}" disabled="true">
                        <input type="text" value="${x.Prezime}" disabled="true">
                        `
                        personalDataContainer.innerHTML = `
                        <div class="personal-info">
                            <input type="text" value="${x.DatumRodjenja}" disabled="true">
                            <input type="text" value="${x.BrojTelefona}" disabled="true">
                            <input type="text" value="${x.BrojVozackeDozvole}" disabled="true">
                        </div>
                        <div class="living-info">
                            <input type="text" value="${x.Adresa}" disabled="true">
                            <input type="text" value="${x.Drzava}" disabled="true">
                            <input type="text" value="${x.Grad}" disabled="true">
                        </div>
                        `
                        image.innerHTML = `
                        <img src="${x.Slika}" alt="">
                        `
                        controlButton.innerHTML = `
                        <p>${x.Email}</p>
                        `
                    }
                }
            });
        }
    )
    .catch(
        err => {
            alert("Error: " + err);
        }
    );
    }
}
loadPersonalInfo();

let logout = document.querySelector('.position');
logout.addEventListener('click',()=>{
    if(isLogged === "true"){
        localStorage.removeItem("loginUsername");
        localStorage.removeItem("logged");
        localStorage.removeItem("reservations");
        localStorage.removeItem("recieveLocation");
        localStorage.removeItem("recieveDate");
        localStorage.removeItem("recieveTime");
        localStorage.removeItem("returnDate");
        localStorage.removeItem("returnTime");
        window.location.href = "/Welcome/welcome.html";
    }
});

let profilePicture = document.querySelector('.image img');
let inputFile = document.querySelector('.control-image input');
let savePassword = document.querySelectorAll('.passwordButton button');

if(isLogged === "true"){
    inputFile.onchange = function(){
        profilePicture.src = URL.createObjectURL(inputFile.files[0]);
    }
    let currentPassword = document.querySelector('.current input');
    let newPassword = document.querySelector('.new input');
    let newMatchPassword = document.querySelector('.new-match input');
    savePassword[1].onclick = function(){
        if(currentPassword !== ""){
            if(newPassword.value === newMatchPassword.value){
                alert('Uspjesno izmjenjena lozinka');
            }
            else{
                alert('Nova lozinka se ne poklapa');
            }
        }
        else{
            alert('Trenutna lozinka nije ispravna');
        }
    }
    
}


