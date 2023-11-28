class PantallaDosBotones {
  constructor(img, xbot1, ybot1, xbot2, ybot2, pantSig1, pantSig2, botonTexto1, botonTexto2, textoy, texto1, texto2, texto3) {
    this.img = img;
    this.pantSig1 = pantSig1;
    this.pantSig2 = pantSig2;
    this.x = 700;
    this.y = 600;
    this.texto = new Texto(textoy, texto1, texto2, texto3);
    this.boton1 = new Boton(xbot1, ybot1, botonTexto1);
    this.boton2 = new Boton(xbot2, ybot2, botonTexto2);
  }

  dibujar() {
    image(this.img, 0, 0, this.x, this.y);
    this.boton1.dibujar();
    this.boton2.dibujar();
    this.texto.dibujar();
  }

  clicBoton(bot) {
    if (this.boton1.clicBoton(bot, this.botonTexto1)) {
      return this.pantSig1;
    }
    if (this.boton2.clicBoton(bot, this.botonTexto2)) {
      return this.pantSig2;
    }
  }
}
