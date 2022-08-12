function setup(){
  createCanvas(windowWidth,windowHeight);
  background(220);
}

function draw() {
  text("hello world!", 50,50)
  if (mouseIsPressed) {
      fill(0);
  } else {
      fill(255);
  }
  ellipse(mouseX,mouseY,80,80);
}