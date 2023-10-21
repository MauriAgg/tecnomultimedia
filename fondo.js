class fondo {
  constructor() {
    this.fondoA = fondo1;
    this.fondoB = fondo2;
  }

  cambioFondo() {
    if (frameCount% 40>10) {
      image(this.fondoA, 0, 0);
    } else {
      image(this.fondoB, 0, 0);
    }
  }
}
