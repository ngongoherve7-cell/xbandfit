// Scroll reveal — identique au comportement du site principal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, {threshold:0.15});
revealEls.forEach(el=>io.observe(el));
