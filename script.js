const navToggle = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header")
const iconMenu = document.querySelector(".icon-menu");
const iconClose = document.querySelector(".icon-close");
navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
     ? navToggle.setAttribute("aria-expanded", false)
     : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
    iconClose.toggleAttribute("icon-show");
    iconMenu.toggleAttribute("icon-show");

})