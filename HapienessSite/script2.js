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

function Data() {
  var date = new Date();
  var hora = date.getHours();
  if (hora >= 0 && hora < 4) {
    campoData.innerHTML = 'VAI DORMIIR';
  } else if (hora >= 4 && hora < 12) {
    campoData.innerHTML = 'Bom dia abiga';
  } else if (hora >= 12 && hora < 18) {
    campoData.innerHTML = 'Boa tarde abiga';
  } else {
    campoData.innerHTML = 'Boa noite abiga';
  }
}

Data();