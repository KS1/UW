var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

// var emailStored = localStorage.getItem("emailStored");
// var passwordStored = localStorage.getItem("passwordStored");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  var emailStored = localStorage.getItem("emailStored");
  var passwordStored = localStorage.getItem("passwordStored");

  if(emailStored === null || passwordStored === null){
    return;
  }

  userEmailSpan.textContent = emailStored;
  userPasswordSpan.textContent = passwordStored;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
  localStorage.setItem("emailStorage", email);
  localStorage.setItem("passwordStorage", password);
  
  // this works. 
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;

  // another way to display. Not working. Need to check
  // renderLastRegistered();
  }
});
