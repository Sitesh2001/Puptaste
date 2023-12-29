let btn = document.querySelector("#submit");
let form = document.querySelector(".form")
console.log(form);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#pass").value;
  
  localStorage.setItem("name",name)
  localStorage.setItem("email",email)
  localStorage.setItem("Password",password)

  form.reset();
  window.location.href = "./signin.html";
});

function togglePasswordVisibility() {
    const passwordField = document.getElementById("pass");
    const icon = document.querySelector(".toggle-password i");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}