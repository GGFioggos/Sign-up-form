const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");
const passwordError = document.querySelector("#password-error");
const confirmPasswordError = document.querySelector("#confirm-password-error");

console.log(firstNameError);


firstName.addEventListener("input", ()=> {
    if (firstName.value === '') {
      firstNameError.textContent = 'Please type in your first name.';
    } else {
      firstNameError.textContent = '';
    }
  }); 

  lastName.addEventListener("input", function (event) {
    if (lastName.value === '') {
      lastNameError.textContent = 'Please type in your last name';
    } else {
      lastNameError.textContent = '';
    }
  }); 

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      emailError.textContent = 'Please enter in a valid Email.';
    } else {
      emailError.textContent = '';
    }
  }); 

  phoneNumber.addEventListener("input", function (event) {
    if (phoneNumber.validity.patternMismatch) {
      phoneError.textContent = 'Please enter in a 10 digit phone number';
    } else {
      phoneError.textContent = '';
    }     
  }); 
 