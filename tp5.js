//https://www.youtube.com/watch?v=vI3nhgUt6t4
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
  juego0 = new Juego();
}


function draw() {
  background(200);
 if (juego0.juegoIniciado) {
    juego0.mostrarJuego();
  } else {
    juego0.pantallaInicio();
  }
}
