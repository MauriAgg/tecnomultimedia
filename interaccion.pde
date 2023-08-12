void imagexto(int pantallas0) {
  image(pantalla[pantallas0], 0, 0);
  fill(255, 150);
  if (numeroactual != 0 && numeroactual != 15) {
    rect(10, 10, 570, 100);
    fill(0);
    textSize(18);
    text(texto[pantallas0], 20, 20, 500, 200);
  } else if (numeroactual==0) {

    textSize(40);
    fill(255);
    text("El guardián entre el centeno", 60, 150);
    rect(225, 225, 150, 50);
    rect(225, 300, 150, 50);
    fill(0);
    textSize(30);
    text("Empezar", 245, 260);
    text("Créditos", 250, 335);
  } else if (numeroactual==15) {
    textSize(18);
    fill(255,150);
    rect(10,10,570,100);
    fill(0);
    text(texto[15],20,20,500,200);
  }
 if(numeroactual==0 && mouseX>225 && mouseX<375 && mouseY>300 && mouseY<350){
    background(0);
    fill(255);
    text("Código por: Aguirre Mauricio\n\nImágenes por: Aguirre Mauricio\n\nAutor de la obra: J.D.Salinger", 95, 200);
}
}
