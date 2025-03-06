document.addEventListener("DOMContentLoaded", function () {
    function showLogin() {
        document.getElementById('content').innerHTML = `
            <div class="container">
                <h2>Iniciar Sesión</h2>
                <form id="loginForm">
                    <input type="text" id="loginUser" placeholder="Usuario" required>
                    <input type="password" id="loginPass" placeholder="Contraseña" required>
                    <button type="submit">Entrar</button>
                </form>
                <p id="loginError" style="color: red;"></p>
            </div>
        `;

        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();
            loginUser();
        });
    }

    function showRegister() {
        document.getElementById('content').innerHTML = `
            <div class="container">
                <h2>Crear Usuario</h2>
                <form id="registerForm">
                    <input type="text" id="regUser" placeholder="Usuario" required>
                    <input type="email" id="regEmail" placeholder="Correo" required>
                    <input type="password" id="regPass" placeholder="Contraseña" required>
                    <button type="submit">Registrar</button>
                </form>
                <p id="registerError" style="color: red;"></p>
                <p id="registerSuccess" style="color: green;"></p>
            </div>
        `;

        document.getElementById("registerForm").addEventListener("submit", function (event) {
            event.preventDefault();
            registerUser();
        });
    }

    function registerUser() {
        let username = document.getElementById("regUser").value.trim();
        let email = document.getElementById("regEmail").value.trim();
        let password = document.getElementById("regPass").value.trim();

        if (username === "" || email === "" || password === "") {
            document.getElementById("registerError").innerText = "Todos los campos son obligatorios.";
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar si el usuario ya existe
        let existingUser = users.find(user => user.username === username);
        if (existingUser) {
            document.getElementById("registerError").innerText = "El usuario ya existe.";
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("registerError").innerText = "";
        document.getElementById("registerSuccess").innerText = "Usuario registrado con éxito. Ahora puedes iniciar sesión.";
    }

    function loginUser() {
        let username = document.getElementById("loginUser").value.trim();
        let password = document.getElementById("loginPass").value.trim();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let validUser = users.find(user => user.username === username && user.password === password);
        if (validUser) {
            document.getElementById("loginError").innerText = "";
            alert("Inicio de sesión exitoso. Redirigiendo a Home...");
            showHome();
        } else {
            document.getElementById("loginError").innerText = "Usuario o contraseña incorrectos.";
        }
    }

    function showHome() {
        document.getElementById("content").innerHTML = `
            <h2>Productos Disponibles</h2>
            <section class="products">
                <div class="product"><img src="images/usb.jpg" alt="Memoria USB"><p>Memoria USB - $150</p></div>
                <div class="product"><img src="images/cuadernos.jpg" alt="Cuadernos"><p>Cuadernos - $50</p></div>
                <div class="product"><img src="images/credenciales.jpg" alt="Credenciales"><p>Credenciales - $100</p></div>
                <div class="product"><img src="images/impresiones.jpg" alt="Impresiones"><p>Impresiones - $10</p></div>
                <div class="product"><img src="images/plumas.jpg" alt="Plumas de Todo Tipo"><p>Plumas - $20</p></div>
                <div class="product"><img src="images/engrapadora.jpg" alt="Engrapadoras"><p>Engrapadoras - $120</p></div>
                <div class="product"><img src="images/calculadora.jpg" alt="Calculadora Cientifica"><p>Calculadora - $300</p></div>
                <div class="product"><img src="images/resistol.jpg" alt="Resistoles"><p>Resistoles - $40</p></div>
                <div class="product"><img src="images/equipo.jpg" alt="Equipo de IOT"><p>Equipo de IOT - $500</p></div>
            </section>
        `;
    }

    function showProfile() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let currentUser = users[0]; // Aquí puedes mejorarlo para manejar múltiples sesiones

        if (currentUser) {
            document.getElementById('content').innerHTML = `
                <div class="profile-container">
                    <h2>Perfil de Usuario</h2>
                    <img src="images/perfil.jpg" alt="Perfil de usuario" class="profile-img">
                    <p><strong>Nombre:</strong> ${currentUser.username}</p>
                    <p><strong>Correo:</strong> ${currentUser.email}</p>
                </div>
            `;
        } else {
            document.getElementById('content').innerHTML = "<p>No has iniciado sesión.</p>";
        }
    }

    // Hacer funciones globales
    window.showLogin = showLogin;
    window.showRegister = showRegister;
    window.showHome = showHome;
    window.showProfile = showProfile;
});
