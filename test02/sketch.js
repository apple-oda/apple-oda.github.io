// 項目の内容
const textList = ["当たり", "ハズレ", "もう一回"];
// 選ばれた項目
let textResult;

// --- 初回更新 ---------------------------------------------------
function setup() {
    // 表示するキャンバスを全画面に
    createCanvas(windowWidth,windowHeight);

    // 文字の基準点を上下左右の中央に
    textAlign(CENTER, CENTER);
    // 文字の大きさの設定
    textSize(200);

    // 項目の結果をランダムにセット
    textResult = random(textList);
}

// --- 1秒間に60回更新 ---------------------------------------------
function draw() {
    // 背景を赤色に
    background("#e02020");
    // 塗りつぶしは白色に
    fill("#FFFFFF");
    // 境界線も白色に
    stroke("#FFFFFF");
  
    // 選ばれた項目の表示
    text(textResult, width / 2, height / 2);

    // クリックされている間の処理
    if (mouseIsPressed == true) {
        // 項目の結果をランダムにセット
        textResult = random(textList);
    }
}