"use strict";

// ===== ANIMACIÓN DE ORBS DEL FONDO =====
// Cada orb se mueve de forma independiente con su propio ritmo
// El tercer orb (orb-mouse) sigue el cursor del usuario suavemente

// Configuración de cada orb: rango de movimiento, duración y pulso
const configOrbs = [
    { selector: ".orb-1", rangoX: 40, rangoY: 50, duracion: 18000, pulso: 1.12, delay: 0 },
    { selector: ".orb-2", rangoX: 35, rangoY: 45, duracion: 22000, pulso: 1.08, delay: 3000 },
    { selector: ".orb-3", rangoX: 50, rangoY: 30, duracion: 16000, pulso: 1.15, delay: 6000 }
];

// Función de suavizado para que el movimiento no sea lineal
function suavizarMovimiento(t) {
    return -(Math.cos(Math.PI * t) - 1) / 2;
}

function animarOrb(el, config) {

    let tiempoInicio = null;
    let progreso = 0;

    function paso(timestamp) {

        if (!tiempoInicio) tiempoInicio = timestamp - config.delay;

        const transcurrido = (timestamp - tiempoInicio) % (config.duracion * 2);
        progreso = transcurrido / config.duracion;

        // Va de 0 a 1 y vuelve de 1 a 0 para que el movimiento sea un ciclo
        if (progreso > 1) progreso = 2 - progreso;

        const progresoSuave = suavizarMovimiento(progreso);
        const offsetX = (progresoSuave - 0.5) * config.rangoX * 2;
        const offsetY = Math.sin(progresoSuave * Math.PI * 2) * config.rangoY;

        // Pulsación de escala para que "respire"
        const pulsacion = Math.sin((timestamp / (config.duracion * 0.5)) * Math.PI);
        const escala = 1 + (config.pulso - 1) * 0.5 * (1 + pulsacion);

        el.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${escala})`;

        requestAnimationFrame(paso);
    }

    setTimeout(() => requestAnimationFrame(paso), config.delay);
}

export function inicializarAnimacionOrbs() {

    configOrbs.forEach(config => {
        const el = document.querySelector(config.selector);
        if (!el) return;

        // Le quito la animación de CSS para controlarla con JS
        el.style.animation = "none";
        animarOrb(el, config);
    });

    seguirCursor();
}

// El orb-mouse sigue el cursor con un efecto lerp (interpolación lineal)
function seguirCursor() {

    const orbMouse = document.querySelector(".orb-mouse");
    if (!orbMouse) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    document.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function mover() {
        // Lerp: me acerco un 4% al objetivo cada frame, da el efecto suave
        currentX += (targetX - currentX) * 0.04;
        currentY += (targetY - currentY) * 0.04;

        orbMouse.style.left = `${currentX - 150}px`;
        orbMouse.style.top = `${currentY - 150}px`;

        requestAnimationFrame(mover);
    }

    requestAnimationFrame(mover);
}
