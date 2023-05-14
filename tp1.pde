
int segundos = 1;
int pantalla = 0;

PImage zero0;
PImage zero3;
PImage zero4;
PImage reset;
PFont baitmongol;

float y =200;
float x =0;
float speed =3;

void setup() {
  size(640, 480);
   background(0);
  zero0 = loadImage("zero0.jpg");
  zero3 = loadImage("zero3.jpg");
  zero4 = loadImage("zero4.jpg");
  reset = loadImage("reset.jpg");
  baitmongol = loadFont("baitmongol.vlw");
  textFont(baitmongol, 30);
}

void draw() {
 


  if (pantalla == 1) {
    image(zero0, 0, 0, width, height);
    fill(255);
    text("El Mitsubishi A6M Zero\n fue un caza usado por el Servicio Aéreo \n de la Armada Imperial Japonesa \n en la Segunda Guerra Mundial", x, 200);
    x +=1;
    if (x > width) {
      x = 0;
    }
  } else if (pantalla==2) {
    image(zero4, 0, 0, width, height);
    fill(0);
    textFont(baitmongol, 30);
    textAlign(CENTER);
    text("Tuvo su primer vuelo \n en el año 1939 y estuvo al servicio hasta 1945", width/2, y);
    y += speed;
    if (y > height || y < 0) {
      speed *= 1;
    }
  } else if (pantalla == 3) {
    image(zero3, 0, 0, width, height);
    textFont(baitmongol, 30);
    fill(0);
    text("Este avión tiene una longitud \n de 9,06m y una envergadura de 11m", x, height/2);
    x += 1;
    if (x > width/2) {
      x = width/2;
    }

    image(reset, 600, 440, 40, 40);
  }

  if (frameCount%60==0) {
    segundos++;
  }
  if (segundos >= 3) {
    segundos = 0;
    pantalla++;
  }
  
}

void mousePressed() {
  if (mouseX > 600 && mouseX < 640 && mouseY > 440 && mouseY < 480) {
    
    segundos = 1;
    pantalla = 1;
    x = 0;
    y = 200;
    speed = 3;
    
  }
}
