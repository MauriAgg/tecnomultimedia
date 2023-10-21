class reiniciar {
  constructor(tiempo0) {
    this.imagen = pntinicio;
    this.tiempo0 = tiempo0;
  }

  findeTiempo() {
    if (this.tiempo0.tiempo30 == 31) {
      image(this.imagen, 0, 0, 1140, 950);
      fill(255);
      textSize(80);
      text(" Fin\n del\njuego", 400, 380);
    }
  }
}
