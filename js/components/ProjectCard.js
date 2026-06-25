// js/components/ProjectCard.js

class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Proyecto Desconocido';
        const description = this.getAttribute('description') || 'Sin descripción detallada.';
        const tech = this.getAttribute('tech') || 'Tecnologías Múltiples';
        const repoLink = this.getAttribute('repo-link') || '#';

        // Inyección dinámica con encapsulamiento de estilos Liquid Glass
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 1.8rem;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
                    box-sizing: border-box;
                    height: 100%;
                }
                :host(:hover) {
                    transform: translateY(-8px);
                    background: rgba(255, 255, 255, 0.06);
                    border-color: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
                .card-header {
                    margin-bottom: 1rem;
                }
                h3 {
                    color: #00d2ff;
                    margin: 0 0 0.5rem 0;
                    font-size: 1.4rem;
                    font-family: 'Segoe UI', sans-serif;
                }
                .tech-tag {
                    display: inline-block;
                    background: rgba(0, 82, 255, 0.15);
                    color: #ffffff;
                    padding: 0.2rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    border: 1px solid rgba(0, 210, 255, 0.3);
                    font-weight: 500;
                }
                p {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.95rem;
                    line-height: 1.5;
                    flex-grow: 1;
                    margin: 0 0 1.5rem 0;
                    font-family: 'Segoe UI', sans-serif;
                }
                .repo-btn {
                    display: block;
                    text-align: center;
                    padding: 0.8rem;
                    border-radius: 12px;
                    background: #0052ff;
                    color: #ffffff;
                    text-decoration: none;
                    font-weight: 600;
                    font-family: 'Segoe UI', sans-serif;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }
                .repo-btn:hover {
                    background: #00d2ff;
                    color: #05070f;
                    box-shadow: 0 4px 15px rgba(0, 210, 255, 0.4);
                }
            </style>
            
            <div class="card-header">
                <h3>${title}</h3>
                <span class="tech-tag">${tech}</span>
            </div>
            <p>${description}</p>
            <a href="${repoLink}" class="repo-btn" target="_blank" rel="noopener noreferrer">Ver Repositorio</a>
        `;
    }
}

// Registro del Web Component
customElements.define("project-card", ProjectCard);