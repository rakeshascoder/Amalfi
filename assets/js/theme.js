

// const themeToggleBtn = document.getElementById('theme-toggle');
// const body = document.body;

// themeToggleBtn.addEventListener('click', () => {
//   body.classList.toggle('light_theme'); 
//   themeToggleBtn.textContent = body.classList.contains('light_theme')
//     ? 'Switch to Light Theme'
//     : 'Switch to Dark Theme';
// });




const themeToggleBtn = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light_theme');
  if (body.classList.contains('light_theme')) {
    lightIcon.style.display = 'inline-block'; 
    darkIcon.style.display = 'inline';  
  } else {
    lightIcon.style.display = 'inline';
    darkIcon.style.display = 'none'; 
  }
});
