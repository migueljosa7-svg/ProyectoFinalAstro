import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initAnimations = () => {

    // -----------------------------
    // Hero
    // -----------------------------
    gsap.from("#hero-title", { y: 100, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from("#hero-subtitle", { y: 100, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
    gsap.from(".cta-button", { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" });

    // -----------------------------
    // Títulos
    // -----------------------------
    gsap.from("#destacados-title", {
        x: -200, opacity: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: "#destacados-title", start: "top 80%", toggleActions: "play none none none", invalidateOnRefresh: true }
    });

    gsap.from("#testimonios-title", {
        x: 200, opacity: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: { trigger: "#testimonios-title", start: "top 80%", toggleActions: "play none none none", invalidateOnRefresh: true }
    });

    gsap.from("#noticias-title", {
        y: -50, opacity: 0, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: "#noticias-title", start: "top 80%", toggleActions: "play none none none", invalidateOnRefresh: true }
    });

    // -----------------------------
    // Tarjetas con Batch (Conciertos, Noticias, Testimonios)
    // -----------------------------
    const animateCards = (selector, start = "top 90%") => {
        ScrollTrigger.batch(selector, {
            onEnter: batch => {
                gsap.fromTo(batch,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
                );
            },
            start: start,
            batchMax: 3,
            invalidateOnRefresh: false,
            // markers: true // descomenta para debug
        });
    };

    animateCards(".concert-card");
    animateCards(".news-card");
    animateCards(".testimonial-card", "top 75%");

    // -----------------------------
    // Sección de Suscripción
    // -----------------------------
    gsap.from("#suscripcion", {
        scale: 0.9, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: "#suscripcion", start: "top 80%", toggleActions: "play none none none", invalidateOnRefresh: true }
    });
};

// -----------------------------
// Esperar a que carguen todas las imágenes
// -----------------------------
window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        initAnimations();
        ScrollTrigger.refresh(); 
    });
});