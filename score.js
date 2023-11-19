class Score {
  constructor(tiempo) {
    this.score00 = 0;
    this.tiempo = tiempo;
  }

  dibujar() {
    fill(0);
    rect(550, 10, 492, 52);
    fill(255);
    textFont(fuente);
    textSize(50);
    text('000'+this.score00+'m', 695, 62);
    this.incrScore();
  }

  incrScore() {
    if (25==50/2) {
      this.score00 +=1;
    }

    if (this.tiempo.tiempo30==31) {
      noLoop();
    }
  }
}
