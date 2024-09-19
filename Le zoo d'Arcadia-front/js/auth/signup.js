const inputNom = document.getElementById("nomInput");
const inputPrenom = document.getElementById("prenomInput");
const inputEmail = document.getElementById("emailInput");
const inputPass1 = document.getElementById("pass1Input");
const inputPassConfirm = document.getElementById("passConfirmInput");
const btnValidation = document.getElementById("btn-inscription");
const formInscription = document.getElementById("formulaireInscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPass1.addEventListener("keyup", validateForm);
inputPassConfirm.addEventListener("keyup", validateForm);
btnValidation.addEventListener("click", inscrireUser);

function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const emailOk = validateMail(inputEmail);
    const passOk = validatePassword(inputPass1);
    const passConfirmOk = validatePasswordConfirm(inputPassConfirm);

    if (nomOk && prenomOk && emailOk && passOk && passConfirmOk) {
        btnValidation.disabled = false;
    } else {
        btnValidation.disabled = true;
    }
}

function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if (passwordRegex.test(passwordUser)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateMail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (emailRegex.test(mailUser)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value.trim() !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePasswordConfirm(input) {
    const password1 = inputPass1.value;
    if (input.value === password1 && input.value.trim() !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
function inscrireUser(){

    let dataForm = new FormData(formInscription);
    
    let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "firstName": dataForm.get("prenom"),
  "lastName": dataForm.get("name"),
  "email": dataForm.get("email"),
  "password": dataForm.get("password")
});

let requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(apiUrl+"registration", requestOptions)
  .then(response => {
    if(response.ok){
        return response.json();
    }
   else{
    alert("Erreur lors de l'inscription");
   }
  })
  .then(result => {
    alert("Bravo " + dataForm.get("prenom") + ", vous etes maintenant inscrit, vous pouvez vous connecter.");
    document.location.href="/signin";
  })
  .catch(error => console.log('error',error));

}

