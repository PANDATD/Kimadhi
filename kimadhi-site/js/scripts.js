document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const navEl = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
    navEl.classList.toggle('show');
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      navEl.classList.remove('show');
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  });
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) scrollBtn.style.display = 'block';
    else scrollBtn.style.display = 'none';
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });
  let currentTest = 1;
  setInterval(()=> {
    document.getElementById('test' + currentTest).style.display = 'none';
    currentTest = currentTest === 1 ? 2 : 1;
    document.getElementById('test' + currentTest).style.display = 'block';
  }, 5000);
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.display === 'block';
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
      content.style.display = isOpen ? 'none' : 'block';
    });
  });
});
