class inicio {
  constructor(juego0) {
    this.imagen = pntinicio;
    this.juego0 = juego0;
  }

  dibujar() {
    this.pantallaInicio();
    this.instrucciones();
    this.boton();
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
        comenzarJuego = true;
      }
    }
  }

  pantallaInicio() {
    image(this.imagen, 0, 0, 1140, 950);
  }
}
