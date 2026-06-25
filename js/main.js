// js/main.js

// ==========================================================================
// 1. BASE DE DATOS LOCAL SIMULADA (Mapeo de requerimientos)
// ==========================================================================
const dbProjects = [
    {
        title: "RutaSeguraKids",
        description: "Sistema inteligente para monitorear y organizar rutas escolares en tiempo real. Asocia alumnos y usa consumo de APIs.",
        tech: "HTML / CSS / JS",
        category: "Vanilla JS",
        repo: "https://github.com/JuanSebastianToscano"
    },
    {
        title: "MercadoEsclavo",
        description: "Catálogo dinámico con WebComponents que inyecta artículos desde un formulario sin recargar la página.",
        tech: "HTML / CSS / JS",
        category: "Vanilla JS",
        repo: "https://github.com/JuanSebastianToscano"
    },
    {
        title: "Patitas Felices",
        description: "Web responsive para fundación animal con landing page y catálogo interactivo de adopción.",
        tech: "HTML / CSS",
        category: "HTML/CSS",
        repo: "https://github.com/JuanSebastianToscano"
    },
    {
        title: "Metrolínea+",
        description: "Propuesta de transporte público. Abstracción de requerimientos con despacho dinámico mediante IA y GPS.",
        tech: "Arquitectura / Datos",
        category: "Otros",
        repo: "https://github.com/JuanSebastianToscano"
    },
    {
        title: "Herramientas y Préstamos",
        description: "App backend para gestionar el inventario y préstamos de una junta de acción comunal leyendo y escribiendo archivos .json.",
        tech: "Python / JSON",
        category: "Python",
        repo: "https://github.com/JuanSebastianToscano"
    }
];

// ==========================================================================
// 2. FETCH DATA (Simulando asincronía de consumo de API)
// ==========================================================================
const fetchProjectData = async () => {
    return new Promise((resolve, reject) => {
        try {
            // Simulamos un delay de red de 300ms
            setTimeout(() => {
                resolve(dbProjects);
            }, 300);
        } catch (error) {
            console.error("Data not found", error);
            reject(error);
        }
    });
};

// ==========================================================================
// 3. LÓGICA DEL CARRUSEL Y RENDERIZADO
// ==========================================================================
const DOM = {
    track: document.getElementById('carouselTrack'),
    filters: document.querySelector('.carousel-filters'),
    prevBtn: document.querySelector('.prev'),
    nextBtn: document.querySelector('.next'),
    githubCard: document.getElementById('github-card'),
    bgBlobs: document.querySelectorAll('.blob')
};

let currentScrollPosition = 0;

const renderProjects = (projectsArray) => {
    DOM.track.innerHTML = ''; // Limpieza del contenedor
    
    projectsArray.forEach(proj => {
        const cardNode = document.createElement('project-card');
        cardNode.setAttribute('title', proj.title);
        cardNode.setAttribute('description', proj.description);
        cardNode.setAttribute('tech', proj.tech);
        cardNode.setAttribute('repo-link', proj.repo);
        DOM.track.appendChild(cardNode);
    });
    
    resetCarousel();
};

const moveCarousel = (direction) => {
    // Calculamos el ancho de la tarjeta dinámicamente + el gap (32px / 2rem)
    const firstCard = DOM.track.firstElementChild;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 32; 
    const maxScroll = DOM.track.scrollWidth - DOM.track.parentElement.offsetWidth;

    currentScrollPosition += direction * cardWidth;

    // Límites del carrusel
    if (currentScrollPosition < 0) currentScrollPosition = 0;
    if (currentScrollPosition > maxScroll) currentScrollPosition = maxScroll;

    DOM.track.style.transform = `translateX(-${currentScrollPosition}px)`;
};

const resetCarousel = () => {
    currentScrollPosition = 0;
    DOM.track.style.transform = `translateX(0px)`;
};

// ==========================================================================
// 4. SISTEMA DE FILTROS (Manejo del DOM)
// ==========================================================================
const handleFilters = async (event) => {
    if (!event.target.classList.contains('filter-btn')) return;

    // Actualización de estado visual de los botones
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const filterTarget = event.target.getAttribute('data-filter');
    const allData = await fetchProjectData();

    // Lógica de filtrado usando array methods
    const filteredData = filterTarget === 'all' 
        ? allData 
        : allData.filter(proj => proj.category === filterTarget || proj.tech.includes(filterTarget));

    renderProjects(filteredData);
};

// ==========================================================================
// 5. CUSTOM EVENTS (Comunicación entre secciones Liquid Glass)
// ==========================================================================
const setupCustomEvents = () => {
    // Disparadores (Dispatchers)
    DOM.githubCard.addEventListener('mouseenter', () => {
        const energyEvent = new CustomEvent('app:energySurge', {
            detail: { blur: '40px', opacity: '0.8', scale: '1.2' }
        });
        document.dispatchEvent(energyEvent);
    });

    DOM.githubCard.addEventListener('mouseleave', () => {
        const energyCalm = new CustomEvent('app:energyCalm');
        document.dispatchEvent(energyCalm);
    });

    // Escuchadores (Listeners)
    document.addEventListener('app:energySurge', (e) => {
        DOM.bgBlobs.forEach(blob => {
            blob.style.transition = 'all 0.5s ease-out';
            blob.style.filter = `blur(${e.detail.blur}) brightness(1.5)`;
            blob.style.opacity = e.detail.opacity;
            blob.style.transform = `scale(${e.detail.scale})`;
        });
    });

    document.addEventListener('app:energyCalm', () => {
        DOM.bgBlobs.forEach(blob => {
            blob.style.transition = 'all 1s ease-in';
            blob.style.filter = 'blur(80px) brightness(1)';
            blob.style.opacity = '0.4';
            blob.style.transform = 'scale(1)';
        });
    });
};

// ==========================================================================
// 6. INICIALIZADOR DE LA APLICACIÓN
// ==========================================================================
const initApp = async () => {
    try {
        // Carga y renderizado inicial
        const initialProjects = await fetchProjectData();
        renderProjects(initialProjects);

        // Bindings de Eventos
        DOM.filters.addEventListener('click', handleFilters);
        DOM.prevBtn.addEventListener('click', () => moveCarousel(-1));
        DOM.nextBtn.addEventListener('click', () => moveCarousel(1));

        // Inicializar interactividad avanzada
        setupCustomEvents();
        
    } catch (error) {
        DOM.track.innerHTML = '<p style="color: red;">Error cargando los proyectos.</p>';
    }
};

// Arrancar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);