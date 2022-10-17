window.addEventListener("DOMContentLoaded", (event) => {
    const menuBtn = document.getElementById("menu__hamb");
    const nav = document.querySelector(".menu");
    const body = document.querySelector("body");

    menuBtn.addEventListener("click", (event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        body.classList.toggle("noScroll");
    });

});