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
