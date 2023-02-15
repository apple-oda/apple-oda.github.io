// プレイヤーがページのマウスダウンかXキーの押し下げでジャンプする。
// => ジャンプ:上昇しその後下降、着地する。
// => アニメーションの変更がともなう

// プレイヤーのスプライト
let bernieSp;
// プレイヤーのアニメーション
let bernieWalkAnim;
let bernieJumpAnim;

// 地面スプライト
let groundSp;
// 画面左に配置する壁スプライト
let leftWallSp;
// 雲のイメージ
let cloudImg;
// 雲のグループ
let cloudGroup;
// 雲を生成する頻度 => 1秒に1回
// ゲームの難易度に関係する
const spawnObstacleInterval = 1000;
// 障害物を生成した時間をメモする変数
let lastSpawnTime;

// 自由に調整できるグローバルパラメータ
const GRAVITY = 1;
const JUMP = 8;

function setup() {
    new Canvas(800, 400);
    // プレイヤースプライトを作成
    bernieSp = new Sprite();
    bernieSp.width = 400;
	bernieSp.height = 400;
    // アニメーションを２つ追加
    bernieSp.addAnimation('running', 'assets_jump/bernie-walk-0.png', 4);
    bernieSp.addAnimation('jumping', 'assets_jump/bernie-jump.png');
    bernieSp.scale = 0.2;
    // 歩きのアニメーションが速いので少し間引く
    bernieSp.animation.frameDelay = 12;
    bernieSp.debug = true;
    // 地面の上、少し左に配置
    bernieSp.position.x = width / 4;
    bernieSp.position.y = height - 30;
     // 当たり判定に使用する地面スプライト(イメージは追加しない)
     groundSp = new Sprite(width / 2, height, width, 30);
     groundSp.collider = 'static';
     // 後で組み込む地面イメージの色に合わせて、溶け込むようにする
     groundSp.shapeColor = color(121, 70, 32);
     groundSp.debug = true;
     // 当たり判定に使用する左の壁スプライト。実際は左端の外の、見えない位置に置く
    leftWallSp = new Sprite(0, height / 2, 10, height, 'static');
     // 雲のグループ
     cloudGroup = new Group();
     // タイマーをスタート
     lastSpawnTime = millis();
}
function draw() {
    clear();
	bernieSp.debug = mouse.pressing();
     // 背景の青
    background(0, 153, 255);
    update();
    drawSprites(); 
}
function update() {
// まず落下させる
bernieSp.velocity.y += GRAVITY;
// 地面と衝突したら、それ以上落ちない
if (bernieSp.collide(groundSp)) {
    bernieSp.changeAnimation("running");
    bernieSp.velocity.y = 0;
}
// Xキーか左マウスボタンの押し下げでジャンプ
if (kb.pressing("x") || mouse.pressing(LEFT) ) {
    bernieSp.changeAnimation("jumping");
    // -JUMP分だけ上昇
    bernieSp.velocity.y = -JUMP;
}
// 障害物を生成
spawnObstacle();
    // プレイヤースプライトがいずれかの障害物と重なったら、
    // hitObstacle()コールバック関数が呼び出される
    //bernieSp.overlap(cloudGroup, hitObstacle);

    // 左の壁がいずれかの障害物と重なったら、
    // deleteObstacle()コールバック関数が呼び出される
    //leftWallSp.overlap(cloudGroup, deleteObstacle);
}
function spawnObstacle() {
    // 直近の計測時からspawnObstacleIntervalだけ経過したら
    if (millis() > lastSpawnTime + spawnObstacleInterval) {
		const sp = new Sprite(random(width), random(height - 30), 200, 200, "rectangle");
        sp.addimg('assets/cloud.png');
        sp.scale = 0.2;
        // 右から左に進むように負のスピードを与える
        sp.velocity.x = -4;
        sp.debug = false;
        // 障害物グループに追加
        cloudGroup.add(sp);
         // タイマーは障害物を生成するたびにリセット
         lastSpawnTime = millis();
    }
} 
//sp.addimg();
