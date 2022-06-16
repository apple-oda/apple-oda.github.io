// 項⽬の内容
const textList = ["当たり", "ハズレ", "もう⼀回"];
// 選ばれた項⽬
let textResult;
// --- 初回更新 ---------------------------------------------------
function setup() {
    // 表⽰するキャンバスを全画⾯に
    createCanvas(windowWidth,windowHeight);
    // ⽂字の基準点を上下左右の中央に
    textAlign(CENTER, CENTER);
    // ⽂字の⼤きさの設定
    textSize(200);
    // 項⽬の結果をランダムにセット
textResult = random(textList);
}
// --- 1秒間に60回更新 ---------------------------------------------
function draw() {
    // 背景を⾚⾊に
    background("#e02020");
    // 塗りつぶしは⽩⾊に
    fill("#FFFFFF");
    // 境界線も⽩⾊に
    stroke("#FFFFFF");

    // 選ばれた項⽬の表⽰
    text(textResult, width / 2, height / 2);
    // クリックされている間の処理
    if (mouseIsPressed == true) {
        // 項⽬の結果をランダムにセット
        textResult = random(textList);
    }
}