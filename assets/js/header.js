const header = document.querySelector("header");
const nav = header.querySelector("nav");
const navToggleButton = header.querySelector(".nav-toggle-button");
const bar1 = header.querySelector(".toggle-button-bar-1");
const bar2 = header.querySelector(".toggle-button-bar-2");




//toggle nav
navToggleButton.addEventListener("click", () => {
    nav.classList.toggle("nav-toggle-button-clicked");
    bar1.classList.toggle("toggle-button-bar-1-clicked");
    bar2.classList.toggle("toggle-button-bar-2-clicked");

});


//toggle theme functionality

const themeToggleButton = header.querySelector(".theme-toggle-button");
const body = document.querySelector("body");
let theme = localStorage.getItem("theme");


function darkTheme() {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
}

function lightTheme() {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
}


if (theme === "dark") {
    darkTheme();
}

themeToggleButton.addEventListener("click", () => {
    theme = localStorage.getItem("theme");
    console.log("eh");
    if (theme !== "dark") {
        darkTheme();
    } else {
        lightTheme();
    }
});