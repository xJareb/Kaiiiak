

document.addEventListener('DOMContentLoaded', function () {
    var tipLabels = document.querySelectorAll('.Tip');

    tipLabels.forEach(function (label) {
        label.addEventListener('click', function () {
            var labelText = this.textContent.trim();
            updateContent(labelText);
        });
    });
//     document.addEventListener('DOMContentLoaded', function () {
//     var clickedOdgovor = document.querySelector('.odgovor[data-answer-id="' + index + '"]');
//     var isVisible = clickedOdgovor.classList.contains('visible');
//     document.querySelector('.plus').innerHTML = isVisible ? '-' : '+';
//     clickedOdgovor.classList.toggle('visible');
//     var isVisible = clickedOdgovor.classList.contains('visible');

// });




    function updateContent(labelText) {
        var odgovoriNaPitanja = document.querySelector('.OdgovoriNaPitanja');
        odgovoriNaPitanja.innerHTML = '';
        if (labelText === 'Generalno') {
            odgovoriNaPitanja.innerHTML = `
            <div class="OdgovoriNaPitanja2">
            <div class="DivPitanja">
                <p class="Gen">Generalna pitanja</p>
            </div>
            <div class="DivPitanja">
                <label class="plus" id="plus1" onclick="toggleAnswer(1,this)">+</label>
                <p class="Pitanje" id="pitanje1">Da li je moguće iznajmiti više automobila za jednu osobu?</p>
                <p class="odgovor" data-answer-id="1"></p>
            </div>
            <div class="DivPitanja">
                <label class="plus" id="plus2" onclick="toggleAnswer(2,this)">+</label>
                <p class="Pitanje" id="pitanje2">Šta se dešava ako iznajmljeno vozilo ima nezgodu?</p>
                <p class="odgovor" data-answer-id="2"></p>
            </div>
            <div class="DivPitanja">
                <label class="plus" id="plus3" onclick="toggleAnswer(3,this)">+</label>
                <p class="Pitanje" id="pitanje3">Da li postoje pomagala za osobe sa invaliditetom?</p>
                <p class="odgovor" data-answer-id="3"></p>
            </div>
            <div class="DivPitanja">
                <label class="plus" id="plus4" onclick="toggleAnswer(4,this)">+</label>
                <p class="Pitanje" id="pitanje4">Da li je moguće iznajmiti više automobila za jednu osobu?</p>
                <p class="odgovor" data-answer-id="4"></p>
            </div>
        </div>        
            `;
        } else if (labelText === 'Placanje') {
            odgovoriNaPitanja.innerHTML = `
            <div class="OdgovoriNaPitanja2">
            <div class="DivPitanja">
                <p class="Gen">Evo pitanja</p>
            </div>
            <div class="DivPitanja">
                <label class="plus" id="plus5" onclick="toggleAnswer(5,this)">+</label>
                <p class="Pitanje" id="pitanje5">Koji su načini plaćanja dostupni pri rezervaciji automobila?</p>
                <p class="odgovor" data-answer-id="5"></p>
            </div>
            <div class="DivPitanja">
                <label class="plus" id="plus6" onclick="toggleAnswer(6,this)">+</label>
                <p class="Pitanje" id="pitanje6">Kada se obavlja naplata - prilikom rezervacije ili pri preuzimanju?</p>
                <p class="odgovor" data-answer-id="6"></p>
            </div>
            <div class="DivPitanja">
                <label class="plus" id="plus7" onclick="toggleAnswer(7,this)">+</label>
                <p class="Pitanje" id="pitanje7">Koje dodatne troškove trebam uzeti u obzir pri plaćanju?</p>
                <p class="odgovor" data-answer-id="7"></p>
            </div>
        </div>        
            `;
        } else if (labelText === 'Kontakt') {
            odgovoriNaPitanja.innerHTML = `
                <div class="OdgovoriNaPitanja2">
                    <div class="DivPitanja">
                        <p class="Gem">Adresa : Marsala Tita b.b., 88000 Mostar <br>
                            Telefon: 061 11 111 <br>
                            Email: kaiiaakoffice@bussiness.com <br>
                            Radno vrijeme : 08:00 - 16:00
                        </p>
                    </div>
                </div>
            `;
        }
    }; 
    function toggleAnswer(index) {
        var allOdgovori = document.querySelectorAll('.odgovor');
        var clickedOdgovor = document.querySelector('#odgovor' + index);
        var plusLabel = document.querySelector('.plus[data-answer-id="' + index + '"]');
        plusLabel.textContent = (plusLabel.textContent === '+') ? '-' : '+';
        clickedOdgovor.classList.toggle('visible');

        allOdgovori.forEach(function (odgovor) {
            if (odgovor !== clickedOdgovor && odgovor.classList.contains('visible')) {
                odgovor.classList.remove('visible');
                document.querySelector('.plus[data-answer-id="' + odgovor.getAttribute('data-answer-id') + '"]').textContent = '+';
            }
            
        });
    }
});
function toggleLabel(index) {
    var plusLabel = document.querySelector('.plus[data-answer-id="' + index + '"]');
    plusLabel.textContent = (plusLabel.textContent === '+') ? '-' : '+';
}
function toggleAnswer(index,clickedLabel) {
    var clickedOdgovor = document.querySelector('.odgovor[data-answer-id="' + index + '"]');
    clickedOdgovor.classList.toggle('visible');
    const plusElements = document.querySelectorAll('.plus');
        if (clickedLabel.innerHTML === '+' && clickedOdgovor.classList.contains('visible')) {
          clickedLabel.textContent = '-';
        } else if (clickedLabel.innerHTML === '-' && !clickedOdgovor.classList.contains('visible')) {
          clickedLabel.textContent = '+';
        }
    

    var answerTexts = [
        "Da, moguce je rezervisati vise vozila za jednu osobu, ali svakako  savjerujemo da prilikom rezervacije ili upita  nas direktno kontaktirate(odjel 'Kontakt') kako biste dobili precizne informacije o dostupnosti i uvjetima najma više vozila za jednu osobu.",
        "Odmah obavijestite rent-a-car tvrtku o nezgodi i slijedite njihove upute. Nasa preporuka je da dokumentirate sve detalje nesreće, uključujući fotografije, svjedočenja svjedoka (ako ih ima), izvješće policije, te kontaktirati svoje vlastito osiguranje kako biste ih obavijestili o incidentu. ",
        "Pri rezervaciji vozila, preporučljivo je unaprijed obavijestiti rent-a-car tvrtku o specifičnim potrebama kako bi se osiguralo dostupnost odgovarajućeg vozila i potrebnih pomagala.",
        "Pomagala koja su često dostupna uključuju prilagodbe poput ručnih upravljača, vozila s prilagođenim pristupom invalidskim kolicima, ili druga tehnička rješenja koja olakšavaju kretanje osobama s posebnim potrebama.",
        "Pri rezervaciji automobila imate opciju biranja između kartičnog plaćanja i gotovinskog plaćanja. Možete koristiti svoju kreditnu ili debitnu karticu za plaćanje, ili se odlučiti za gotovinsko plaćanje prilikom preuzimanja automobila.",
        "Ovisno o nacinu placanja koji ste odabrali zavisi i to kada ce se izvrisiti placanje.",
        "Pri plaćanju najma vozila, osim osnovne cijene najma, mogu se pojaviti dodatni troškovi kao što su troškovi goriva, troškovi dostave/povrata vozila na određenu lokaciju, troškovi dodatne opreme (npr. dječje sjedalice).,"
    ];

    index--;

    clickedOdgovor.innerHTML = (clickedOdgovor.innerHTML === answerTexts[index]) ? "" : answerTexts[index];

    var allOdgovori = document.querySelectorAll('.odgovor');
    allOdgovori.forEach(function (odgovor) {
        if (odgovor !== clickedOdgovor && odgovor.classList.contains('visible')) {
            odgovor.classList.remove('visible');
        }
    });
}