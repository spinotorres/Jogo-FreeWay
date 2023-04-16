// codigos do ator

let xAtor = 110;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 5;
    }
  }
}

function verificaColisao() {
  
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      atorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1
      }
    }
  }
}

function atorPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  fill(color(255,255,0));
  textSize(25);
  text(meusPontos, width / 4, 25);
}

function marcaPonto() {
  if (yAtor <= 15) {
    meusPontos += 1;
    atorPosicaoInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0
}

function podeSeMover() {
  return yAtor < 366
}
