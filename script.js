// Drop-down

// const CONTAINER = document.querySelectorAll(".menu-option-container");
// const LABEL = document.querySelectorAll(".dropdown-label");
// const DROPDOWN = document.querySelectorAll(".dropdown-option-container");

// const initDropDown = (container, label, dropdown) => {
//   label.addEventListener("mouseover", () => {
//     dropdown.classList.remove("hidden");
//   });

//   container.addEventListener("mouseleave", () => {
//     dropdown.classList.add("hidden");
//   });
// };

// const initMenu = (containerArr, labelArr, dropdownArr) => {
//   for (let i = 0; i < containerArr.length; i++) {
//     initDropDown(containerArr[i], labelArr[i], dropdownArr[i]);
//   }
// };

// initMenu(CONTAINER, LABEL, DROPDOWN);

// Carousel

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".carousel__btn--left");
const nextBtn = document.querySelector(".carousel__btn--right");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else if (targetIndex === slides.length - 1) {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
};

prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  console.log(currentDot.attributes);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
});

nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
});
