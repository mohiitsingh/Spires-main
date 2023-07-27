let buttons = document.querySelectorAll(".button-value");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // button.classList.toggle("active");
  });
});
