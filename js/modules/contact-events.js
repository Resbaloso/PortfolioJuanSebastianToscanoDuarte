"use strict";

// ===== EVENTOS DE CONTACTO =====
// El botón de GitHub dispara un evento personalizado que activa el efecto de fondo

export function inicializarEventosContacto() {

    const botonGithub = document.getElementById("githubEventButton");

    botonGithub.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("github-selected", {
            detail: { source: "github-card" }
        }));
    });
}
