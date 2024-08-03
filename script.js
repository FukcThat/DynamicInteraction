// Drop-down

const MENU = document.querySelector(".menu-container");
const MENU_OPTION = document.querySelector(".menu-option");
const DROPDOWN = document.querySelector(".dropdown");

MENU_OPTION.addEventListener("mouseover", () => {
  DROPDOWN.classList.remove("hidden");
});

MENU_OPTION.addEventListener("mouseout", () => {
  DROPDOWN.classList.add("hidden");
});
