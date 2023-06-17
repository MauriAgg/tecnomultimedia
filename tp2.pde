// https://youtu.be/e9hahOzfJuI

float posXcuad = 575;
float posYcuad = 175;
PImage optica;
float tamX = 50;
float tamY = 50;
int blanco =0;
int negro = 255;

float anchoDelCuadrado(float tamX) {
  float anchocuad = 25 + tamX/2;
  return anchocuad ;
}

void setup() {
  size(800, 400);
  background(0);
  optica = loadImage("ilusion_optica 1.jpg");
  if (tamX == 400/8) {
    println("El ancho del cuadrado es" + tamX);
  }
}


void draw() {
  strokeWeight(0);
  lineas();
  fill(0);
  rect(575, 175, 50, 50);
  strokeWeight(1);
  cuadrados();
  cuadrados2();
  image(optica, 0, 0, 400, 400);
  //interacción del color del cuadrado central
  float degrade = map(mouseY, 0, height, blanco, negro);
  if (mouseX >width/2) {
    fill(degrade);
    rect(posXcuad, posYcuad, tamX, tamY);
  }
}
