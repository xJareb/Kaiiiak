function goToRegister(){
    window.location.href = '/Register/register.html';
}

function login(){
    var email = document.querySelector(".inpKorisnickoIme").value;
    var password = document.querySelector(".inpLozinka").value;
    let username;

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
            for (const x of data) {
                if(email === x.Email)
                {
                    localStorage.setItem("loginUsername",x.KorisnickoIme);
                    localStorage.setItem("logged",true);
                    localStorage.setItem("slika",x.Slika);
                }
            }
            userFound ? window.location.href = '/Welcome/welcome.html' : alert("Uneseni podaci za prijavu nisu tačni");
        })
        .catch(error => {
            console.error('Error during fetch:', error);
        });
}
