class PantallaUnBoton {
  constructor(img, xbot, ybot, pantSig, botonTexto, textoy, texto1, texto2, texto3) {
    this.img = img;
    this.pantSig = pantSig;
    this.x = 700;
    this.y = 600;
    this.xbot = xbot;
    this.ybot = ybot;
    this.boton = new Boton(this.xbot, this.ybot, botonTexto);
    this.texto = new Texto(textoy, texto1, texto2, texto3);
  }

  dibujar() {
    image(this.img, 0, 0, this.x, this.y);
    this.boton.dibujar();
    this.texto.dibujar();
  }

  clicBoton(bot) {
    if (this.boton.clicBoton(bot)) {
      return this.pantSig;
    }
  }
}
