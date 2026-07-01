// messi-amour portfolio — interactions
document.addEventListener('DOMContentLoaded', () => {
  // Smooth in-page nav (CSS already handles scroll-behavior, this is a fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
