const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const errorLabel = document.querySelector('#confirm-password + label');
const submitBtn = document.querySelector('#submit');

confirmPassword.addEventListener('focusout', validatePasswordConfirmation);
submitBtn.addEventListener('click', validatePasswordConfirmation);

function validatePasswordConfirmation(event) { 
    if (confirmPassword.value !== password.value) {
        if (event.currentTarget.type === 'submit') event.preventDefault();
        errorLabel.style.color = 'hsl(0 100 60)';
    } else {
        errorLabel.style.color = 'hsl(0 0 60)';
    }
}
