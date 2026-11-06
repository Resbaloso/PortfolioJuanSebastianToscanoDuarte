"use strict";

// ===== WEB COMPONENT: PROJECT-CARD =====
// Tarjeta de proyecto para el carrusel del portafolio

const template = document.createElement("template");

template.innerHTML = `
<style>

:host {
    min-width: 340px;
    max-width: 340px;
    display: block;
}

.card {
    height: 100%;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 24px;
    color: white;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

/* Línea de brillo en la parte superior al hacer hover */
.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #0066ff, #4da3ff, #0066ff);
    background-size: 200% 100%;
    animation: shimmer 3s linear infinite;
    opacity: 0;
    transition: opacity 0.35s ease;
}

.card:hover::before {
    opacity: 1;
}

@keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 102, 255, 0.3);
    border-color: rgba(0, 102, 255, 0.4);
}

.card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
}

h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    flex: 1;
}

.badge-destacado {
    display: none;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 700;
    background: linear-gradient(135deg, #0066ff, #4da3ff);
    color: white;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
}

:host([featured="true"]) .badge-destacado {
    display: inline-block;
}

p {
    font-size: 0.9rem;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.75);
    flex: 1;
    margin: 0;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.25rem;
}

.tag {
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    background: rgba(0, 102, 255, 0.18);
    border: 1px solid rgba(0, 102, 255, 0.3);
    font-size: 0.75rem;
    font-weight: 500;
    color: #a8cfff;
    transition: background 0.2s ease;
}

.tag:hover {
    background: rgba(0, 102, 255, 0.35);
}

.card__footer {
    margin-top: auto;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #6ab0ff;
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease, gap 0.2s ease;
}

a:hover {
    color: #ffffff;
    gap: 0.75rem;
}

a svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

</style>

<div class="card">

    <div class="card__header">
        <h3 id="titulo"></h3>
        <span class="badge-destacado">Destacado</span>
    </div>

    <p id="descripcion"></p>

    <div class="tags" id="tags"></div>

    <div class="card__footer">
        <a id="linkGithub" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            Ver Repositorio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
            </svg>
        </a>
    </div>

</div>
`;

class ProjectCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.renderizar();
    }

    renderizar() {

        const titulo = this.getAttribute("title");
        const descripcion = this.getAttribute("description");
        const github = this.getAttribute("github");
        const stack = JSON.parse(this.getAttribute("stack") || "[]");

        this.shadowRoot.getElementById("titulo").textContent = titulo;
        this.shadowRoot.getElementById("descripcion").textContent = descripcion;
        this.shadowRoot.getElementById("linkGithub").href = github;

        const contenedorTags = this.shadowRoot.getElementById("tags");
        contenedorTags.innerHTML = "";

        stack.forEach(tecnologia => {
            const tag = document.createElement("span");
            tag.classList.add("tag");
            tag.textContent = tecnologia;
            contenedorTags.appendChild(tag);
        });
    }
}

customElements.define("project-card", ProjectCard);
