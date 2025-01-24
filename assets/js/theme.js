const lightThemeBtn = document.getElementById("light-theme-btn");
const darkThemeBtn = document.getElementById("dark-theme-btn");
const body = document.body;

lightThemeBtn.addEventListener("click", () => {
  body.classList.add("light_theme");
  lightThemeBtn.classList.add("hidden");
  darkThemeBtn.classList.remove("hidden");
});

darkThemeBtn.addEventListener("click", () => {
  body.classList.remove("light_theme");
  darkThemeBtn.classList.add("hidden");
  lightThemeBtn.classList.remove("hidden");
});
