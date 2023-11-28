class Boton {
  constructor(posX, posY, texto) {
    this.posX = posX;
    this.posY = posY;
    this.texto = texto;
    this.ancho = 100;
    this.alto = 50;
  }

  dibujarCuadrodeTexto() {
    rectMode(CENTER);
    fill(0);
    rect(this.posX, this.posY, this.ancho, this.alto);
    fill(240);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.posX, this.posY);
  }

  clicBoton(bot) {
    if (dist(this.posX, this.posY, mouseX, mouseY)<25) {
      return true;
    }
  }
}
