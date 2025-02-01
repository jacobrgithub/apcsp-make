var heading = 360;

updateScreen();

onEvent("rightButton", "click", function( ) {
  if (heading > 359) {
    heading = heading % 359;
  } else {
    heading = heading + 1;
  }
  setStyle("image1", "transform: rotate(" + (-heading) + "deg);");
  updateScreen();
});

onEvent("leftButton", "click", function( ) {
  if (heading < 2) {
    heading = 360;
  } else {
    heading = heading-1;
  }
  setStyle("image1", "transform: rotate(" + (-heading) + "deg);");
  updateScreen();
});

function updateScreen() {
  setProperty("headingOutput", "text", heading + "°");
  setStyle("image1", "transform: rotate(" + (-heading) + "deg);");
}
