"use strict";

import { projectsData } from "../data/projects.data.js";

// Simula una carga asíncrona de proyectos (como si fuera un fetch)
export function cargarProyectos(callback) {
    setTimeout(() => {
        callback(projectsData);
    }, 1000);
}
