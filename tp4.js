//https://youtu.be/s0mxBKVqzeE?si=PZYWvDPv7UT1T-QA
let fuente;
let pista1;
let pista2;
let auto1;
let auto2;
let auto3;
let valla;
let pntazul;
let posx = 800;
let posy = 800;
let tamx = 316;
let tamy = 94;
let posx0 = 800;
let posy0 = 500;
let tamvallax = 0;
let tamvallay = 0;
let tiempo90 = 30;
let ultimoseg = 0;
let segundos = 0;
let miliseg = 0;
let vel = 0;
let intervalo;
let si = true;
let no = false;
let izq = false;
let der = false;
let creditos = false;
let tiempoCorre = true;
let colision =true;
let reiniciarT;
let score = 0;
let estado = "comenzar";
function preload() {
  pista1= loadImage('data/pista0.jpg');
  pista2= loadImage('data/pista1.jpg');
  auto1= loadImage('data/car0.jpg');
  auto2= loadImage('data/car1.jpg');
  auto3= loadImage('data/car2.jpg');
  valla= loadImage('data/obstacle.jpg');
  pntazul= loadImage('data/bluestart.jpg');
  fuente= loadFont('data/retro.ttf');
}
function setup() {
  createCanvas(1600, 1000);
  image(pista1, 0, 0);
  reiniciarT =millis();
}
function draw() {
  if (estado=="comenzar") {
    pntPrincipal();
  } else {
    juego();
  }
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (tiempo90>0) {
      der = true;
    }
  } else if (keyCode === LEFT_ARROW) {
    if (tiempo90>0) {
      izq = true;
    }
  }
}
function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    if (tiempo90>0) {
      der = false;
    }
  } else if (keyCode === LEFT_ARROW) {
    if (tiempo90>0) {
      izq = false;
    }
  }
}
function mousePressed() {
  if (estado=="comenzar") {
    if (mouseX>750 && mouseX<850 && mouseY>850 && mouseY<900) {
      estado="comenzarJuego";
    }
  }
  if (mouseX>750 && mouseX<850 && mouseY>300 && mouseY<350) {
    reiniciar();
  }
}
