
//  MOBILE NAV TOGGLE

const navbar = document.querySelector('.mobile-nav');
const navToggler = document.querySelector('.nav-toggle-button');
const navLinks = document.querySelectorAll('.mobile-nav a');

navToggler.addEventListener('click', () => {
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    navToggler.innerHTML = '<i class="fa-solid fa-x fa-lg"></i>';
  } else {
    navToggler.innerHTML = '<i class="fa-solid fa-bars fa-lg"></i>';
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', function() {
      navbar.classList.toggle('active');
      if (navbar.classList.contains('active')) {
        navToggler.innerHTML = '<i class="fa-solid fa-x fa-lg"></i>';
      } else {
        navToggler.innerHTML = '<i class="fa-solid fa-bars fa-lg"></i>';
      }
  });
});


const header = document.querySelector(".header");

const activeHeader = function () {
  window.scrollY > 10 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);