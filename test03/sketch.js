// 反射数
let symmetry = 12;   
// 角度
let angle = 360 / symmetry;
// スライダー
let sizeSlider;

// --- 初回更新 ------------------------------------
function setup() { 
  createCanvas(710, 710);
  background(200);

  // ラジアンを使わず360度の度数法を使う
  angleMode(DEGREES);
  
  // ファイル保存ボタンの作成
  saveButton = createButton('保存');
  saveButton.mousePressed(saveFile);

  // スクリーンの全消去ボタンの作成
  clearButton = createButton('全消去');
  clearButton.mousePressed(clearScreen);

  // ブラシの太さのスライダー作成
  sizeSlider = createSlider(1, 32, 4, 0.1);
}

// ファイル保存の処理
function saveFile() {
  save('design.jpg');
}

// スクリーン全消去の処理
function clearScreen() {
  background(200);
}

// --- 1秒館に60回更新 --------------------------------------------------
function draw() {

  // 回転の原点をキャンバスの中心にする(初期状態は左上が原点)
  translate(width / 2, height / 2);

  // 原点が変更されたので原点に合わせてマウスの位置も修正
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;

  // 線を引くために1フレーム前の座標が必要
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;

  // ブラシの太さをスライダーから設定
  strokeWeight(sizeSlider.value());

  // マウスを押している間
  if (mouseIsPressed) {
    for (let i = 0; i < symmetry; i++) {
      // キャンバスを回転させる
      rotate(angle);

      // 線を引く
      line(mx, my, pmx, pmy);
      
      push(); // ここから
      // 反転
      scale(1, -1);
      // 反転した線も引く
      line(mx, my, pmx, pmy);
      pop();  // ここまでの間に設定変更したものはもとに戻る
    }
  }
}
