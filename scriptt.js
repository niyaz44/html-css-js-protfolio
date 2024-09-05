const aboutLink = document.querySelector('nav a[href="#about"]');

aboutLink.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('#about').offsetTop,
    behavior: 'smooth'
  });
});