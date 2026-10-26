// Activa la animación de entrada de los elementos con [data-reveal]
// cuando aparecen en pantalla al hacer scroll (ver global.css).
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
  if (items.length === 0) return;

  document.documentElement.classList.add('reveal-ready');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // se anima solo una vez
      });
    },
    // Se dispara cuando el elemento ya entró un poco en pantalla
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );
  items.forEach((el) => observer.observe(el));
}

document.addEventListener('astro:page-load', initReveal);
