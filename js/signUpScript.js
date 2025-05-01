var fName = document.getElementById("fname");
var surName = document.getElementById("surname");
var email_Number = document.getElementById("email&number");
var password = document.getElementById("pass");
var createBtn = document.getElementById("createBtn");

var userContainer = JSON.parse(localStorage.getItem("users")) || [];

createBtn.addEventListener("click", function () {
  var gender = document.querySelector('input[name="gender"]:checked');

  // check empty spaces
  if (
    fName.value.trim() === "" ||
    surName.value.trim() === "" ||
    email_Number.value.trim() === "" ||
    !gender ||
    password.value.trim() === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  // email/number validation
  if (!isValidInput(email_Number.value)) {
    alert("Wrong email or phone number");
    return;
  }

  // check if email/number already found or not
  var isDuplicate = userContainer.some(function (user) {
    return user.email_Number === email_Number.value;
  });

  if (isDuplicate) {
    alert("User with this email or phone number already exists.");
    return;
  }

  var users = {
    fName: fName.value,
    surName: surName.value,
    email_Number: email_Number.value,
    gender: gender.value,
    password: password.value,
  };

  userContainer.push(users);
  localStorage.setItem("users", JSON.stringify(userContainer));
  alert("account created successfully");
  window.location.href = "../html/LoginPage.html";
  fName.value = "";
  surName.value = "";
  email_Number.value = "";
  password.value = "";
});

function isValidInput(input) {
  const phoneRegex = /^(010|011|012|015)[0-9]{8}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return phoneRegex.test(input) || emailRegex.test(input);
}
















