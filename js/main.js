//  Hamburger Menu
const navToggler = document.getElementById("nav-toggler");
const navLinks = document.getElementById("nav-links");

navToggler.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navToggler.classList.toggle("rotate");
});
