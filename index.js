const hamburgerBars = document.querySelectorAll(".bar");
const habmurgerIcon = document.querySelector(".hamburger-icon");
const navBar = document.querySelector(".nav");
habmurgerIcon.addEventListener("click", () => {
  hamburgerBars[0].classList.toggle("bar-1");
  hamburgerBars[1].classList.toggle("bar-2");
  hamburgerBars[2].classList.toggle("bar-3");
  navBar.classList.toggle("is-hidden");
});
