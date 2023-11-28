class Aventura {
  constructor() {
    this.pantallas = [];
    this.dibujarAventura(texto);
  }

  dibujarAventura(texto) {
    this.pantallas[0] = new PantallaUnBoton(pantalla[0], 300, 360, 1, "Iniciar");
    this.pantallas[1] = new PantallaUnBoton(pantalla[1], 300, 280, 2, "Siguiente", 350, texto[0], texto[1], texto[2]);
    this.pantallas[2] = new PantallaUnBoton(pantalla[2], 300, 280, 3, "Siguiente", 350, texto[3], texto[4], texto[5]);
    this.pantallas[3] = new PantallaDosBotones(pantalla[3], 255, 360, 345, 360, 4, 10, "Aceptar", "Rechazar", 350, texto[6], texto[7], texto[8]);
    this.pantallas[4] = new PantallaUnBoton(pantalla[10], 300, 280, 11, "Siguiente", 350, texto[3], texto[4], texto[5]);
    this.pantallas[5] = new PantallaUnBoton(pantalla[11], 300, 280, 12, "Siguiente", 350, texto[3], texto[4], texto[5]);
    this.pantallas[6] = new PantallaUnBoton(pantalla[12], 300, 280, 0, "Reiniciar", 350, texto[3], texto[4], texto[5]);

    this.pantallas[7] = new PantallaDosBotones(pantalla[4], 255, 360, 345, 360, 5, 13, "No llamar", "Llamar", 350, texto[9], texto[10], texto[11]);
    this.pantallas[8] = new PantallaUnBoton(pantalla[13], 300, 280, 14, "Siguiente", 350, texto[3], texto[4], texto[5]);
    this.pantallas[9] = new PantallaUnBoton(pantalla[14], 300, 280, 15, "Siguiente", 350, texto[3], texto[4], texto[5]);
    this.pantallas[10] = new PantallaUnBoton(pantalla[15], 300, 280, 0, "Reiniciar", 350, texto[3], texto[4], texto[5]);

    this.pantallas[11] = new PantallaUnBoton(pantalla[5], 300, 360, 6, "Siguiente", 60, texto[12], texto[13], texto[14]);
    this.pantallas[12] = new PantallaUnBoton(pantalla[6], 300, 360, 7, "Siguiente", 60, texto[15], texto[16], texto[17]);
    this.pantallas[13] = new PantallaUnBoton(pantalla[7], 300, 360, 8, "Siguiente", 60, texto[18], texto[19], texto[20]);
    this.pantallas[14] = new PantallaUnBoton(pantalla[8], 300, 360, 9, "Siguiente", 60, texto[21], texto[22], texto[23]);
    this.pantallas[15] = new PantallaUnBoton(pantalla[9], 300, 280, 0, "Reiniciar", 350, texto[24], texto[25], texto[26]);
  }
}
