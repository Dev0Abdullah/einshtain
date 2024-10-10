// form validation
let fName = document.querySelector("#fName");
let lName = document.querySelector("#lName");

let phoneNumber = document.querySelector("#phone");
let parentPhoneNumber = document.querySelector("#pPhone");

let email = document.querySelector("#email").value;

let password = document.querySelector("#pass");
let passwordConfirmation = document.querySelector("#pass-confirm");

let inputs = Array.from(document.querySelectorAll("input"));

// phone validate
let phones = Array.from(document.querySelectorAll(".phone"));
phones.map((phone) => {
  phone.addEventListener("input", function () {
    let inputValue = phone.value;
    let numericValue = inputValue.replace(/[^0-9]/g, "");
    phone.value = numericValue;
  });
});

// name validate
let names = Array.from(document.querySelectorAll(".name"));
names.map((name) => {
  name.addEventListener("input", function (e) {
    let inputValue = e.target.value.replace(/[^a-zA-Z]/g, "");
    e.target.value = inputValue;
  });
});

document.forms[0].onsubmit = function (e) {
  validateEmail();
  let inputValid = false;
  let emailValid = false;

  // email validate
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    emailValid = true;
  }

  else if (inputValid === false || emailValid === false) {
    e.preventDefault();
  }
};