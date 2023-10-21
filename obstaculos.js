class obstaculos {
  constructor(tiempoVarh) {
    this.tiempoVarh = tiempoVarh;
    this.imagen0 = obstaculo0;
    this.imagen1 = obstaculo01;
    this.taminicialx = 0;
    this.taminicialy = 0;
    this.posinicialy = 460;
    //auto derecho
    this.posizqx = 425;
    this.tamautox = 0;
    this.tamautoy = 0;
    this.posy0 = 460;
    this.posx0 = 630;
  }

  dibujarAutos() {
    this.aparicionAutos();
    this.actualizarAutos();
  }

  aparicionAutos() {
    if (this.tiempoVarh.tiempo30>3 && this.tiempoVarh.tiempo30<7) {
      image(this.imagen0, this.posx0, this.posy0, this.tamautox, this.tamautoy);
      this.tamautox +=2;
      this.tamautoy +=1;
      this.posy0 +=2;
    }
    if (this.tiempoVarh.tiempo30>13 && this.tiempoVarh.tiempo30<17) {
      image(this.imagen1, this.posizqx-this.tamautox, this.posy0, this.tamautox, this.tamautoy);
      this.tamautox +=2;
      this.tamautoy +=1;
      this.posy0 +=2;
    }
    if (this.tiempoVarh.tiempo30>21 && this.tiempoVarh.tiempo30<25) {
      image(this.imagen0, this.posx0, this.posy0, this.tamautox, this.tamautoy);
      this.tamautox +=2;
      this.tamautoy +=1;
      this.posy0 +=3;
    }
  }

  actualizarAutos() {
    if (this.tiempoVarh.tiempo30==7) {
      this.posy0=this.posinicialy;
      this.tamautox=this.taminicialx;
      this.tamautoy=this.taminicialy;
    }
    if (this.tiempoVarh.tiempo30==17) {
      this.posy0=this.posinicialy;
      this.tamautox=this.taminicialx;
      this.tamautoy=this.taminicialy;
    }
    if (this.tiempoVarh.tiempo30==25) {
      this.posy0=this.posinicialy;
      this.tamautox=this.taminicialx;
      this.tamautoy=this.taminicialy;
    }
  }
}
