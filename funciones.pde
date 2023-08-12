void muchaspantallas() {
  if (numeroactual==15) {
    if (muchosbotones(450, 500, 450, 500, 1)) {
      numeroactual++;
    }
  }
  if (numeroactual==0) {
    if (muchosbotones(245, 395, 240, 290, 1)) {
      numeroactual++;
    }
    if (muchosbotones(225, 375, 300, 350, 1)) {
      numeroactual=15;
    }
  } else {
    if (numeroactual==9 || numeroactual==12 || numeroactual==15) {
      if (muchosbotones(0, 600, 0, 600, 1)) {
        numeroactual=0;
      }
    } else {
      if (numeroactual==3) {
        if (muchosbotones(100, 150, 450, 500, 1)) {
          numeroactual=10;
        }
        if (muchosbotones(450, 500, 450, 500, 1)) {
          numeroactual++;
        }
      } else {
        if (numeroactual==4) {
          if (muchosbotones(100, 150, 450, 500, 1)) {
            numeroactual=13;
          }
          if (muchosbotones(450, 500, 450, 500, 1)) {
            numeroactual++;
          }
        } else {
          if (muchosbotones(0, 600, 0, 600, 1)) {
            numeroactual++;
          }
        }
      }
    }
  }
}


boolean muchosbotones(int posx01, int posx02, int posy01, int posy02, int num0) {
  int posx1 = posx01;
  int posx2 = posx02;
  int posy1 = posy01;
  int posy2 = posy02;
  num = num0;

  for (int i=0; i<15; i++) {
    pantallaq[i]=1;
    pantallaq[num]=0;
  }

  return (mouseX>posx1 && mouseX<posx2 && mouseY >posy1 && mouseY<posy2);
}
