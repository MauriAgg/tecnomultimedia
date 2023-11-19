class Obstaculo {
  constructor(tiempoVariable) {
    this.tiempoVariable = tiempoVariable;
    this.imagen0 = obstaculo0;
    this.imagen1 = obstaculo01;
    this.taminicialx = 0;
    this.taminicialy = 0;
    this.posinicialy = 460;
    this.posxizquierda = 425;
    this.tamxobstaculo = 0;
    this.tamyobstaculo = 0;
    this.posy0 = 460;
    this.posx0 = 630;
  }

  dibujarObstaculos() {
    this.obstaculo1();
    this.obstaculo2();
    this.obstaculo3();
  }

  obstaculo1() {
    if (this.tiempoVariable.tiempo30 > 3 && this.tiempoVariable.tiempo30 < 7) {
      image(this.imagen0, this.posx0, this.posy0, this.tamxobstaculo, this.tamyobstaculo);
      this.tamxobstaculo += 2;
      this.tamyobstaculo += 1;
      this.posy0 += 2;
    }
    // Resetear la posición a la inicial
    if (this.tiempoVariable.tiempo30 == 7) {
      this.posy0 = this.posinicialy;
      this.tamxobstaculo = this.taminicialx;
      this.tamyobstaculo = this.taminicialy;
    }
  }

  obstaculo2() {
    if (this.tiempoVariable.tiempo30 > 13 && this.tiempoVariable.tiempo30 < 17) {
      image(this.imagen1, this.posxizquierda - this.tamxobstaculo, this.posy0, this.tamxobstaculo, this.tamyobstaculo);
      this.tamxobstaculo += 2;
      this.tamyobstaculo += 1;
      this.posy0 += 2;
    }
    // Resetear la posición a la inicial
    if (this.tiempoVariable.tiempo30 == 17) {
      this.posy0 = this.posinicialy;
      this.tamxobstaculo = this.taminicialx;
      this.tamyobstaculo = this.taminicialy;
    }
  }

  obstaculo3() {
    if (this.tiempoVariable.tiempo30 > 21 && this.tiempoVariable.tiempo30 < 25) {
      image(this.imagen0, this.posx0, this.posy0, this.tamxobstaculo, this.tamyobstaculo);
      this.tamxobstaculo += 2;
      this.tamyobstaculo += 1;
      this.posy0 += 3;
    }
    // Resetear la posición a la inicial
    if (this.tiempoVariable.tiempo30 == 25) {
      this.posy0 = this.posinicialy;
      this.tamxobstaculo = this.taminicialx;
      this.tamyobstaculo = this.taminicialy;
    }
  }
}
