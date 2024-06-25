document.addEventListener('DOMContentLoaded', () => {
  fetch('../../components/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;

      // Aqui depois eu boto a interatividade do menu
      document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('mouseover', () => {
          // Aqui coloco depois do Dropdown do menu
        });
      });
    })
    .catch(error => console.error('Erro ao carregar o menu:', error));
});
