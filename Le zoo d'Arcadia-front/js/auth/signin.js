const mailInput = document.getElementById("label1");
const passwordInput = document.getElementById("label2");
const btnSignin = document.getElementById('btnSignin');


btnSignin.addEventListener('click', checkCredentials);

function checkCredentials(){
  
   let myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");

   const username = mailInput.value;
    const password = passwordInput.value;

    // Préparer les données JSON
    const raw = JSON.stringify({
        username: username,
        password: password
   });

   let requestOptions = {
       method: 'POST',
       headers: myHeaders,
       body: raw,
       redirect: 'follow'
   };

   fetch(apiUrl+"login", requestOptions)
   .then(response => {
       if(response.ok){
           return response.json();
       }
       else{
           mailInput.classList.add("is-invalid");
           passwordInput.classList.add("is-invalid");
       }
   })
   .then(result => {
       const token = result.apiToken;
       setToken(token);
       //placer ce token en cookie

       setCookie(RoleCookieName, result.roles[0], 7);
       window.location.replace("/");
   })
   .catch(error => console.log('error', error));
}

