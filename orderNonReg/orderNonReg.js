let counterCorrectInputs = 0;
let nextButton = document.querySelector('.Sadrzaj button');

nextButton.addEventListener('click',()=>{
    let inputs = document.querySelectorAll('.Sadrzaj input');
    inputs.forEach(element=>{
        let inputsName = element.getAttribute('name');
        let inputValue = element.value;

        //regex validation patterns
        var regexNotNumber = /^[A-Z][a-z]*$/;
        var regexPhoneNumber = /^[0-9]{3}[0-9]{3}[0-9]{3,4}$/;
        
        switch (inputsName) {
            case "input1":
                if(!regexNotNumber.test(inputValue) || inputValue === ""){
                    alert('Nevalidan unos imena, pocnite velikim slovom bez brojeva.');
                }
                else{
                    counterCorrectInputs++;
                }
                break;
            case "input2":
                if(!regexNotNumber.test(inputValue) || inputValue === ""){
                    alert('Nevalidan unos prezimena, pocnite velikim slovom bez brojeva.');
                }
                else{
                    counterCorrectInputs++;
                }
                break;
            case "input3":
                if(!regexPhoneNumber.test(inputValue) || inputValue === ""){
                    alert('Nevalidan unos broja telefona.');
                }
                else{
                    counterCorrectInputs++;
                }
            case "input4":
                if(inputValue === ""){
                    alert('Nevalidan unos broja vozacke dozvole.');
                }
                else{
                    counterCorrectInputs++;
                }
                break;
            case "input5":
                if(!regexNotNumber.test(inputValue) || inputValue === ""){
                    alert('Nevalidan unos grada, pocnite velikim slovom bez brojeva.');
                }
                else{
                    counterCorrectInputs++;
                }
                break;
            default:
                break;
        }
        if(counterCorrectInputs === 5)
        {
            let cardNonLogged = localStorage.getItem("nonLogged");
            if(cardNonLogged === "true")
            {
                window.location.href = "/creditCard/creditCard.html";
                localStorage.removeItem("nonLogged");
            }
            else{
                window.location.href = "/Welcome/welcome.html";
                localStorage.removeItem("reservations");
                localStorage.removeItem("recieveLocation");
                localStorage.removeItem("recieveDate");
                localStorage.removeItem("recieveTime");
                localStorage.removeItem("returnDate");
                localStorage.removeItem("returnTime");
            }
        }
    })
})