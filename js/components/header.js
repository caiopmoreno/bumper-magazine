document.addEventListener('DOMContentLoaded', () => {
  fetch('components/menu/menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menu').innerHTML = data;

      // Aqui depois eu boto a interatividade do menu
      document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('mouseover', () => {
          // Aqui coloco depois do Dropdown do menu
        });
      });
    })
    .catch(error => console.error('Erro ao carregar o menu:', error));
});
