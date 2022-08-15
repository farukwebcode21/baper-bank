document.getElementById("login-submit").addEventListener("click", () => {
  const userEmail = document.getElementById("user-email");
  const email = userEmail.value;
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;
  if (email == "faruk@gmail.com" && password == "faruk") {
    window.location.href = "index.html";
  } else {
    window.alert("Invalid User");
  }
});
