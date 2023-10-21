class juego {
  constructor() {
    this.ciudad = new fondo();
    this.tempo = new tiempo();
    this.escore = new score(this.tempo);
    this.obstaculos0 = new obstaculos(this.tempo);
    this.personajeobjeto = new personaje(this.obstaculos0);
    this.reiniciar0 = new reiniciar(this.tempo);
  }

  dibujarJuego() {
    this.ciudad.cambioFondo();
    this.personajeobjeto.dibujar();
    this.personajeobjeto.teclaPresionada();
    this.tempo.dibujarTiempo();
    this.escore.dibujar();
    this.obstaculos0.dibujarAutos();
    this.reiniciar0.findeTiempo();
  }
}
