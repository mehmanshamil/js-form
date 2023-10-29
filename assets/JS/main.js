let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
let warning = document.getElementById("warning");

submit.addEventListener("click", function (event) {
    if (username.value.length < 6 || username.value.charAt(0) !== username.value.charAt(0).toUpperCase()) {
        event.preventDefault();
        warning.innerText = `Username "${username.value}" böyük hərflə başlamalıdır və minimum 6 simvol olmalıdır !`;
    } else if (password.value.length < 6 || password.value.length > 10 || !/[!@#$%^&*]/.test(password.value)) {
        event.preventDefault();
        warning.innerText = "Password Minimum 6 maksimum 10 simvol olmalıdır və içərisində ən azı bir simvol olmalıdır (!@#$%^&* kimi)";
    } else if (!/[!@#$%^&*]/.test(email.value)) {
        event.preventDefault();
        warning.innerText = "Emaildə @ işarəsi və nöqtə olmalıdır"
    } else {
        form.style.display = "none";
        warning.style.color = "green";
        warning.innerHTML = "<h1> Form uğurla göndərildi ! </h1>";
    }
});
