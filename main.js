const menuToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.primary-navigation');


menuToggle.addEventListener("click", () => {
    navLinks.hasAttribute("data-visible")
        ? menuToggle.setAttribute("aria-expanded", false)
        : menuToggle.setAttribute("aria-expanded", true);
    navLinks.toggleAttribute("data-visible");
})