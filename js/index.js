const emailInput = document.querySelector(".email");
const atSymbol = document.querySelector(".at");
const submit = document.querySelector(".btn-submit");
const message = document.querySelector(".username-message");
const usernameDiv = document.querySelector(".username");


submit.addEventListener("click", () => {

    if (! ValidateEmail(emailInput.value)){
        usernameDiv.style.marginBottom = "0";
        message.style.display = "block";
        emailInput.style.border = "solid 2px #FF5757";
        atSymbol.src = "assets/at-red.svg";
    }
    else{
        message.style.display = "none";
        usernameDiv.style.marginBottom = "18px";
        emailInput.style.border = "solid 2px #FFF";
        atSymbol.src = "assets/at.svg";
    }

});

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}

