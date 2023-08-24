function Gerar() {
  botao.style.boxShadow = '-3px 3px 3px rgba(133, 133, 111, 1)';
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      foto.src = data[0]['url'];
    })
    .catch((error) => {
      console.error('Erro ao fazer a requisição:', error);
    });
}