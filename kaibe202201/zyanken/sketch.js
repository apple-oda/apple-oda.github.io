let widthCenter;
let heightCenter;

// じゃんけん画像
let img = new Array(3);   // 格納変数

// 指示
const sijis = ["勝って","負けて","引き分けて"]; // 格納変数
let sijiRandom;     // 乱数の値を格納する変数

// コンピュータ乱数
let pcRandom;       // 乱数の値を格納する変数

// ボタン
let button1;        // チョキのボタン
let button2;        // ぐーのボタン
let button3;        // ぱーのボタン

// カウント
let goodCount=0;    // 正解数をカウント
let noCount=0;      // 間違えをカウント

// 残りカウント
let loopCountMax = 3000;

// 画像の読込
function preload() {
  const textLines = ["janken_choki.png","janken_gu.png","janken_pa.png"];
  for(let i=0;i<img.length;i++){
    img[i] = loadImage(textLines[i]);
  }
}

// 最初に１回実行される関数
function setup() {
  // キャンバスの作成
  createCanvas(windowWidth, windowHeight);
  // 画面の中心を設定
  widthCenter = width / 2;      // 横
  heightCenter = height / 2;    // 縦
  // 次の問題作成
  nextProblem();
  //ボタンの作成   参考URL http://blog.livedoor.jp/reona396/archives/55625495.html
  button1 = createButton("ちょき");         // ボタンの作成
  button1.mousePressed(function() {         // ボタンが押された時に実行される関数を設定
    buttonPressed(0)
  });  
  button1.position(widthCenter - 100, 550); // ボタンの位置を設定

  button2 = createButton("ぐー");
  button2.mousePressed(function() {
    buttonPressed(1)
  });  
  button2.position(widthCenter, 550);

  button3 = createButton("ぱー");
  button3.mousePressed(function() {
    buttonPressed(2)
  });  
  button3.position(widthCenter + 100, 550);
}

// 繰り返し実行される関数
function draw() {
 // 画面クリア
 background(255);
 // 点数
 textSize(30);
 textAlign(CENTER);
 text('正解='+goodCount+"  " + "不正="+noCount,widthCenter, 50);    
 // お題を表示
 textSize(30);                                             // 文字サイズの指定
 textAlign(CENTER);                                        // テキスト描画位置の指定
 text("指示＝("+sijis[sijiRandom]+")", widthCenter, 150);  // テキスト描画
 // 画像を表示
  image(img[pcRandom], widthCenter  - (img[pcRandom].width / 2), 
                       heightCenter - (img[pcRandom].height / 2)); 
  // 残りカウント表示
  loopCountMax--;
  textSize(30);
  textAlign(LEFT);
  text('残り='+loopCountMax,300, 50);    
  // 終了判定
  if(loopCountMax<=0) {
    button1.hide();
    button2.hide();
    button3.hide();
    // 終了表示
    textSize(50);
    textAlign(LEFT);
    text('（終了）',300, 150);
    // ループ終了 
    noLoop();  
  }
}

// ボタン処理
function buttonPressed(user){
  let result;
  // じゃんけん判定
  switch(sijiRandom){
    case 0:   // 勝って
      result = ((user==0 && pcRandom==2) || (user==1 && pcRandom==0) || (user==2 && pcRandom==1));
      break;
    case 1:   // 負けて
      result = ((user==0 && pcRandom==1) || (user==1 && pcRandom==2) || (user==2 && pcRandom==0));
      break;
    case 2:   // 引き分けて
      result = (user==pcRandom);
      break;
  }
  // 点数カウント
  if (result) {
    goodCount++;
  } else {
    noCount++;
  }
  // 次の問題作成
  nextProblem();
}

// 次の問題作成
function nextProblem() {
  // 指示
  sijiRandom = floor(random(3));  //乱数（0:勝って、1:負けて、2:引き分けて） 
  // コンピュータの手を乱数で作成
  pcRandom = floor(random(3));    //乱数（0:ちょき、1:ぐー、2:ぱー）を設定
}

