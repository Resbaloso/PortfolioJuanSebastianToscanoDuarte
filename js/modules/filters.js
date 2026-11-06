"use strict";

// ===== FILTROS DE PROYECTOS =====
// Filtra las tarjetas del carrusel según la tecnología seleccionada

export function inicializarFiltros(proyectos, funcionRender) {

    const botones = document.querySelectorAll(".filter-button");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {

            // Quito el activo de todos y se lo pongo al que clickearon
            botones.forEach(btn => btn.classList.remove("active"));
            boton.classList.add("active");

            const filtro = boton.dataset.filter;

            if (filtro === "all") {
                funcionRender(proyectos);
                return;
            }

            const proyectosFiltrados = proyectos.filter(p => p.tech === filtro);
            funcionRender(proyectosFiltrados);
        });
    });
}
