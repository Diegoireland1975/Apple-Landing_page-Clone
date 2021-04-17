//  Hamburger Menu
const navToggler = document.getElementById("nav-toggler");
const navLinks = document.getElementById("nav-links");

navToggler.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navToggler.classList.toggle("rotate");
});

// collapsible items
const collHeaders = document.querySelectorAll(".collapsible-header");
const collContents = document.querySelectorAll(".collapsible-content");

collHeaders.forEach((collHeader) => {
  collHeader.addEventListener("click", () => {
    collHeader.classList.toggle("show");
  });
});
