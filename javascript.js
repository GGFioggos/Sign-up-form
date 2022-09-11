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

firstName.addEventListener("input", function (event) {
  if (firstName.value === "") {
    firstNameError.textContent = "Please type in your first name.";
  } else {
    firstNameError.textContent = "";
  }
});

lastName.addEventListener("input", function (event) {
  if (lastName.value === "") {
    lastNameError.textContent = "Please type in your last name";
  } else {
    lastNameError.textContent = "";
  }
});

email.addEventListener("input", function (event) {
  if (email.value === "") {
    emailError.textContent = "Please enter an email.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid Email.";
  } else {
    emailError.textContent = "";
  }
});

phoneNumber.addEventListener("input", function (event) {
  if (phoneNumber.value === "") {
    phoneError.textContent = "Please enter a phone number.";
  } else {
    phoneError.textContent = "";
  }
});

password.addEventListener("input", function (event) {
  if (password.value === "") {
    passwordError.textContent = "Please type in your password";
  } else {
    passwordError.textContent = "";
  }
});

passwordConfirm.addEventListener("input", function (event) {
if (password.value != '' && passwordConfirm.value != ''){
    if (password.value != passwordConfirm.value){
        confirmPasswordError.textContent = "Passwords do not match";
    }else{
        confirmPasswordError.textContent = "";
    }
}
});
