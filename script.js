function togglePasswordVisibility(inputId, toggleButtonId) {
  let passwordInput = document.getElementById(inputId);
  let toggleButton = document.getElementById(toggleButtonId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show";
  }
}

document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    togglePasswordVisibility("password", "togglePassword");
  });

document
  .getElementById("toggleConfirmPassword")
  .addEventListener("click", function () {
    togglePasswordVisibility("confirmPassword", "toggleConfirmPassword");
  });

function checkPasswordMatch() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let errorDiv = document.getElementById("passwordError");

  if (password.value !== confirmPassword.value) {
    errorDiv.textContent = "*Passwords do not match.";
  } else {
    errorDiv.textContent = "";
  }
}

document
  .getElementById("password")
  .addEventListener("input", checkPasswordMatch);
document
  .getElementById("confirmPassword")
  .addEventListener("input", checkPasswordMatch);
