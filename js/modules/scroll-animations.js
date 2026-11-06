"use strict";

// ===== ANIMACIONES DE SCROLL =====
// Revela elementos cuando entran al viewport usando IntersectionObserver

// Qué clase "revealed" le toca a cada clase "reveal"
const clasesAnimacion = {
    "reveal-up":    "revealed-up",
    "reveal-left":  "revealed-left",
    "reveal-right": "revealed-right",
    "reveal-fade":  "revealed-fade",
    "stagger-item": "revealed-up"
};

export function inicializarAnimacionesScroll() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const delay = el.dataset.staggerDelay || 0;

            // Aplico el delay para los elementos escalonados
            setTimeout(() => {
                Object.keys(clasesAnimacion).forEach(claseBase => {
                    if (el.classList.contains(claseBase)) {
                        el.classList.add(clasesAnimacion[claseBase]);
                    }
                });
            }, delay);

            observer.unobserve(el);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
    });

    const elementos = document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right, .reveal-fade, .stagger-item"
    );

    elementos.forEach(el => {
        // Calculo el delay automático para los stagger items del mismo padre
        if (el.classList.contains("stagger-item") && !el.dataset.staggerDelay) {
            const hermanos = el.parentElement.querySelectorAll(".stagger-item");
            const indice = Array.from(hermanos).indexOf(el);
            el.dataset.staggerDelay = indice * 100;
        }
        observer.observe(el);
    });
}

// ===== CONTADORES ANIMADOS =====
// Los números suben desde 0 hasta el valor objetivo cuando entran en pantalla

export function inicializarContadores() {

    const contadores = document.querySelectorAll(".counter");
    if (!contadores.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const objetivo = parseInt(el.dataset.target, 10);
            const duracion = 1800;
            const inicio = performance.now();

            function actualizar(ahora) {
                const transcurrido = ahora - inicio;
                const progreso = Math.min(transcurrido / duracion, 1);

                // Easing cúbico para que desacelere al final
                const progresoSuave = 1 - Math.pow(1 - progreso, 3);
                el.textContent = Math.floor(progresoSuave * objetivo);

                if (progreso < 1) {
                    requestAnimationFrame(actualizar);
                } else {
                    el.textContent = objetivo;
                }
            }

            requestAnimationFrame(actualizar);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    contadores.forEach(c => observer.observe(c));
}

// ===== BARRA DE PROGRESO DE LECTURA =====
// La barrita azul de arriba que muestra cuánto has scrolleado

export function inicializarBarraProgreso() {

    const barra = document.querySelector(".reading-progress");
    if (!barra) return;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
        const progreso = alturaTotal > 0 ? (scrollTop / alturaTotal) * 100 : 0;
        barra.style.width = `${progreso}%`;
    }, { passive: true });
}

// ===== EFECTO DE BRILLO EN EL TÍTULO =====

export function inicializarEfectoTitulo() {

    const titulo = document.querySelector(".hero__title");
    if (!titulo) return;

    titulo.addEventListener("mouseenter", () => titulo.classList.add("text-glow"));
    titulo.addEventListener("mouseleave", () => titulo.classList.remove("text-glow"));
}

// ===== BARRAS DE HABILIDADES =====
// Se animan cuando la sección de skills entra en pantalla

export function inicializarBarrasHabilidades() {

    const barras = document.querySelectorAll(".skill-item__fill");
    if (!barras.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("animated");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    barras.forEach(barra => observer.observe(barra));
}

// ===== NAVBAR CON EFECTO SCROLL =====
// Le agrego la clase "scrolled" cuando el usuario baja más de 60px

export function inicializarNavbarScroll() {

    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    let corriendo = false;

    window.addEventListener("scroll", () => {
        if (!corriendo) {
            requestAnimationFrame(() => {
                navbar.classList.toggle("scrolled", window.scrollY > 60);
                corriendo = false;
            });
            corriendo = true;
        }
    }, { passive: true });
}
