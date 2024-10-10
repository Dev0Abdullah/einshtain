let showPass = document.querySelector(".show-pass");
let passInput = document.querySelector("#password");

showPass.addEventListener("click", () => {
  showPass.classList.toggle("show");
  if (showPass.classList.contains("show")) {
    showPass.classList.remove("fa-eye");
    showPass.classList.add("fa-eye-slash");
    passInput.type = "text";
  } else {
    showPass.classList.add("fa-eye");
    showPass.classList.remove("fa-eye-slash");
    passInput.type = "password";
  }
});

var phone = document.getElementById("phone");

phone.addEventListener("input", function () {
  var inputValue = phone.value;

  var numericValue = inputValue.replace(/[^0-9]/g, "");

  phone.value = numericValue;
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
