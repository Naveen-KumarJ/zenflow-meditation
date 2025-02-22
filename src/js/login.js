document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector('.login-btn');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const passwordInput = document.querySelector('input[placeholder="Password"]');

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!",
            });
            return;
        }

        
        let users = JSON.parse(localStorage.getItem('users')) || [];

        let user = users.find(eachUser => eachUser.email === email);

        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User not found! Please sign up first.",
            });
            return;
        }

        if (user.password !== password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect Password!",
            });
            return;
        }

        let currentUser = {
            name: user.fullName,
            email: user.email
        };
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 1500,
            
        });

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    });
});
