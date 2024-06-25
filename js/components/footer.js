document.addEventListener('DOMContentLoaded', () => {
  fetch('../../components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;

      // Aqui eu boto a interatividade do rodapé, se for o caso
    })
    .catch(error => console.error('Erro ao carregar o rodapé:', error));
});
