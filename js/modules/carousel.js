"use strict";

// ===== CARRUSEL DE PROYECTOS =====
// Mueve las tarjetas automáticamente y lo pausa al hacer hover

let animationId;
let posicion = 0;
const velocidad = 0.4;

let track;
let wrapper;

export function renderizarProyectos(proyectos) {

    track = document.getElementById("projectsContainer");
    if (!track) return;

    track.innerHTML = "";

    // Lo duplico para crear el efecto de loop infinito
    [...proyectos, ...proyectos].forEach(proyecto => {
        track.appendChild(crearTarjetaProyecto(proyecto));
    });
}

function crearTarjetaProyecto(proyecto) {

    const card = document.createElement("project-card");

    card.setAttribute("title", proyecto.title);
    card.setAttribute("description", proyecto.description);
    card.setAttribute("github", proyecto.github);
    card.setAttribute("stack", JSON.stringify(proyecto.stack));

    if (proyecto.featured) {
        card.setAttribute("featured", "true");
    }

    return card;
}

function animar() {

    posicion += velocidad;

    // Cuando llega a la mitad, reinicio la posición para que el loop sea invisible
    const puntoLoop = track.scrollWidth / 2;
    if (posicion >= puntoLoop) {
        posicion = 0;
    }

    track.style.transform = `translateX(-${posicion}px)`;
    animationId = requestAnimationFrame(animar);
}

export function inicializarCarrusel() {

    wrapper = document.querySelector(".carousel-wrapper");
    if (!wrapper) return;

    cancelAnimationFrame(animationId);
    animar();

    // Pauso cuando el mouse está encima
    wrapper.addEventListener("mouseenter", () => cancelAnimationFrame(animationId));
    wrapper.addEventListener("mouseleave", () => animar());

    // Soporte táctil para celular
    let touchStartX = 0;

    wrapper.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        cancelAnimationFrame(animationId);
    }, { passive: true });

    wrapper.addEventListener("touchend", (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 10) posicion += diff;
        animar();
    }, { passive: true });
}
