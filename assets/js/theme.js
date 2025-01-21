

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light_theme'); 
  themeToggleBtn.textContent = body.classList.contains('light_theme')
    ? 'Switch to Light Theme'
    : 'Switch to Dark Theme';
});


