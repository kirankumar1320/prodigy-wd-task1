window.addEventListener('scroll', () => {
  const navBarElement = document.getElementById('navbar');
  const hasScrolledEnough = window.scrollY > 50;

  if (hasScrolledEnough) {
    navBarElement.classList.add('scrolled');
  } else {
    navBarElement.classList.remove('scrolled');
  }
});
