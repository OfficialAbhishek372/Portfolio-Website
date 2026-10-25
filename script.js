// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Typing effect for the green italic word
const words = ['secure', 'automated', 'resilient', 'observable', 'compliant'];
const typed = document.getElementById('typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  let wi = 0, ci = words[0].length, deleting = true;
  const tick = () => {
    const word = words[wi];
    typed.textContent = word.slice(0, ci);
    if (deleting) {
      if (ci > 0) { ci--; setTimeout(tick, 45); }
      else { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 250); }
    } else {
      if (ci < words[wi].length) { ci++; setTimeout(tick, 90); }
      else { deleting = true; setTimeout(tick, 1800); }
    }
  };
  setTimeout(tick, 2200);
}

// Reveal on scroll
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('visible'));
}
