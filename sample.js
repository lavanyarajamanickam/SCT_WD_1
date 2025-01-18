window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.content');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const sectionId = e.target.getAttribute('data-section');

    
    sections.forEach(section => section.classList.add('hidden'));

    
    document.getElementById(sectionId).classList.remove('hidden');
  });
});