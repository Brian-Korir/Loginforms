function showRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}

function hideRegister() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}

function showForgotPassword() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "block";
}

function hideForgotPassword() {
  document.getElementById("login-form").style.display = "block";
  document.displaygetElementById("forgot-password-form").style.display = "none"; // Corrected line
}
function rememberMe() {
  const rememberMeCheckbox = document.getElementById("remember-me");
  // Logic to store or retrieve login credentials based on checkbox state (consider security!)
}

