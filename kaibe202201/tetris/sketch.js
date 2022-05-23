// let fromColor, toColor, radius
// let speed =10;
// let mouth=1;
//
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0);
//     ellipseMode(RADIUS);
//     noFill();
// }
//
// function draw() {
//
//     background(33);     // 背景をグレーで塗りつぶす
//
//     fill(255, 255, 0);
//     ellipse(mouseX, mouseY, 120, 120);
//     fill(0);
//     ellipse(mouseX-40, mouseY-60, 10, 15);   // 左目
//     ellipse(mouseX+40, mouseY-60, 10, 15);   // 右目
//     noFill();
//     fill(0);
//     if(speed <=10 || speed >=60) mouth = mouth * (-1);
//     ellipse(mouseX,mouseY+50, 80, speed-=mouth);
// }

let i = 10;
speed = 1 // speed of mouth opening & closing

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(0);
}

function draw() {

    background(33);     // 背景をグレーで塗りつぶす

    text("hello world!", 50, 50)
    fill(mouseX);
    ellipse(mouseX, mouseY, 200, 200);
    fill(0);
    if(i < 10 || i > 45) speed = speed*(-1); 
    arc(mouseX, mouseY, 200, 200, (i-=speed)+300, ((i-=speed))*-1);
    //arc(mouseX, mouseY, 200, 200, 315, 45);
    //arc(mouseX, mouseY, 200, 200, 350, 10);

//    350 - 315 = 35
//    45 - 10 = 35 

}
    // 

// //   //オブジェクトの色をランダム（透明度70）
// //   fill(random(255),random(255),random(255),70);
// //   //キャンバスの中心に直径100pxの丸を描画
// //   ellipse(random(width),random(height),random(100));