const umaMax = 6;        // 出走頭数
let img = [umaMax];      // 画像イメージ配列
let x = [umaMax];        // 馬の移動

// 画像読込
function preload() {
  for(let i=0;i<umaMax;i++) {
    // 画像データを画像イメージ配列に保存
    img[i] = loadImage("./data/uma" + (i+1) + ".png");  
  }
}

// 初期設定
function setup() {
  //最初に1回だけ実行する処理を記述する
  createCanvas(700, 400);                 // 描画領域の作成
  umaInitialize();                        // 馬データ初期化
  noLoop();                               // draw()関数を1回のみ
}

// 繰り返し処理(再描画の処理)
function draw() {
  background("#d8ffdc");                // 背景色の設定
  
  let textY = 120;
  for(let i=0;i<umaMax;i++) {
    x[i] = x[i] - ransu();                // 馬の移動算出 
    image(img[i], x[i], i*40, 100, 100);  // 馬の表示
    // 馬のゴール判定
    if(x[i]<=0) {
      // 1着馬の表示と繰り返し処理終了
      textSize(100);                      // 1着馬の表示
      text("1着 " + (i + 1) + "番",200,textY);
      textY+=100;
      noLoop();
    }
  }
}

// 馬データ初期化
function umaInitialize() {
  for(let i=0;i<umaMax;i++){
    x[i] = 600;
  }  
}

// マウスをクリックしたら繰り返し処理再開
function mousePressed() {
  umaInitialize();
  loop();
}

// 乱数作成
function ransu() {
  // 0～9の乱数を5で掛け3で割り切れない数の場合進める
  // ※各馬の移動の幅を広げる為
  return ((Math.floor( Math.random()*10))*5)%3;
}