/* login page - JS */

document.addEventListener('DOMContentLoaded', function() {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const loginDiv = document.querySelector('.login');


    function validateInput() {
   
        if (usernameField.value.trim() !== '' && passwordField.value.trim() !== '') {
            loginButton.disabled = false;
            loginDiv.style.backgroundColor="#5E0080";
            loginButton.style.backgroundColor="#5E0080";
            loginButton.style.color="white";

            
        } else {
            loginButton.disabled = true;
        }
     
    }

    usernameField.addEventListener('input', validateInput);
    passwordField.addEventListener('input', validateInput);
    signupButton.addEventListener('click', function() {
        const signupUrl = signupButton.getAttribute('data-signup-url');
        window.location.href = signupUrl;
    });
  
});
