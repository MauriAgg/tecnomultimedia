class Personaje {
  constructor(hitbox) {
    this.derecha = "DERECHA";
    this.izquierda = "IZQUIERDA";
    this.posX = 800;
    this.posY = 800;
    this.dir = this.DERECHA;
    this.izq = this.IZQUIERDA;
    this.tamx = 316;
    this.tamy = 117;
    this.imagen1 = auto1;
    this.imagen2 = auto2;
    this.imagen3 = auto3;
    this.hitbox = hitbox;
  }

  dibujar() {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
        image(this.imagen2, this.posX, this.posY, this.tamx, this.tamy);
      }
    } else {
      image(this.imagen1, this.posX, this.posY, this.tamx, this.tamy);
    }
    this.colisiones();
  }

  moverDerecha() {
    this.dir = this.DERECHA
      this.posX+=3;
  }
  moverIzquierda() {
    this.dir = this.IZQUIERDA;
    this.posX-=3;
  }

  teclaPresionada() {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        this.moverDerecha();
      } else if (keyCode == LEFT_ARROW) {
        this.moverIzquierda();
      }
    }
  }

  colisiones() {
    if (this.posX + this.tamx > this.hitbox.posx0 && this.posX < this.hitbox.posx0 + this.hitbox.tamxobstaculo &&
      this.posY + this.tamy > this.hitbox.posy0 && this.posY < this.hitbox.posy0 + this.hitbox.tamyobstaculo) {
      image(this.imagen3, this.posX, this.posY, this.tamx, this.tamy);
    }
  }
}
