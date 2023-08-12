//https://youtu.be/r8aeRYqJLz0
int [] pantallaq = new int [16];
PImage [] pantalla = new PImage[pantallaq.length];
PFont fuente;
String [] texto;
int num;
int numeroactual=0;


void setup() {
  size(600, 600);
  fuente=loadFont("FK.vlw");
  textFont(fuente);
  texto= loadStrings("textos.txt");
  for (int j=0; j<texto.length; j++) {
    texto[j]= texto[j].replaceAll("\\\\n", "\n");
  }
  for (int i=0; i<pantallaq.length; i++) {
    pantalla[i]= loadImage("gecamino" + i + ".jpg");
  }
}


void draw() {
  if (numeroactual<pantallaq.length) {
    imagexto(numeroactual);
  }
  if (numeroactual==pantallaq.length + 1) {
    numeroactual=0;
  }
  fill(0);
  if (numeroactual==3 || numeroactual==4) {
    float dst = dist(width/2, height/2, mouseX, mouseY);
    float maxdst = dist(0, 0, 2/width, height/2);
    float Color = map(dst, 0, maxdst, 10, 50);
    fill(Color);
    rect(100, 450, 50, 50);
    rect(450, 450, 50, 50);
    fill(255);
    textSize(35);
    text("A", 112, 487);
    text("B", 465, 487);
  }
  if (numeroactual==9 || numeroactual==12 || numeroactual==15) {
    float dst = dist(width/2, height/2, mouseX, mouseY);
    float maxdst = dist(0, 0, 2/width, height/2);
    float Color = map(dst, 0, maxdst, 10, 50);
    fill(Color);
    rect(225, 500, 150, 50);
    fill(255);
    textSize(35);
    text("Reiniciar", 236, 540);
  }
}

void mousePressed() {
 muchaspantallas();
}
