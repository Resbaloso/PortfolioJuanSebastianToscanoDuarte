"use strict";

import "./components/project-card.component.js";

import {
    projectsData
}
from "./data/projects.data.js";

import {
    loadProjects
}
from "./utils/callbacks.js";

import {
    renderProjects,
    initializeCarousel
}
from "./modules/carousel.js";

import {
    initializeFilters
}
from "./modules/filters.js";

import {
    initializeNavbar
}
from "./modules/navbar.js";

import {
    initializeContactEvents
}
from "./modules/contact-events.js";

import {
    activateBackgroundEffect
}
from "./modules/background-effects.js";


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeNavbar();

        initializeContactEvents();

        loadProjects(
            projects => {

                renderProjects(
                    projects
                );

                initializeCarousel();

                initializeFilters(
                    projects,
                    renderProjects
                );

            }
        );

    }
);

document.addEventListener(
    "github-selected",
    () => {

        activateBackgroundEffect();

    }
);