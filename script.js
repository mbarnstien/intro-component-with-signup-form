const button = document.querySelector('button');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const password = document.getElementById('password');
const email = document.getElementById('email');
const fnameError = document.getElementById('fname-error');
const lnameError = document.getElementById('lname-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const fnameIcon = document.getElementById('fname-icon');
const lnameIcon = document.getElementById('lname-icon');
const emailIcon = document.getElementById('email-icon');
const passwordIcon = document.getElementById('password-icon');

button.addEventListener('click', (e) => {
    console.log('click')

    const validateEmail = function () {
        const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (email.value.match(mailformat)) {
            return true;
        } else {
            return false;
        }
      };

    if (fname.value === '' || fname.value == null) {
        fnameError.classList.remove('hide');
        fname.classList.add('red-border');
        fnameIcon.classList.remove('hide');
        e.preventDefault();
    } 
    
    if (lname.value === '' || lname.value == null) {
        lnameError.classList.remove('hide');
        lname.classList.add('red-border');
        lnameIcon.classList.remove('hide');
        e.preventDefault();
    } 
    
    if (password.value === '' || password.value == null) {
        passwordError.classList.remove('hide');
        password.classList.add('red-border');
        passwordIcon.classList.remove('hide');
        e.preventDefault();
    }

    if (validateEmail() === false) {
        e.preventDefault();
        emailError.classList.remove('hide');
        email.classList.add('red-border');
        emailIcon.classList.remove('hide');
    }

})

fname.addEventListener('change', (e) => {
    fnameError.classList.add('hide');
    fname.classList.remove('red-border');
    fnameIcon.classList.add('hide');
    e.preventDefault();
});

lname.addEventListener('change', (e) => {
    lnameError.classList.add('hide');
    lname.classList.remove('red-border');
    lnameIcon.classList.add('hide');
    e.preventDefault();
});

email.addEventListener('change', (e) => {
    emailError.classList.add('hide');
    email.classList.remove('red-border');
    emailIcon.classList.add('hide');
    e.preventDefault();
});

password.addEventListener('change', (e) => {
    passwordError.classList.add('hide');
    password.classList.remove('red-border');
    passwordIcon.classList.add('hide');
     e.preventDefault();
});