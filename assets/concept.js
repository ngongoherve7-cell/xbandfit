// Scroll reveal — identique au comportement du site principal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, {threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// Motion cinematique (parallax du hero + entree en cascade par section) : GSAP +
// ScrollTrigger, auto-heberges dans assets/, presents uniquement sur les pages qui
// les chargent (pages concept). Progressif : si GSAP echoue a charger, ou si
// prefers-reduced-motion est actif, le site reste parfaitement utilisable, ces
// elements retombent simplement sur le fondu .reveal standard ci-dessus.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
  gsap.registerPlugin(ScrollTrigger);
  const isMobile = window.innerWidth < 760;

  // Parallax discret du visuel de fond du hero, en complement du zoom Ken Burns CSS
  // deja en place (les deux animent des sous-proprietes differentes du background et
  // peuvent tourner ensemble sans conflit).
  const heroEl = document.querySelector('.concept-hero-kenburns');
  if (heroEl) {
    gsap.to(heroEl, {
      backgroundPositionY: isMobile ? '54%' : '64%',
      ease: 'none',
      scrollTrigger: { trigger: heroEl, start: 'top top', end: 'bottom top', scrub: true }
    });
  }

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
      y: isMobile ? 24 : 44,
      scale: isMobile ? 1 : 0.97,
      duration: 1.1,
      stagger: 0.14,
      ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 82%' }
    });
  });
}
