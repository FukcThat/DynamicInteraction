// Drop-down

const CONTAINER = document.querySelectorAll(".menu-option-container");
const LABEL = document.querySelectorAll(".dropdown-label");
const DROPDOWN = document.querySelectorAll(".dropdown-option-container");

const initDropDown = (container, label, dropdown) => {
  label.addEventListener("mouseover", () => {
    dropdown.classList.remove("hidden");
  });

  container.addEventListener("mouseout", () => {
    dropdown.classList.add("hidden");
  });
};

const initMenu = (containerArr, labelArr, dropdownArr) => {
  for (let i = 0; i < containerArr.length; i++) {
    initDropDown(containerArr[i], labelArr[i], dropdownArr[i]);
  }
};

initMenu(CONTAINER, LABEL, DROPDOWN);
