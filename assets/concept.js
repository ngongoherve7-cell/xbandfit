// Scroll reveal — identique au comportement du site principal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, {threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// Motion cinematique (entree en cascade par section) : GSAP + ScrollTrigger,
// auto-heberges dans assets/, presents uniquement sur les pages qui les chargent
// (pages concept). Le hero a son propre mouvement de camera en CSS pur (voir
// .concept-hero::before dans concept.css), pas besoin de parallax JS ici.
// Progressif : si GSAP echoue a charger, ou si prefers-reduced-motion est actif,
// le site reste parfaitement utilisable, ces elements retombent simplement sur
// le fondu .reveal standard ci-dessus.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
  gsap.registerPlugin(ScrollTrigger);
  const isMobile = window.innerWidth < 760;

  // Entree en cascade des blocs .reveal, section par section, a la place du fondu
  // simultane : chaque section anime ses propres elements avec un leger decalage,
  // pour un mouvement plus controle et moins uniforme.
  document.querySelectorAll('section').forEach(section => {
    const items = Array.from(section.querySelectorAll('.reveal'));
    if (!items.length) return;
    items.forEach(el => el.classList.remove('reveal'));
    gsap.set(items, { opacity: 1 });
    gsap.from(items, {
      opacity: 0,
      y: isMobile ? 24 : 40,
      duration: 1.0,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 82%' }
    });
  });
}
