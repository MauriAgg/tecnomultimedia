//https://youtu.be/gmmZygCb7x4?si=YOJTGiBfT1ox_7Za
let fuente;
let fondo1;
let fondo2;
let auto1;
let auto2;
let auto3;
let obstaculo0;
let obstaculo01;
let pntinicio;
let juego0;
let iniciar;
let comenzarJuego = false;

function preload() {
  fondo1= loadImage('data/calle0.jpg');
  fondo2= loadImage('data/calle1.jpg');
  auto1= loadImage('data/taxi0.jpg');
  auto2= loadImage('data/taxi1.jpg');
  auto3= loadImage('data/taxi2.jpg');
  obstaculo0= loadImage('data/obstaculo0.jpg');
  obstaculo01= loadImage('data/obstaculo1.jpg');
  pntinicio= loadImage('data/pntprincipal.jpg');
  fuente= loadFont('data/retro.ttf');
}


function setup() {
  createCanvas(1140, 950);
  juego0 = new juego();
  iniciar = new inicio(juego0);
}


function draw() {
  background(200);
 if (comenzarJuego) {
    juego0.dibujarJuego();
  } else {
    iniciar.dibujar();
  }
}
