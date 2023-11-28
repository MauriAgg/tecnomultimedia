class Texto {
  constructor(posY, texto1, texto2, texto3) {
    this.posX = 300;
    this.posY = posY;
    this.texto1 = texto1;
    this.texto2 = texto2;
    this.texto3 = texto3;
  }

  dibujar() {
    rectMode(CENTER);
    fill(150);
    rect(300, this.posY, 450, 70);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto1, this.posX, this.posY-20);
    text(this.texto2, this.posX, this.posY);
    text(this.texto3, this.posX, this.posY+20);
  }
}
