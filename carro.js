// codigos do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [4, 6, 5, 4, 5, 6];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    if (xCarros[i] < -50) {
      xCarros[i] = 600;
    }
  }
}
