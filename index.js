// valid email address = word@word.word
const emailPattern = /^(\w+(\.\w+){0,2})@(\w+(\.\w+){0,1})\.\w+$/;
const inputField = document.querySelector("input");
const tickSymbol = document.querySelector(".field span");

inputField.addEventListener("keyup", () => {
  if (emailPattern.test(inputField.value)) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
    tickSymbol.classList.add("valid");
  } else {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
    tickSymbol.classList.remove("valid");
  }
});
