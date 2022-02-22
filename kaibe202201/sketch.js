i = 1.85 // upper mouth radian
x = 0.2 // lower mouth radian
speed = 0.01 // speed of mouth opening & closing

function setup() {
    createCanvas(windowWidth, windowHeight);
    // background(220);
    background(0);
}

function draw() {
    text("hello world!", 50, 50)
    if (!mouseIsPressed) {
        // fill(255);
        fill(mouseX, mouseY, 200, 200);
        ellipse(mouseX, mouseY, 200, 200)
        fill(0)
        if (i >= 2 || i <= 1.8) speed = speed*(-1) 
        arc(mouseX, mouseY, 200, 200, (i+=speed)*PI, (x-=speed)*PI, PIE);
    }
    // ellipse(mouseX,mouseY,80,80);
}