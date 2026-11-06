"use strict";

// ===== PUNTO DE ENTRADA DEL PORTAFOLIO =====
// Aquí importo todos los módulos y los inicializo cuando el DOM está listo

import "./components/project-card.component.js";

import { projectsData } from "./data/projects.data.js";
import { cargarProyectos } from "./utils/callbacks.js";

import { renderizarProyectos, inicializarCarrusel } from "./modules/carousel.js";
import { inicializarFiltros } from "./modules/filters.js";
import { inicializarNavbar } from "./modules/navbar.js";
import { inicializarEventosContacto } from "./modules/contact-events.js";
import { activarEfectoFondo } from "./modules/background-effects.js";
import { inicializarAnimacionOrbs } from "./modules/orbs.js";
import { inicializarWhiteys } from "./modules/whiteys.js";

import {
    inicializarAnimacionesScroll,
    inicializarContadores,
    inicializarBarraProgreso,
    inicializarEfectoTitulo,
    inicializarBarrasHabilidades,
    inicializarNavbarScroll
} from "./modules/scroll-animations.js";


document.addEventListener("DOMContentLoaded", () => {

    // Navbar y menú hamburger
    inicializarNavbar();

    // Efecto del botón de GitHub
    inicializarEventosContacto();

    // Orbs animados del fondo
    inicializarAnimacionOrbs();

    // Muñecos decorativos
    inicializarWhiteys();

    // Animaciones al hacer scroll
    inicializarAnimacionesScroll();

    // Contadores numéricos
    inicializarContadores();

    // Barrita de progreso de lectura
    inicializarBarraProgreso();

    // Brillo en el título del hero
    inicializarEfectoTitulo();

    // Barras de habilidades
    inicializarBarrasHabilidades();

    // Navbar que cambia al hacer scroll
    inicializarNavbarScroll();

    // Efecto de escritura en el badge
    efectoEscritura();

    // Resaltar el link activo según la sección visible
    navLinkActivo();

    // Cargo y renderizo los proyectos (simulando un fetch)
    cargarProyectos(proyectos => {
        renderizarProyectos(proyectos);
        inicializarCarrusel();
        inicializarFiltros(proyectos, renderizarProyectos);
    });

});

// Cuando hacen click en GitHub se activa el efecto de fondo
document.addEventListener("github-selected", () => {
    activarEfectoFondo();
});


// ===== EFECTO DE ESCRITURA EN EL BADGE =====
// El texto del badge cambia solo, como si lo estuvieran escribiendo

function efectoEscritura() {

    const badge = document.querySelector(".hero__badge-text");
    if (!badge) return;

    const textos = [
        "Junior Backend Developer",
        "Java & Python Developer",
        "Apasionado por el código"
    ];

    let indiceTexto = 0;
    let indiceChar = 0;
    let borrando = false;
    let pausado = false;

    function escribir() {

        const textoActual = textos[indiceTexto];

        if (pausado) {
            setTimeout(escribir, 1500);
            pausado = false;
            return;
        }

        if (!borrando) {
            badge.textContent = textoActual.substring(0, indiceChar + 1);
            indiceChar++;

            if (indiceChar === textoActual.length) {
                borrando = true;
                pausado = true;
            }

        } else {
            badge.textContent = textoActual.substring(0, indiceChar - 1);
            indiceChar--;

            if (indiceChar === 0) {
                borrando = false;
                indiceTexto = (indiceTexto + 1) % textos.length;
            }
        }

        setTimeout(escribir, borrando ? 40 : 80);
    }

    escribir();
}


// ===== LINK ACTIVO EN LA NAVBAR =====
// Resalta el link del menú correspondiente a la sección que se está viendo

function navLinkActivo() {

    const secciones = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".navbar__menu a");

    if (!secciones.length || !links.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            links.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        });
    }, { threshold: 0.4 });

    secciones.forEach(seccion => observer.observe(seccion));
}
