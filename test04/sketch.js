let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  // 回転角度を1°ずつ増やす
  angle += 1;

  push();  // ここから
  // 原点をキャンバスの中央に移動
  translate(width / 2, height / 2);

  // 原点を中心にキャンバスを回転
  rotate(angle);

  // キャンバス中央を基準点として正方形を描画
  square(0, 0, 80);

  pop();   // ここまで（もとに戻す）

  circle(width / 2, height * 5 / 6, 80);  // 元の座標系で位置指定
}