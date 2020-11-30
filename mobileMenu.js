"use strict";


let menu = document.querySelector(".mobile-menu");
let menuBody = document.querySelector(".mobile_container");

menu.addEventListener("click", () => {
    if (menuBody.style.display === "block") {
        menuBody.style.display = "none";
    } else {
        menuBody.style.display = "block";
    }
});
