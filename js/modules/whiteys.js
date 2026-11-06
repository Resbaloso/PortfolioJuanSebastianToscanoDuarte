"use strict";

// ===== MUÑECOS WHITEY =====
// Los muñecos especiales (Cinco y Samco) cambian a su estado "Walking"
// cuando se les pasa el ratón encima y vuelven a "Idle" al salir

export function inicializarWhiteys() {

    activarEspeciales();
    activarReboteIdle();
}

// ===== Especiales: swap Idle ↔ Walking =====

function activarEspeciales() {

    const especiales = document.querySelectorAll(".whitey-char--special");

    especiales.forEach(contenedor => {

        const img = contenedor.querySelector(".whitey-char__img");
        const srcIdle = contenedor.dataset.idle;
        const srcWalking = contenedor.dataset.walking;

        if (!img || !srcIdle || !srcWalking) return;

        // Precargo la imagen de walking para que no haya flash en el primer hover
        const precarga = new Image();
        precarga.src = srcWalking;

        contenedor.addEventListener("mouseenter", () => {
            cambiarImagen(img, srcWalking);
            contenedor.classList.add("is-walking");
        });

        contenedor.addEventListener("mouseleave", () => {
            cambiarImagen(img, srcIdle);
            contenedor.classList.remove("is-walking");
        });
    });
}

// Hace un fade-out, cambia la imagen y hace fade-in
function cambiarImagen(imgEl, nuevaSrc) {

    if (imgEl.src.endsWith(nuevaSrc.replace("./", ""))) return;

    imgEl.style.transition = "opacity 0.18s ease";
    imgEl.style.opacity = "0";

    setTimeout(() => {
        imgEl.src = nuevaSrc;
        imgEl.style.opacity = "1";
    }, 180);
}

// ===== Rebote idle: desfasa la animación de cada muñeco =====

function activarReboteIdle() {

    const muñecos = document.querySelectorAll(".whitey-char");

    muñecos.forEach((muñeco, i) => {
        muñeco.style.animationDelay = `${i * 600}ms`;
    });
}
