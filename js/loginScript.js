var loginBtn = document.querySelector("#loginbtn");
var signupBtn = document.querySelector("#signupbtn");
var email = document.querySelector("#email");
var pass = document.querySelector("#pass");
var validation = document.querySelector("#validation");

signupBtn.addEventListener("click", function () {
  window.location.href = "../html/signUpPage.html";
});

loginBtn.addEventListener("click", function () {
  login();
});

function login() {
  var userContainer = JSON.parse(localStorage.getItem("users")) || [];
  validation.style.display = "none";

  if (email.value.trim() === "" || pass.value.trim() === "") {
    validation.style.display = "block";
    validation.innerText = "Please fill in all fields.";
    console.log("Empty fields!");
    return;
  }
  var foundUser = userContainer.find(function (user) {
    return user.email_Number === email.value && user.password === pass.value;
  });

  if (foundUser) {
    window.location.href = "../html/index.html";
    console.log("Login successful!");
  } else {
    validation.style.display = "block";
    validation.innerText = "username or password is invalid";
    console.log("Login failed!");
  }
}
