# Documento de Requerimientos de Producto (PRD)
## Proyecto: Landing Page / Portafolio Web (GitHub Pages)
### Versión: V3 (Formato Markdown para Descarga - Validación UI)

---

### 1. Visión General del Producto
* **Objetivo:** Crear una Landing Page responsiva, rápida y atractiva que actúe como portafolio profesional para mostrar habilidades y experiencia, facilitando el contacto con reclutadores y clientes potenciales.
* **Público Objetivo:** Reclutadores de talento (Tech Recruits), Project Managers, clientes freelance y la comunidad tech en general.
* **Plataforma de Despliegue:** GitHub Pages (Sitio estático).
* **Nota de Lanzamiento Actual:** En esta fase inicial, **no se subirán proyectos reales**. Se utilizarán 4 proyectos ficticios detallados en este documento con el único propósito de validar la interfaz de usuario (UI), el diseño de las tarjetas (cards) y la disposición de los elementos.

---

### 2. Objetivos de Negocio y Métricas (KPIs)
* **Conversión:** Lograr que los visitantes den clic en "Contactar" o descarguen el CV.
* **Retención:** Mantener un tiempo de permanencia óptimo mediante una navegación fluida.
* **Rendimiento:** Conseguir una puntuación mínima de **90/100** en Google Lighthouse (SEO y Performance).

---

### 3. Requerimientos Funcionales (User Stories)

Como usuario del portafolio, quiero...

#### 3.1 Sección Hero (Introducción)
* Ver un saludo claro, mi rol/especialidad y una propuesta de valor en 5 segundos.
* Tener un botón de llamada a la acción (CTA) claro (ej. *"Ver mis proyectos"* o *"Hablemos"*).

#### 3.2 Sección "Sobre Mí" (About Me)
* Leer una breve descripción de quién soy, mi enfoque profesional y lo que me apasiona.
* Ver una lista visual de mis **tecnologías y habilidades** (Skills).

#### 3.3 Sección de Proyectos (Ficticios para Validación UI)
La sección de portafolio mostrará temporalmente componentes visuales (placeholders) basados en los siguientes 4 proyectos ficticios para evaluar el comportamiento del diseño responsivo, las fuentes, los contrastes y las interacciones (hovers/clics):

| Nombre del Proyecto | Descripción Corta (UI Test) | Tecnologías (Badges) | Objetivo de Validación UI |
| :--- | :--- | :--- | :--- |
| **EcoTrack Dash** | Dashboard interactivo para medir la huella de carbono empresarial en tiempo real con gráficos dinámicos. | React, Tailwind CSS, Chart.js | Validar la visualización de etiquetas de tecnología (badges) múltiples y la estructura de cuadrícula en pantallas medianas. |
| **CryptoSprout** | Simulador educativo de billetera virtual para la gestión de microinversiones en criptoactivos orientada a jóvenes. | TypeScript, Next.js, Sass | Probar el comportamiento del texto largo dentro de la tarjeta y el contraste del botón "Live Demo". |
| **ChefReserve API** | API REST para la gestión de reservas de restaurantes con alta concurrencia y sistema de notificaciones automáticas. | Node.js, Express, MongoDB | Evaluar cómo se ve un proyecto sin imagen de interfaz (uso de iconos/placeholders de código o backend). |
| **AuraFit App** | Landing page minimalista para una aplicación móvil de bienestar mental, meditación guiada y seguimiento del sueño. | Astro, HTML5, CSS Grid | Validar el comportamiento de imágenes verticales o mockups móviles en la tarjeta del portafolio. |

#### 3.4 Sección de Contacto
* Ver enlaces directos a mis redes profesionales: LinkedIn, GitHub, y correo electrónico.

#### 3.5 Descarga de CV
* Tener un botón visible en el menú de navegación o en el Hero para descargar mi CV en formato PDF.

---

### 4. Requerimientos de los Botones de Interacción (UI)
Cada una de las tarjetas de proyecto debe incluir dos botones obligatorios para validar el diseño de interacción:
* **Botón Código:** Enlace simulado al repositorio de GitHub (ej. `#`). Debe cambiar de estado (hover) al pasar el cursor.
* **Botón Demo:** Enlace simulado al proyecto en vivo (ej. `#`). Debe tener un estilo de llamado a la acción (CTA) secundario claro.

---

### 5. Requerimientos No Funcionales
* **Diseño Responsivo (Mobile First):** El sitio debe verse perfecto en teléfonos móviles, tablets y monitores de escritorio.
* **Modo Oscuro/Claro (Opcional):** Un interruptor (toggle) para cambiar el tema visual.
* **Optimización SEO:** Uso correcto de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`), metaetiquetas (Open Graph) y textos `alt` en imágenes.
* **Carga Rápida:** Imágenes comprimidas (formatos .webp) y código minificado.

---

### 6. Plan de Trabajo Ajustado (Milestones)
* **Fase 1 (Validación UI):** Maquetación del sitio utilizando los 4 proyectos ficticios descritos. No se requiere código funcional de backend ni enlaces reales.
* **Fase 2 (Sustitución):** Reemplazo de los datos ficticios por los proyectos reales del usuario una vez que la interfaz sea aprobada y el diseño sea estable.
