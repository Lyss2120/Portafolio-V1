/* ==========================================================================
   Configuración y Efectos Dinámicos del Portafolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initScrollReveal();
    initActiveNavOnScroll();
});

/**
 * 1. Efecto de Escritura Dinámica (Typing Effect)
 * Alterna entre distintas especialidades en el título principal.
 */
function initTypingEffect() {
//     const targetSpan = document.querySelector('h1 span');
//     if (!targetSpan) return;

//     const words = ["Fullstack", "Frontend", "Backend", "UI/UX"];
//     let wordIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;
//     let typingSpeed = 150;

//     function type() {
//         const currentWord = words[wordIndex];

//         if (isDeleting) {
//             targetSpan.textContent = currentWord.substring(0, charIndex - 1);
//             charIndex--;
//             typingSpeed = 75; // Más rápido al borrar
//         } else {
//             targetSpan.textContent = currentWord.substring(0, charIndex + 1);
//             charIndex++;
//             typingSpeed = 150;
//         }

//         if (!isDeleting && charIndex === currentWord.length) {
//             typingSpeed = 2000; // Pausa cuando la palabra está completa
//             isDeleting = true;
//         } else if (isDeleting && charIndex === 0) {
//             isDeleting = false;
//             wordIndex = (wordIndex + 1) % words.length;
//             typingSpeed = 500; // Pausa antes de empezar la nueva palabra
//         }

//         setTimeout(type, typingSpeed);
//     }

//     // Iniciar el efecto
//     type();
}

/**
 * 2. Revelación de Elementos al Desplazar (Scroll Reveal)
 * Hace aparecer las tarjetas y secciones con una transición suave y elegante.
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('section, .project-card, .skill-category');

    // Configurar estilos iniciales por código para mantener el CSS limpio
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
}

/**
 * 3. Menú Activo Automático (Scroll Spy)
 * Resalta el enlace del menú correspondiente a la sección que se está visualizando.
 */
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Margen de tolerancia para activar el enlace un poco antes
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach(link => {
            link.style.color = 'var(--text-secondary)'; // Color base
            link.style.fontWeight = '500';

            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.style.color = 'var(--accent)'; // Color destacado de la paleta
                link.style.fontWeight = '600';
            }
        });
    });
}

/* ==========================================================================
   Efectos e Interactividad con jQuery — Portafolio Profesional
   ========================================================================== */

/* ==========================================================================
   Efectos e Interactividad con jQuery — Portafolio Profesional Corregido
   ========================================================================== */

$(document).ready(function () {
    initNavbarEffects();
    initSmoothScroll();
    initCardGlowHover();
    initScrollReveal();
});

/**
 * 1. Efectos en la Barra de Navegación
 * Cambia el fondo y tamaño de la navbar al hacer scroll para mayor legibilidad.
 */
function initNavbarEffects() {
    const $nav = $('nav');
    
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $nav.css({
                'background': 'rgba(12, 7, 14, 0.95)',
                'padding': '1rem 10%',
                'box-shadow': '0 10px 30px rgba(0, 0, 0, 0.3)'
            });
        } else {
            $nav.css({
                'background': 'rgba(12, 7, 14, 0.7)',
                'padding': '1.5rem 10%',
                'box-shadow': 'none'
            });
        }
    });
}



/**
 * 2. Desplazamiento Suave (Smooth Scroll)
 * Navegación fluida al hacer clic en los enlaces de las secciones.
 */
function initSmoothScroll() {
    $('.nav-links a, .btn-primary').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });
}

/**
 * 3. Efecto Glow Magnético en Tarjetas
 * Añade un destello dinámico en los bordes de los proyectos al pasar el cursor.
 */
function initCardGlowHover() {
    $('.project-card').on('mousemove', function (e) {
        const $card = (this);
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        $card.css({
            'background': `radial-gradient(circle 200px at ${x}px ${y}px, rgba(251, 113, 133, 0.15), rgba(26, 17, 30, 0.6))`
        });
    }).on('mouseleave', function () {
        $(this).css({
            'background': 'var(--bg-card)',
            'transition': 'background 0.5s ease'
        });
    });
}

/**
 * 4. Animación de Aparición Gradual (Scroll Reveal)
 * Revela secciones e ítems con transiciones sutiles cuando entran en pantalla.
 */
function initScrollReveal() {
    const $revealElements = ('section, .project-card, .skill-category');

    $revealElements.css({
        'opacity': '0',
        'transform': 'translateY(40px)',
        'transition': 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
    });

    function checkVisibility() {
        const windowBottom = (window).scrollTop() + (window).height() * 0.85;

        $revealElements.each(function () {
            const elementTop = $(this).offset().top;

            if (elementTop < windowBottom) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    checkVisibility();
}
