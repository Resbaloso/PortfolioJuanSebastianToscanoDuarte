# Portafolio Personal - Juan Sebastián Toscano Duarte 💼✨

Tecnologías y Lenguajes: HTML5, CSS3 y JavaScript Vanilla (ES Modules, Web Components, Custom Events) 🚀🔥

## Descripción 😉

Este proyecto es mi portafolio profesional como Junior Backend Developer. Fue diseñado para presentar de forma elegante, moderna e interactiva mis habilidades técnicas, experiencia académica, proyectos destacados y medios de contacto.

La aplicación implementa una interfaz inspirada en el diseño **Glassmorphism**, combinada con efectos visuales dinámicos, arquitectura modular en JavaScript y componentes reutilizables. Todo el contenido se renderiza de forma estructurada para ofrecer una experiencia fluida tanto en escritorio como en móvil.

## ¿Qué soluciona? 🤨

En lugar de depender de documentos estáticos o perfiles dispersos en distintas plataformas, este portafolio centraliza mi información profesional en una única aplicación web moderna.

Permite a reclutadores, empresas, docentes y colaboradores potenciales:

* Conocer mi perfil profesional y trayectoria académica.
* Explorar proyectos desarrollados con sus tecnologías y repositorios.
* Visualizar las habilidades técnicas que manejo con indicadores de nivel.
* Acceder rápidamente a mis redes y repositorios de GitHub.
* Contactarme de manera sencilla.

## Funcionamiento y estructura 😃

El proyecto sigue principios de modularidad y separación de responsabilidades. Cada archivo gestiona una funcionalidad específica del sistema.

### index.html

Contiene la estructura principal de la aplicación y organiza las secciones del portafolio:

* **Slogan:** Sección de pantalla completa con mi frase personal y animaciones de entrada.
* **Hero:** Presentación personal, descripción profesional y estadísticas.
* **Trayectoria:** Cards de perfil con imágenes, timeline de formación académica.
* **Habilidades:** Barras de progreso por categoría (Backend, Frontend, Herramientas) y contadores animados.
* **Proyectos:** Carrusel dinámico con filtros por tecnología.
* **Contacto:** Links directos a GitHub, Instagram y correo electrónico.
* **Footer:** Información adicional y navegación rápida.

---

### css/style.css

Define completamente la identidad visual de la aplicación.

Incluye:

* Diseño Glassmorphism con `backdrop-filter` y bordes translúcidos.
* Variables CSS para mantener consistencia visual en toda la app.
* Gradientes dinámicos y fondos animados con orbs.
* Animaciones de scroll reveal con clases `reveal-up`, `reveal-left`, `reveal-right`, `reveal-fade`.
* Animaciones de los muñecos Whitey con rebote idle y estados walking.
* Sección slogan con efecto de brillo deslizante en el texto.
* Media Queries optimizadas para móvil, tablet y escritorio.
* Sistema de capas mediante variables `z-index`.

---

### js/app.js

Punto de entrada principal de la aplicación. Importa todos los módulos y los inicializa cuando el DOM está listo.

Se encarga de:

1. Inicializar el menú de navegación y el efecto scroll de la navbar.
2. Activar las animaciones de los orbs del fondo.
3. Inicializar los muñecos decorativos Whitey.
4. Configurar las animaciones de scroll reveal, contadores y barras de habilidades.
5. Cargar y renderizar los proyectos dinámicamente.
6. Configurar el carrusel con soporte táctil.
7. Inicializar los filtros de categorías.
8. Gestionar los eventos del botón de GitHub.
9. Activar el efecto de escritura (typewriter) en el badge del hero.
10. Resaltar el link activo de la navbar según la sección visible.

---

### js/components/project-card.component.js

Define el Web Component personalizado `<project-card>`.

Cada proyecto se encapsula con Shadow DOM para aislar su estructura y estilos. Recibe atributos dinámicamente y renderiza:

* Nombre del proyecto con badge "Destacado" si aplica.
* Descripción del proyecto.
* Tags de tecnologías utilizadas.
* Enlace al repositorio de GitHub.
* Línea de brillo animada al hacer hover.

---

### js/modules/carousel.js

Gestiona el carrusel infinito de proyectos.

Implementa:

* Renderizado dinámico de tarjetas con `renderizarProyectos()`.
* Duplicación automática de elementos para el efecto de loop infinito.
* Animación continua con `requestAnimationFrame()`.
* Pausa automática al pasar el cursor encima.
* Soporte táctil para dispositivos móviles.

---

### js/modules/filters.js

Permite filtrar los proyectos del carrusel según la tecnología.

Categorías disponibles:

* Todos
* Java
* Python
* JavaScript
* HTML / CSS

Los resultados se actualizan dinámicamente sin recargar la página.

---

### js/modules/navbar.js

Controla la navegación responsive.

Incluye:

* Menú hamburguesa para móvil con animación de transformación del ícono.
* Cierre automático al seleccionar una opción.

---

### js/modules/orbs.js

Anima los orbs del fondo con movimiento orgánico independiente para cada uno.

Implementa:

* Función de suavizado (`suavizarMovimiento`) para evitar movimiento lineal.
* Pulsación de escala para que los orbs "respiren".
* Orb que sigue el cursor del usuario con efecto **lerp** (interpolación lineal al 4%).
* Delay diferente por orb para que no se muevan sincronizados.

---

### js/modules/scroll-animations.js

Revela elementos cuando entran al viewport usando `IntersectionObserver`.

Incluye:

* `inicializarAnimacionesScroll()` — reveal con clases CSS y stagger automático.
* `inicializarContadores()` — números que suben animadamente con easing cúbico.
* `inicializarBarraProgreso()` — barra de lectura en la parte superior.
* `inicializarEfectoTitulo()` — brillo en el título al hacer hover.
* `inicializarBarrasHabilidades()` — barras de skills que se animan al entrar en pantalla.
* `inicializarNavbarScroll()` — navbar con efecto al hacer scroll con throttling por `requestAnimationFrame`.

---

### js/modules/whiteys.js

Controla los muñecos decorativos Whitey distribuidos por el portafolio.

* **Cinco Deluxe** y **Samco De Mayo** son los especiales: cambian de imagen `Idle` a `Walking` al hacer hover con un crossfade suave. La imagen Walking se precarga para evitar flash en el primer hover.
* **Blue**, **Purple** y **Whitey** son decorativos estáticos con rebote idle.
* El delay del rebote se escalona para que no todos animen al mismo tiempo.
* En móvil solo se muestran los dos especiales.

---

### js/modules/contact-events.js

Gestiona el evento personalizado del botón de GitHub.

Al hacer click, despacha el evento `github-selected` que activa el efecto de partículas en el fondo.

---

### js/modules/background-effects.js

Activa el efecto visual del fondo cuando el usuario interactúa con el botón de GitHub.

Genera 12 partículas de luz en posiciones aleatorias con duración y delay variables, y las elimina automáticamente al terminar la animación.

---

### js/data/projects.data.js

Centraliza la información de los proyectos. Cada proyecto tiene esta estructura:

```javascript
{
    id: 1,
    title: "NombreProyecto",
    tech: "java",           // categoría para el filtro
    stack: ["Java", "MySQL"],
    description: "...",
    github: "https://github.com/...",
    featured: true          // muestra el badge "Destacado"
}
```

---

### assets/Whiteys/

Carpeta con los personajes decorativos del portafolio:

| Archivo | Descripción |
|---|---|
| `Cinco_Deluxe_Idle.webp` | Cinco en estado reposo (especial) |
| `Cinco_Deluxe_Walking.webp` | Cinco caminando — se activa al hacer hover |
| `Samco_De_Mayo_Deluxe_Idle.webp` | Samco en estado reposo (especial) |
| `Samco_De_Mayo_Deluxe_Walking.webp` | Samco caminando — se activa al hacer hover |
| `Whitey.webp` | Whitey clásico (decorativo) |
| `Blue.webp` | Whitey azul (decorativo) |
| `Purple.webp` | Whitey morado (decorativo) |

---

## Proyectos incluidos 🗂️

| Proyecto | Tecnologías | Tipo |
|---|---|---|
| **TecnoStoreS2** | Java 17, MySQL, JDBC, Maven, MVC | ⭐ Destacado |
| **RutaSeguraKids** | HTML, CSS, JavaScript | ⭐ Destacado |
| **MercadoEsclavo** | HTML, CSS, JavaScript, Web Components | — |
| **Patitas Felices** | HTML, CSS | — |
| **Herramientas y Préstamos** | Python, JSON | — |

---

## Características destacadas 🌟

* Arquitectura modular basada en ES Modules.
* Web Components con Shadow DOM y atributos dinámicos.
* Diseño Glassmorphism moderno con variables CSS.
* Carrusel infinito con `requestAnimationFrame()` y soporte táctil.
* Animaciones de scroll reveal con `IntersectionObserver`.
* Orbs animados con lerp suavizado y seguimiento del cursor.
* Muñecos decorativos interactivos con swap de imagen al hover.
* Efecto typewriter en el badge del hero.
* Barras de habilidades animadas por categoría.
* Responsive Design completo para móvil, tablet y escritorio.
* Código en español con comentarios coloquiales y directos.

---

## Tecnologías utilizadas 🛠️

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica |
| CSS3 | Diseño, Glassmorphism, animaciones |
| JavaScript ES6+ | Lógica e interactividad |
| Web Components | Componente project-card reutilizable |
| Shadow DOM | Encapsulación de estilos por tarjeta |
| Custom Events | Comunicación desacoplada entre módulos |
| IntersectionObserver | Scroll reveal y contadores animados |
| requestAnimationFrame | Carrusel, orbs y animaciones de alta performance |

---

## Información de contacto 🧑🏻‍💻✨

## 🔵🔵 Autor: (￣︶￣*) 🔵🔵

Resbaloso

## 🔵🔵 Contacto: （づ￣3￣）づ╭～ 🔵🔵

juansetoscano@gmail.com

```
                                            *++==+                                              

                                    #*===----=+==++*#                                           

                               *+------:----:-===++++++**    #  *++                             

                           #*=::::------::::::-=+====-----++==+++****                           

                        +-::---::::::::--::::::-==-===------===-++****                          

                      *-:::::::-:::--:::-----::=--------==-----=++++***#                        

                #*  *=:.........::::::::::------=------=------:=-+++***+*#                      

              *+=--:::.::.....:::::::::::-:----------==--------=++++++++++**#                   

          *++*:.::.::::::..:::..:::--::::-:-------==--==----=-=====+++++++++*#*                 

         #+::-:......:::..::::::::-----:------:--:::-======-======++++++++=++++*                

         +:.:::....::.:::.::::.::----------:::::-----==++++========+++++=====++**#              

       *=-:::...............::..:::-----:--:-----===-:-=====--=======+++=====++++**             

       =::............::....::::::::::::--:------===---====-=:=-==-=========++++++***           

    **=:......................::.:::::::-::--=---===----------------------====++++++++***       

     *:....................:::.:.::::---------=---#%+==-------------------=====++++++++**       

    *......................::::.::::::-----=+%%=--=+%%%%#+===-=--=-----------==+++++++++*       

   +.......................:.::::::-:-:---*%%%%%%+-+%%=#%%%%#+===------------===+++++++++*      

  +:.....................::.:.::------=*#%%%+=-+%%%%%*---=+#%%%%%#==---------=====++++++++#     

  =.......................::.:::-=+##%%%#==------#%%%=-----====*#%%%%%#+=-----=====+++++++*     

 +........................:::-=##%%%*-------------+%%+---=**=----=--=##%%%%+=======+++++++*#    

 =.....................::::+#%%%*=-------------++=--+--=+%++##---=-------=#%%*=+===+++++++*#    

*:.....................:+#%%%*---------------=#*++#+---=#%==#%%:-----------+#%%+===++++++++*    

+:...................-*#%%=-:::::-:---------=+%==*%%=--=#%%%%%%=:-----------+#%#++++++++++**    

=..................:+#%#-::::::::::::-------=*%%%%%%%:-=*%@%%%%#:----=--=====+%%*++++++++++*    

=................:+#%#::::::::::::::::------=+%%%%%%%:--=%%%%%%=:-----========*%%++++++++++*    

+................-#%+::::::::::::::::::------=#%%%%%%:---=%%%%%:------=========%%+++++++++**    

+................*%#::::::::::::::::-:::-----==#%%%%--------=-------===========#%*+++++++***    

*:..............:#%*::::::::::::::::::-:--------=+=-----------------==========+%%++++++****     

*=.............:.*%+:::::::::::::::::-----------------------------============#%#++++++****     

 *-............:.*%#:::::::::::::::::::::------------------==--==============*%%+++++++***#     

  *-...........:::#%*:::::::::::::::-:::-:------------------===========+++++#%#+==++++****      

   #-.......:::::.=#%+:::::::::::::::::-------------------=--=========+++++%@*+++=+++****       

    *........:::::.=#%+--::::::::::----:---::--------===------=======+++#%@#++*+++=+****        

     -....:::-:-:..:=#%+::::::--==++++===---:-------=#%%#+==========*#%%@#*++***+++****         

     #:...::::-=-::.=#%%%%%%%%%%%%%%%%%%%%%%%#**+=*#%%+##%%%%%%%%%%%@%%*+++*******+***          

      *::.:::--===-::-------::::-=====+-====##%%%%%%+==-=-==+=+=+++++++++++*********            

       *-:::::--===-::::::::::---=+%%%#+=-=-----=---------===-=-=*#+=+++++*********             

         =::::--=====-::::::-----+++*#*--+#%#*=----=-=====++###*---+++++++*******               

          *=::---==++==--::::=====++=--*#+====#*+#%%%%%%#**+++%-:-=====+*******                 

             +=--====++==-:----===+**===*####%%*++++*#%%####*#::======+*****#                   

                #*==-+++==:::----=+*##+=-=====-===***==+++++=---=+===*####                      

                      **++----==--=++*##+--=+====++++++++=---==+==+*##*                         

                            #*+++++===**#*====+==**+=-::-=======*###                            

                                      ****##  * *+*+++++++=***
```
