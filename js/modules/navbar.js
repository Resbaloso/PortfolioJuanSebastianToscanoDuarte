"use strict";

// ===== NAVBAR =====
// Maneja el hamburger y el cierre automático al hacer click en un link

export function inicializarNavbar() {

    const hamburger = document.getElementById("menuToggle");
    const menu = document.getElementById("navbarMenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Si hacen click en un link del menú, lo cierro
    document.querySelectorAll(".navbar__menu a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            menu.classList.remove("active");
        });
    });
}
