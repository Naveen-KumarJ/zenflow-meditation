document.addEventListener("DOMContentLoaded", function () {
    const createAccountBtn = document.querySelector("#createAccount-btn");
    const fullNameInput = document.querySelector('input[placeholder="Full Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const passwordInput = document.querySelector('input[placeholder="Password"]');
    const confirmPasswordInput = document.querySelector('input[placeholder="Confirm Password"]');

    createAccountBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!fullName || !email || !password || !confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!",
              });
            return;
        }

        if(!email.includes('@gmail.com')){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter a Valid Email.",
              });
            return;
        }
        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Passwords do not match.",
              });
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const emailExists = users.some(user => user.email === email);
        if (emailExists) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This email is already registered. Please use a different email or log in.",
              });
            return;
        }

        users.push({ fullName, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Account created successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        setTimeout(()=>{
            window.location.href = "login.html";
        },2000);
    });
});
