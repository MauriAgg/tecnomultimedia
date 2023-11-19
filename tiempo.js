class Tiempo {
  constructor() {
    this.tiempo30 = 0;
  }

  dibujarTiempo() {
    fill(0);
    rect(480,10,65,40);
    fill(255);
    textFont(fuente);
    textSize(30);
    text(this.tiempo30, 485, 45 );

    this.incrementarTiempo();
  }

  incrementarTiempo() {
    if (frameCount%60 == 0) {
      this.tiempo30++;
    }
  }
}
