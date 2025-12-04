document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (!storedUser) {
    alert("No user found. Please sign up first.");
    return;
  }

  if (storedUser.email === email && storedUser.password === password) {
    alert("Login successful!");
    window.location.href = "home-a.html"; // ✅ This redirects to the home page
  } else {
    alert("Invalid email or password.");
  }
});



