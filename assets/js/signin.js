let btn = document.querySelector(".submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let isEmail = localStorage.getItem("email");
  let isPass = localStorage.getItem("password");
  if (email === isEmail && pass === isPass) {
    window.location.href = "./index.html";
  } else {
    alert("Password is misMatch");
  }
});

document
  .querySelector(".toggle-password")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("pass");
    const icon = this.querySelector("i");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
