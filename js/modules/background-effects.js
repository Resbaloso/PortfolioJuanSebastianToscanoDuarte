"use strict";

// ===== EFECTO DE FONDO =====
// Se activa cuando el usuario clickea el botón de GitHub

export function activarEfectoFondo() {

    document.body.classList.add("background-highlight");

    // Genero partículas aleatorias en el fondo
    spawnParticles();

    setTimeout(() => {
        document.body.classList.remove("background-highlight");
    }, 2000);
}

// Crea partículas de luz que explotan por la pantalla
function spawnParticles() {

    const container = document.querySelector(".background-container");
    if (!container) return;

    for (let i = 0; i < 12; i++) {

        const particle = document.createElement("div");
        particle.classList.add("bg-particle");

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = 4 + Math.random() * 8;
        const delay = Math.random() * 600;
        const duration = 800 + Math.random() * 600;

        particle.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            animation-delay: ${delay}ms;
            animation-duration: ${duration}ms;
        `;

        container.appendChild(particle);

        // La elimino cuando termina la animación
        setTimeout(() => particle.remove(), delay + duration + 200);
    }
}
