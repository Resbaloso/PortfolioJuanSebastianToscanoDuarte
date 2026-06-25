# Portafolio Personal - Juan Sebastián Toscano Duarte 💼✨

Tecnologías y Lenguajes: HTML5, CSS3 y JavaScript Vanilla (ES Modules, Web Components y Custom Events) 🚀🔥

## Descripción: 😉

Este proyecto corresponde a mi portafolio profesional como desarrollador de software. Fue diseñado para presentar de forma elegante, moderna e interactiva mis habilidades técnicas, experiencia académica, proyectos destacados y medios de contacto.

La aplicación implementa una interfaz inspirada en el diseño **Glassmorphism**, combinada con efectos visuales dinámicos, arquitectura modular en JavaScript y componentes reutilizables. Todo el contenido se renderiza de forma estructurada para ofrecer una experiencia fluida tanto en dispositivos de escritorio como móviles.

## ¿Qué soluciona? 🤨

En lugar de depender de documentos estáticos o perfiles dispersos en distintas plataformas, este portafolio centraliza mi información profesional en una única aplicación web moderna.

Permite a reclutadores, empresas, docentes y colaboradores potenciales:

* Conocer mi perfil profesional.
* Explorar proyectos desarrollados.
* Visualizar las tecnologías que manejo.
* Acceder rápidamente a mis redes y repositorios.
* Contactarme de manera sencilla.

## Funcionamiento y estructura: 😃

El proyecto fue desarrollado siguiendo principios de modularidad y separación de responsabilidades, permitiendo que cada archivo gestione una funcionalidad específica del sistema.

### index.html

Contiene la estructura principal de la aplicación y organiza las diferentes secciones del portafolio:

* **Hero:** Presentación personal y descripción profesional.
* **Trayectoria:** Información académica, habilidades y experiencia.
* **Portafolio:** Carrusel dinámico de proyectos destacados.
* **Contacto:** Tarjetas de acceso rápido a GitHub, LinkedIn y correo electrónico.
* **Footer:** Información adicional y enlaces externos.

---

### style.css

Define completamente la identidad visual de la aplicación.

Incluye:

* Diseño Glassmorphism mediante `backdrop-filter`.
* Sistema de variables CSS para mantener consistencia visual.
* Gradientes dinámicos y fondos interactivos.
* Animaciones suaves para tarjetas y botones.
* Media Queries optimizadas para dispositivos móviles y tabletas.
* Sistema de capas mediante variables `z-index`.

---

### /js/app.js

Es el punto de entrada principal de la aplicación.

Se encarga de:

1. Inicializar el menú de navegación.
2. Cargar los proyectos dinámicamente.
3. Configurar el carrusel de proyectos.
4. Inicializar los filtros de categorías.
5. Gestionar los eventos de contacto.
6. Registrar los Custom Events globales.

---

### /js/components/project-card.component.js

Define el Web Component personalizado:

```html
<project-card>
```

Cada proyecto se encapsula mediante Shadow DOM para aislar completamente su estructura y estilos del resto de la aplicación.

Este componente recibe propiedades dinámicamente y renderiza:

* Nombre del proyecto.
* Descripción.
* Tecnologías utilizadas.
* Enlace al repositorio.

---

### /js/modules/carousel.js

Gestiona el carrusel infinito de proyectos.

Implementa:

* Renderizado dinámico de tarjetas.
* Duplicación automática de elementos para lograr efecto infinito.
* Animación continua utilizando `requestAnimationFrame()`.
* Pausa automática al posicionar el cursor sobre el carrusel.
* Movimiento fluido optimizado para alto rendimiento.

---

### /js/modules/filters.js

Permite filtrar proyectos según la tecnología utilizada.

Actualmente soporta categorías como:

* Todos
* Python
* JavaScript
* HTML/CSS

Los resultados se actualizan dinámicamente sin necesidad de recargar la página.

---

### /js/modules/navbar.js

Controla la navegación responsive.

Incluye:

* Menú hamburguesa para dispositivos móviles.
* Apertura y cierre dinámico del menú.
* Animación de transformación del icono hamburguesa.
* Cierre automático al seleccionar una opción.

---

### /js/modules/contact-events.js

Gestiona las acciones de interacción de las tarjetas de contacto.

Permite:

* Abrir enlaces externos.
* Navegar a perfiles profesionales.
* Ejecutar eventos personalizados para enriquecer la experiencia visual.

---

### /js/modules/background-effects.js

Controla los efectos visuales dinámicos del fondo.

Utiliza eventos personalizados para producir respuestas visuales cuando el usuario interactúa con elementos específicos del sitio.

---

### /js/data/projects.data.js

Centraliza la información de los proyectos.

Cada proyecto se almacena como un objeto con la siguiente estructura:

```javascript
{
    title: "",
    description: "",
    github: "",
    stack: []
}
```

Esto facilita la escalabilidad y mantenimiento del portafolio.

## Características destacadas 🌟

* Arquitectura modular basada en ES Modules.
* Uso de Web Components y Shadow DOM.
* Diseño Glassmorphism moderno.
* Carrusel infinito implementado con requestAnimationFrame().
* Filtros dinámicos de proyectos.
* Responsive Design para dispositivos móviles y escritorio.
* Animaciones suaves optimizadas para rendimiento.
* Código organizado siguiendo principios de mantenibilidad y reutilización.

## Tecnologías utilizadas 🛠️

| Tecnología            | Uso                       |
| --------------------- | ------------------------- |
| HTML5                 | Estructura semántica      |
| CSS3                  | Diseño y estilos          |
| JavaScript ES6+       | Lógica e interactividad   |
| Web Components        | Componentes reutilizables |
| Shadow DOM            | Encapsulación visual      |
| Custom Events         | Comunicación desacoplada  |
| requestAnimationFrame | Animaciones optimizadas   |

## Información de contacto 🧑🏻‍💻✨

## 🔵🔵 Autor: (￣︶￣*) 🔵🔵

Resbaloso

## 🔵🔵 Contacto: （づ￣3￣）づ╭～ 🔵🔵

juansetoscano@gmail.com

░░░░░░░░░░░░░░░░░░░░░░█████████░░░░░░░░░
░░███████░░░░░░░░░░███▒▒▒▒▒▒▒▒███░░░░░░░
░░█▒▒▒▒▒▒█░░░░░░░███▒▒▒▒▒▒▒▒▒▒▒▒▒███░░░░
░░░█▒▒▒▒▒▒█░░░░██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░
░░░░█▒▒▒▒▒█░░░██▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒███░
░░░░░█▒▒▒█░░░█▒▒▒▒▒▒████▒▒▒▒████▒▒▒▒▒▒██
░░░█████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
░░░█▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒██
░██▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██
██▒▒▒███████████▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒██
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒████████▒▒▒▒▒▒▒██
██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░
░█▒▒▒███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██░░░
░██▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░░░░░
░░████████████░░░█████████████████░░░░░░
