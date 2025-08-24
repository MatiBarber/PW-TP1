document.addEventListener("DOMContentLoaded", () => {
    // =============================
    // Saludo Automático (solo por sesión)
    // =============================
    if (!sessionStorage.getItem("saludoMostrado")) {
        let nombre = prompt("¿Cómo te llamas?");
        if (nombre && nombre.trim() !== "") {
            alert(`¡Bienvenido a mi perfil, ${nombre}!`);
        } else {
            alert("¡Bienvenido a mi perfil!");
        }
        sessionStorage.setItem("saludoMostrado", "true");
    }

    // =============================
    // Botón Modo Oscuro con persistencia
    // =============================
    const btnDarkMode = document.createElement("button");
    btnDarkMode.textContent = "🌙 Modo Oscuro";
    btnDarkMode.classList.add("btn-darkmode");
    document.body.appendChild(btnDarkMode);

    // Comprobar si el modo oscuro estaba activado
    if (localStorage.getItem("modoOscuro") === "activado") {
        document.body.classList.add("modo-oscuro");
        btnDarkMode.textContent = "☀️ Modo Claro";
    }

    // Evento para alternar el modo oscuro
    btnDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            btnDarkMode.textContent = "☀️ Modo Claro";
            localStorage.setItem("modoOscuro", "activado");
        } else {
            btnDarkMode.textContent = "🌙 Modo Oscuro";
            localStorage.setItem("modoOscuro", "desactivado");
        }
    });
});
