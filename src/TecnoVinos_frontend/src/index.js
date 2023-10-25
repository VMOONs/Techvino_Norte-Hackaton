/*const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

if (menuToggle && showcase) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
  });
} else {
  console.error("Elements with class names not found");
}*/

const login = document.getElementById('login');


login.addEventListener('click', function() {
    
    window.location.href = 'comidas.html';
});
