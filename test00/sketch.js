// おみくじの内容
const omikuji = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"];
// おみくじの結果
let omikujiResult;

function setup() {
    createCanvas(windowWidth,windowHeight);

    // 文字の基準点を上下左右の中央に
    textAlign(CENTER, CENTER);
    // 文字の大きさの設定
    textSize(100);

    // おみくじの結果をランダムにセット
    omikujiResult = random(omikuji);
}

function draw() {
    background("#e02020");

    fill("#FFFFFF");
    stroke("#FFFFFF");
  
    // おみくじの結果を表示
    text(omikujiResult, width / 2, height / 2);

    // クリックされている間の処理
    if (mouseIsPressed == true) {
        // おみくじの結果をランダムにセット
        omikujiResult = random(omikuji);
    }
}