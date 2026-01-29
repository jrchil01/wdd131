var menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-hide");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("hide");
    menuBtn.classList.toggle("change");
};