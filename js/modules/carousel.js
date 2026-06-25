"use strict";

let animationId;
let position = 0;
let speed = 0.35;

let track;
let wrapper;

export const renderProjects = projects => {

    track =
        document.getElementById(
            "projectsContainer"
        );

    track.innerHTML = "";

    projects.forEach(project => {

        track.appendChild(
            createProjectCard(project)
        );

    });

    projects.forEach(project => {

        track.appendChild(
            createProjectCard(project)
        );

    });

};

function createProjectCard(project){

    const card =
        document.createElement(
            "project-card"
        );

    card.setAttribute(
        "title",
        project.title
    );

    card.setAttribute(
        "description",
        project.description
    );

    card.setAttribute(
        "github",
        project.github
    );

    card.setAttribute(
        "stack",
        JSON.stringify(
            project.stack
        )
    );

    return card;
}

function animate(){

    position += speed;

    const loopPoint =
        track.scrollWidth / 2;

    if(position >= loopPoint){

        position = 0;
    }

    track.style.transform =
        `translateX(-${position}px)`;

    animationId =
        requestAnimationFrame(
            animate
        );
}

export const initializeCarousel = () => {

    wrapper =
        document.querySelector(
            ".carousel-wrapper"
        );

    cancelAnimationFrame(
        animationId
    );

    animate();

    wrapper.addEventListener(
        "mouseenter",
        () => {

            cancelAnimationFrame(
                animationId
            );

        }
    );

    wrapper.addEventListener(
        "mouseleave",
        () => {

            animate();

        }
    );

};