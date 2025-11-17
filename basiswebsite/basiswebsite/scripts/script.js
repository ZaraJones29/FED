// JavaScript Document
// Bron: Javascript fixed button lesopdracht.
console.log("hi");

var menuButton = document.querySelector("header > section:nth-of-type(2) button:nth-of-type(2)");
var hetMenu = document.querySelector("header");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    hetMenu.classList.toggle("is-open");
}


window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var hetMenu = document.querySelector("header");
    hetMenu.classList.remove("is-open");
  }
}


// Bron: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
let darkLightButton = document.querySelector(".darkLightButton");

darkLightButton.addEventListener("click", myFunction);

function myFunction() {
    var element = document.querySelector("body");
    element.classList.toggle("dark-mode");
}


