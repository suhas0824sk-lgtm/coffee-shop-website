document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Save user data in localStorage (simulate backend)
  const user = { name, email, password };
  localStorage.setItem("userData", JSON.stringify(user));

  alert("Account created successfully! You can now log in.");
  window.location.href = "login.html";
});
