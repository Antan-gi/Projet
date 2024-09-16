const mailInput = document.getElementById("label1");
const passwordInput = document.getElementById("label2");
const btnSignin = document.getElementById('btnSignin');

btnSignin.addEventListener('click', checkCredentials);

function checkCredentials(){
   //ici il faudra appellé l'api

   if(mailInput.value == 'test@mail.fr' && passwordInput.value == "123"){
     


   // il faudra recuperer le vrai token
const token ="jsbiksikjnjsibhgqzf";
setToken(token);

   // placer ce token en cookie


   setCookie(RoleCookieName, "admin", 7);
   window.location.replace("/");
}
   else{
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
    
   }
}


