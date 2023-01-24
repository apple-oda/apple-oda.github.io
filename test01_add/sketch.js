function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
}
function draw() {
    text("Bus Stop", 50, 50);

    // 車体
    fill("LightBlue");
    rect(mouseX-60, mouseY-40, 120, 80,10);

    // タイヤ
    fill("Gray");
    circle(mouseX-30, mouseY+40, 40);
    circle(mouseX+30, mouseY+40, 40);

    // 窓
    fill("White");
    rect(mouseX-55, mouseY-30, 20, 40,5);
    rect(mouseX-25, mouseY-30, 20, 30,5);
    rect(mouseX+5, mouseY-30, 20, 30,5);
    rect(mouseX+35, mouseY-30, 20, 30,5);

    // ライト
    if (mouseIsPressed) {
        fill("Yellow");
    }
    rect(mouseX-60, mouseY+15, 5, 10,5);
}
