var ime = document.querySelector(".ime").value;
var prezime = document.querySelector(".prezime").value;
var datum = document.querySelector(".datum").value;
var email =document.querySelector(".email").value;
var lozinka = document.querySelector(".lozinka").value;
var lozinka2 = document.querySelector(".lozinka2").value;
var adresa = document.querySelector(".adresa").value;
var brojtelefona = document.querySelector(".brojtelefona").value;
var grad=document.querySelector(".comboboxGrad").value;
var brojvozacke = document.querySelector(".brojvozacke").value;
var drzava = document.querySelector(".comboboxDrzava").value;
var pravila = document.querySelector(".cbrules");
var godine = document.querySelector(".cbyears");
function register(){
    if(!validacija())
    return;

    var ime = document.querySelector(".ime").value;
    var prezime = document.querySelector(".prezime").value;
    var datum = document.querySelector(".datum").value;
    var email =document.querySelector(".email").value;
    var lozinka = document.querySelector(".lozinka").value;
    var lozinka2 = document.querySelector(".lozinka2").value;
    var adresa = document.querySelector(".adresa").value;
    var brojtelefona = document.querySelector(".brojtelefona").value;
    var grad=document.querySelector(".comboboxGrad").value;
    var brojvozacke = document.querySelector(".brojvozacke").value;
    var drzava = document.querySelector(".comboboxDrzava").value;
    var pravila = document.querySelector(".cbrules");
    var godine = document.querySelector(".cbyears");
    var apiUrl = 'https://65736729192318b7db420fdd.mockapi.io/kaiiak/Korisnik';
      
      fetch(apiUrl, {
       method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Ime: ime,
        Prezime:prezime,
        KorisnickoIme: ime.toLowerCase() + "." + prezime.toLowerCase(),
        Email:email,
        BrojTelefona:brojtelefona,
        Adresa:adresa,
        Grad:grad,
        Drzava:drzava,
        BrojVozackeDozvole:brojvozacke,
        DatumRodjenja:datum,
        Slika:"https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
        Lozinka:lozinka,
        isAktivan:true  
    }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {          
        localStorage.setItem("loginUsername",ime.toLowerCase() + "." + prezime.toLowerCase());
        localStorage.setItem("logged",true);
        localStorage.setItem("slika","https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg");
        alert("Registracija uspješna")
        window.location.href = '/Welcome/welcome.html';
      })
      .catch(error => {
        console.error('Error during fetch:', error);
      });
      
}
function validacija (){

    var ime = document.querySelector(".ime").value;
var prezime = document.querySelector(".prezime").value;
var datum = document.querySelector(".datum").value;
var email =document.querySelector(".email").value;
var lozinka = document.querySelector(".lozinka").value;
var lozinka2 = document.querySelector(".lozinka2").value;
var adresa = document.querySelector(".adresa").value;
var brojtelefona = document.querySelector(".brojtelefona").value;
var grad=document.querySelector(".comboboxGrad").value;
var brojvozacke = document.querySelector(".brojvozacke").value;
var drzava = document.querySelector(".comboboxDrzava").value;
var pravila = document.querySelector(".cbrules");
var godine = document.querySelector(".cbyears");

    var RegexImePrezime = /^[A-Z][a-z]*$/;
    var RegexEmail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var RegexLozinka = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_+=<>?.,;:]{8,}$/;
    var RegexBrojTelefona = /^\+[0-9]+$/;
   
    if(!RegexImePrezime.test(ime)){
        alert("Ime je obavezno, samo prvo slovo imena mora biti veliko i ne smije sadržavati znakove i brojeve");
        return false;
    }
    if(!RegexImePrezime.test(prezime)){
        alert("Prezime je obavezno, samo prvo slovo imena mora biti veliko i ne smije sadržavati znakove i brojeve");
        return false;
    }
    var odabranidatum = new Date(datum);
    var datumdanas = new Date()
    if(datumdanas.getFullYear() - odabranidatum.getFullYear()<18){
        alert("Morate imati više od 18 godina");
        return false;
    }
    
    if(!RegexEmail.test(email)){
        alert("email je obavezan u formatu 0Oy5o@example.com ili 0Oy5o@example.exa.mpl");
        return false;
    }
    
    if(!RegexLozinka.test(lozinka)){
        alert("Unesite lozinku koja sadrži barem jedno veliko slovo i jedan broj a duga je barem 8 karaktera");
        return false;
    }
    
    if(!lozinka == lozinka2){
        alert("Potvrda lozinke je obavezna");
        return false;
    } 
    if(!adresa){
        alert("Unesite adresu");
        return false;
    }
    if(!RegexBrojTelefona.test(brojtelefona)){
        alert("Broj telefona je obavezan i mora biti u formatu +123456789");
        return false;
    } 
    if(drzava=="drz"){
        alert("Obavezno odaberite državu");
        return false;
    }
    if(grad=="grd"){
        alert("Obavezno odaberite grad");
        return false;
    }
 
    if(!brojvozacke){
        alert("Broj vozacke dozvole je obavezan");
        return false;
    }
    if (!pravila.checked) {
        alert("Za nastavak je obavezno da se slažete se sa uslovima i pravilima korištenja.");
        return false;
      }
    
      if (!godine.checked) {
        alert("Imati više od 19 godina i vozačku dozvolu duže od 2 godine je obavezno");
        return false;
      }

    return true;
}

var drzavaSelector = document.querySelector('.comboboxDrzava');
var gradSelector = document.querySelector('.comboboxGrad');

drzavaSelector.addEventListener('change', function () {
  var selectedCountry = drzavaSelector.value;

  gradSelector.innerHTML = '<option value="grd">Odaberi grad</option>';

  if (selectedCountry === 'Bosna i Hercegovina') {
    addOption(gradSelector, 'Sarajevo', 'Sarajevo');
    addOption(gradSelector, 'Banja Luka', 'Banja Luka');
    addOption(gradSelector, 'Tuzla', 'Tuzla');
    addOption(gradSelector, 'Zenica', 'Zenica');
    addOption(gradSelector, 'Mostar', 'Mostar');
    addOption(gradSelector, 'Bihać', 'Bihać');
    addOption(gradSelector, 'Bugojno', 'Bugojno');
    addOption(gradSelector, 'Trebinje', 'Trebinje');
    addOption(gradSelector, 'Doboj', 'Doboj');
    addOption(gradSelector, 'Prijedor', 'Prijedor');
    addOption(gradSelector, 'Cazin', 'Cazin');
    addOption(gradSelector, 'Gradiška', 'Gradiška');
    addOption(gradSelector, 'Živinice', 'Živinice');
    addOption(gradSelector, 'Sanski Most', 'Sanski Most');
    addOption(gradSelector, 'Jajce', 'Jajce');
    addOption(gradSelector, 'Travnik', 'Travnik');
    addOption(gradSelector, 'Konjic', 'Konjic');
    addOption(gradSelector, 'Livno', 'Livno');
    addOption(gradSelector, 'Visoko', 'Visoko');
    addOption(gradSelector, 'Bijeljina', 'Bijeljina');
  }

  if (selectedCountry === 'Hrvatska') {
    addOption(gradSelector, 'Zagreb', 'Zagreb');
    addOption(gradSelector, 'Split', 'Split');
    addOption(gradSelector, 'Rijeka', 'Rijeka');
    addOption(gradSelector, 'Osijek', 'Osijek');
    addOption(gradSelector, 'Zadar', 'Zadar');
    addOption(gradSelector, 'Pula', 'Pula');
    addOption(gradSelector, 'Varaždin', 'Varaždin');
    addOption(gradSelector, 'Šibenik', 'Šibenik');
    addOption(gradSelector, 'Dubrovnik', 'Dubrovnik');
    addOption(gradSelector, 'Karlovac', 'Karlovac');
  }
});

function addOption(selector, value, text) {
  var option = document.createElement('option');
  option.value = value;
  option.text = text;
  selector.add(option);
}