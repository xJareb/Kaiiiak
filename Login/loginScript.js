function goToRegister(){
    window.location.href = '/Register/register.html';
}

function login(){
    var email = document.querySelector(".inpKorisnickoIme").value;
    var password = document.querySelector(".inpLozinka").value;

    const apiUrl = 'https://65736729192318b7db420fdd.mockapi.io/kaiiak/Korisnik';

    let usersArray;
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const userFound = data.some(user => user.Email === email && user.Lozinka === password);
            userFound ? window.location.href = '/Welcome/welcome.html' : alert("Unešeni podaci za prijavu nisu tačni");
        })
        .catch(error => {
            console.error('Error during fetch:', error);
        });
}