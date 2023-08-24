function Gerar() {
  botao.style.boxShadow = '-3px 3px 3px rgba(133, 133, 111, 1)';
  foto.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil6YTcL1_3W0d6xO6l-h4rdRBgEufDtxAtRR7V7ymSEUFyAhfyLeJB_ZzrDmV5QEQjZotGbsDGANQt0ytfXhfggp0RdVXFM-ffF57L7BNvb9070nipDgi8rh3nXSkLX3yQUk6vQphqNC9JW4eGxqIjp_l8dRDlqLX07kvcVTcCBpwYxVfRwHqzUHbP-nMH/s800/image_processing20210905-23221-8i83f4.gif';
  setTimeout(function() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      foto.src = data[0]['url'];
    })
    .catch((error) => {
      console.error('Erro ao fazer a requisição:', error);
    });
  }, 1000);
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
