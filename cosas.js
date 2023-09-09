function vallas() {
  let vallaIzqx=700;
  let tamInicialx=0;
  let tamInicialy=0;
  let posInicialy=500;
  if (tiempo90<25 && tiempo90>21) {
    image(valla, posx0, posy0, tamvallax, tamvallay);
    tamvallax +=2;
    tamvallay +=1;
    posy0 +=2;
  }
  if (tiempo90==21) {
    posy0=posInicialy;
    tamvallax=tamInicialx;
    tamvallay=tamInicialy;
  }
  if (tiempo90<17 && tiempo90>13) {
    image(valla, vallaIzqx-tamvallax, posy0, tamvallax, tamvallay);
    tamvallax +=2;
    tamvallay +=1;
    posy0 +=2;
  }
  if (tiempo90==13) {
    posy0=posInicialy;
    tamvallax=tamInicialx;
    tamvallay=tamInicialy;
  }
  if (tiempo90<10 && tiempo90>6) {
    image(valla, posx0, posy0, tamvallax, tamvallay);
    tamvallax +=2;
    tamvallay +=1;
    posy0 +=2;
  }
  if (tiempo90==6) {
    posy0=posInicialy;
    tamvallax=tamInicialx;
    tamvallay=tamInicialy;
  }
}


function score0() {
  fill(0);
  rect(550, 10, 492, 52);
  fill(255);
  textSize(50);
  text('000'+score, 695, 62);
  if (25==50/2) {
    score +=1;
  }
  if (tiempo90==15) {
    score +=25;
  }
  if (tiempo90==0) {
    noLoop();
  }
}

function cuentaAtras() {
  let temposeg = millis();
  if (temposeg - ultimoseg >= 1000 && tiempo90 > 0) {
    tiempo90 -=1;
    ultimoseg = temposeg;
  }
  textSize(46);
  text(tiempo90, 755, 190);
  if (tiempo90<=0) {
    tiempo90 = 0;
  }
}

function reiniciar() {
  tiempo90 = 30;
  ultimoseg = 0;
  si = true;
  no = false;
  izq = false;
  der = false;
  score = 0;
  posx = 800;
  posx0 = 800;
  posy0 = 500;
  tamvallax = 0;
  tamvallay = 0;
  vel=0;
  tiempoCorre=true;
  reiniciarT=millis();
  loop();
}

function outro() {
  textFont(fuente);
  if (tiempo90==0) {
    image(pntazul, 0, 0, 1600, 950);
    stroke(255);
    fill(0, 0, 245);
    rect(750, 300, 100, 50);
    fill(255);
    textSize(10);
    text('Reiniciar', 760, 330);
    tiempoCorre=false;
  }
}

function juego() {
  textFont(fuente);
  if (frameCount% 30>15) {
    image(pista1, 0, 0, 1600, 1000);
  } else {
    image(pista2, 0, 0, 1600, 1000);
  }
  if (der) {
    posx += 4;
    image(auto2, posx, posy, tamx, tamy);
  } else if (izq) {
    posx -= 4;
    image(auto2, posx, posy, tamx, tamy);
  } else {
    image(auto1, posx, posy, tamx, tamy);
  }
  vallas();
  score0();
  cuentaAtras();
  outro();
  tiempo();
  velocidad();
  if (posx + tamx > posx0 && posx < posx0 + tamvallax &&
    posy + tamy > posy0 && posy < posy0 + tamvallay) {
    image(auto3, posx, posy, tamx, tamy);
    vel -=3;
    score -=8;
  }
}

function pntPrincipal() {
  textFont(fuente);
  image(pntazul, 0, 0, 1600, 950);
  fill(255);
  textSize(12);
  text('Comenzar', 765, 880);
  text('Instrucciones', 540, 880);
  text('Créditos', 970, 880);
  if (mouseX>550 && mouseX<650 && mouseY>850 && mouseY<900) {
    fill(0, 0, 245);
    stroke(255);
    rect(500, 250, 600, 400);
    fill(255);
    textSize(18);
    text('-Usa las flechas izquierda \n y derecha para cambiar de \n dirección y así \n evitar los obstáculos', 510, 400);
  }
  if (mouseX>950 && mouseX<1050 && mouseY>850 && mouseY<900) {
    fill(0, 0, 245);
    stroke(255);
    rect(500, 250, 600, 400);
    fill(255);
    textSize(18);
    text('-Código por: Aguirre Mauricio \n\n-Juego original: Pole Position \n\n-Consola original: Atari', 510, 400);
  }
}

function tiempo() {
  let timer = millis() - reiniciarT;
  if (tiempoCorre) {
    segundos = int(timer/1000);
    miliseg =int (timer % 1000/10);
    textSize(40);
    fill(255);
    text(segundos, 1300, 190);
    text(miliseg, 1450, 190);
  }
}
function velocidad(){
  text(vel,1280,245);
  if(vel<200){
    vel +=1;
  } 
}
