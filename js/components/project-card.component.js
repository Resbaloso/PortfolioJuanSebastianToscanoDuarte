"use strict";

const template = document.createElement("template");

template.innerHTML = `

<style>

:host{

    min-width:350px;
    max-width:350px;
}

.card{

    height:100%;

    padding:2rem;

    background:rgba(255,255,255,.08);

    backdrop-filter:blur(18px);

    border:1px solid rgba(255,255,255,.15);

    border-radius:24px;

    color:white;

    transition:.3s;
}

.card:hover{

    transform:translateY(-8px);
}

h3{

    margin-bottom:1rem;
}

.tags{

    display:flex;
    flex-wrap:wrap;
    gap:.5rem;

    margin:1rem 0;
}

.tag{

    padding:.4rem .8rem;

    border-radius:999px;

    background:
    rgba(0,102,255,.2);
}

a{

    display:inline-block;

    margin-top:1rem;

    color:white;
}

</style>

<div class="card">

    <h3 id="title"></h3>

    <p id="description"></p>

    <div class="tags" id="tags"></div>

    <a id="githubLink" target="_blank">
        Ver Repositorio
    </a>

</div>

`;

export class ProjectCard extends HTMLElement {

    constructor() {

        super();

        this.attachShadow({ mode: "open" });

        this.shadowRoot.appendChild(
            template.content.cloneNode(true)
        );
    }

    connectedCallback() {

        this.render();
    }

    render() {

        const title =
            this.getAttribute("title");

        const description =
            this.getAttribute("description");

        const github =
            this.getAttribute("github");

        const stack =
            JSON.parse(
                this.getAttribute("stack")
            );

        this.shadowRoot
            .getElementById("title")
            .textContent = title;

        this.shadowRoot
            .getElementById("description")
            .textContent = description;

        this.shadowRoot
            .getElementById("githubLink")
            .href = github;

        const tagsContainer =
            this.shadowRoot.getElementById("tags");

        stack.forEach(technology => {

            const tag =
                document.createElement("span");

            tag.classList.add("tag");

            tag.textContent = technology;

            tagsContainer.appendChild(tag);
        });
    }
}

customElements.define(
    "project-card",
    ProjectCard
);