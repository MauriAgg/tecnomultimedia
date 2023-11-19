class Juego {
  constructor() {
    this.tempo = new Tiempo();
    this.escore = new Score(this.tempo);
    this.obstaculos0 = new Obstaculo(this.tempo);
    this.personajeobjeto = new Personaje(this.obstaculos0);
    this.imagenInicioYFinal = pntinicio;
    this.juegoIniciado = false;
    this.fondoA = fondo1;
    this.fondoB = fondo2;
  }

  mostrarJuego() {
    if (this.juegoIniciado) {
      this.cambiarFondo();
      this.personajeobjeto.dibujar();
      this.personajeobjeto.teclaPresionada();
      this.tempo.dibujarTiempo();
      this.escore.dibujar();
      this.obstaculos0.dibujarObstaculos();

      if (this.tempo.tiempo30 == 31) {
        this.mostrarFinJuego();
      }
    }
  }

  mostrarFinJuego() {
    image(this.imagenInicioYFinal, 0, 0, 1140, 950);
    fill(255);
    textSize(80);
    text(" Fin\n del\njuego", 400, 380);
  }


  comenzarJuego() {
    this.juegoIniciado = true;
  }
  instrucciones() {
    fill(200);
    textFont(fuente);
    textSize(20);
    text("Le has pedido al taxista un paseo por la ciudad,\n pero New York es muy alocada así que\n tendrás que conducir con cuidado, tenés \n 30 segundos y usas las flechas\n izq. y der. para cambiar\n de dirección", 50, 250);
  }

  boton() {
    fill(255);
    textSize(20);
    text('Comenzar', 510, 880);
    if (mouseIsPressed) {
      if (mouseX>510 && mouseX<650 && mouseY>850 && mouseY<900) {
        this.comenzarJuego();
      }
    }
  }

  pantallaInicio() {
    image(this.imagenInicioYFinal, 0, 0, 1140, 950);
    this.instrucciones();
    this.boton();
  }

  cambiarFondo() {
    if (frameCount% 40>10) {
      image(this.fondoA, 0, 0);
    } else {
      image(this.fondoB, 0, 0);
    }
  }
}
