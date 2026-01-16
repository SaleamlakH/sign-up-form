const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordMatchHint = document.querySelector('.password-match-hint');
const submitBtn = document.querySelector('#submit');
const themeBtn = document.querySelector('.theme-button');

confirmPassword.addEventListener('focusout', validatePasswordConfirmation);
submitBtn.addEventListener('click', validatePasswordConfirmation);
themeBtn.addEventListener('click', toggleDarkMode);

function validatePasswordConfirmation(event) { 
    if (confirmPassword.value !== password.value) {
        if (event.currentTarget.type === 'submit') event.preventDefault();
        passwordMatchHint.style.visibility = 'visible';
    } else {
        passwordMatchHint.style.visibility = 'hidden';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}