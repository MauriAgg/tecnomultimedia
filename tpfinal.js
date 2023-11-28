let pantalla = [];
let texto;
let fondo1;
let fondo2;
let auto1;
let auto2;
let auto3;
let obstaculo0;
let aventura;

function preload() {
  for (let i = 0; i < 15; i++) {
    pantalla[i] = (loadImage('data/gecamino' + i + '.jpg'));  //aventura
  }
  texto = loadStrings('data/textos.txt'); //texto
  
  fondo1 = loadImage('data/calle0.jpg');  //juego, de aca a abajo
  fondo2 = loadImage('data/calle1.jpg');
  auto1 = loadImage('data/taxi0.jpg');
  auto2 = loadImage('data/taxi1.jpg');
  auto3 = loadImage('data/taxi2.jpg');
  obstaculo0 = loadImage('data/obstaculo0.jpg');
}


function setup() {
  createCanvas(700, 600);
  aventura = new Aventura();
}


function draw() {
  aventura.dibujarAventura();
}
