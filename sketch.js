function setup() {
  createCanvas(500, 500);
}

let olhoX;
let olhoY;
let pupilaV;

function draw() {
  background("#14C700");

  fill('rgb(63,63,63)');
  quad(100, 130, 100, 0, 350, 0, 350, 130);
  quad(75, 150, 75, 130, 385, 130, 385, 170);
  fill('#795548');
  quad(100, 130, 100, 105, 350, 105, 350, 130);
  fill('white');
  square(50, 150, 300);
  fill('rgb(148,229,255)');
  quad(75, 450, 75, 380, 125, 380, 125, 450);
  quad(275, 450, 275, 380, 325, 380, 325, 450);
  fill('black');
  circle(100, 365, 60);
  circle(300, 365, 60);
  line(50, 415, 350, 415);
  line(50, 413, 350, 413);
  fill('white');
  quad(350, 150, 405, 175, 405, 435, 350, 450);
  //circle(110, 355, 30);
  //circle(310, 355, 30);

  olhoX = map(mouseX, 0, 500, 85, 115)
  olhoY = map(mouseY, 0, 500, 350, 380)

if(mouseIsPressed){
circle(olhoX, olhoY, 30);
circle (olhoX+200, olhoY, 30);
} else {
  circle(110, 355, 30);
  circle(310, 355, 30);}

 if(mouseIsPressed){
 console.log(mouseX, mouseY);
}
}
