// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll);

// Mobile menu
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    toggle.classList.remove('active');
    links.classList.remove('open');
  })
);

// Typing effect
const roles = [
  'DevOps Engineer',
  'DevSecOps Practitioner',
  'AWS Cloud Engineer',
  'Cybersecurity Master\'s Student',
  'Infrastructure Automator'
];
const typed = document.getElementById('typed');
let ri = 0, ci = 0, deleting = false;
function type() {
  const word = roles[ri];
  typed.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) {
    ci++; setTimeout(type, 75);
  } else if (deleting && ci > 0) {
    ci--; setTimeout(type, 35);
  } else if (!deleting && ci === word.length) {
    deleting = true; setTimeout(type, 1600);
  } else {
    deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 300);
  }
}
type();

// Reveal on scroll
const revealEls = document.querySelectorAll('.section, .tl-item, .project-card, .skill-group, .edu-card');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (Math.min(i, 4) * 60) + 'ms';
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));
