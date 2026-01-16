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
        passwordMatchHint.style.color = 'hsl(0 100 60)';
    } else {
        passwordMatchHint.style.color = 'transparent';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}