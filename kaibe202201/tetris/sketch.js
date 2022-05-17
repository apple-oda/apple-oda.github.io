const w = window.innerWidth;
const h = window.innerHeight;
const BLOCK_X_SIZE = 30;  // ブロック1つのサイズ
const BLOCK_Y_SIZE = 30;  // ブロック1つのサイズ

// ステージ
const STAGE_Y_SIZE = 24;
const STAGE_X_SIZE = 14;

let stage = [
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
	[ 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]];

const BLOCK_KINDS_Y_SIZE = 4;
const BLOCK_KINDS_X_SIZE = 4;

let block_kinds = [BLOCK_KINDS_Y_SIZE] [BLOCK_KINDS_X_SIZE];
let block_temp  = [BLOCK_KINDS_Y_SIZE] [BLOCK_KINDS_X_SIZE];
let block_next  = [BLOCK_KINDS_Y_SIZE] [BLOCK_KINDS_X_SIZE];                

let BLOCK_Z = [
	[ 0, 0, 0, 0 ],
	[ 1, 1, 0, 0 ],
	[ 0, 1, 1, 0 ],
	[ 0, 0, 0, 0 ]];

let BLOCK_T = [
	[ 0, 0, 0, 0 ],
	[ 2, 2, 2, 0 ],
	[ 0, 2, 0, 0 ],
	[ 0, 0, 0, 0 ]];

let BLOCK_S = [
	[ 0, 0, 0, 0 ],
	[ 0, 3, 3, 0 ],
	[ 3, 3, 0, 0 ],
	[ 0, 0, 0, 0 ]];

let BLOCK_O = [
	[ 0, 0, 0, 0 ],
	[ 4, 4, 0, 0 ],
	[ 4, 4, 0, 0 ],
	[ 0, 0, 0, 0 ]];

let BLOCK_L = [
	[ 5, 0, 0, 0 ],
	[ 5, 0, 0, 0 ],
	[ 5, 5, 0, 0 ],
	[ 0, 0, 0, 0 ]];

let BLOCK_J = [
	[ 0, 6, 0, 0 ],
	[ 0, 6, 0, 0 ],
	[ 6, 6, 0, 0 ],
	[ 0, 0, 0, 0 ]];

let BLOCK_I = [
	[ 0, 7, 0, 0 ],
	[ 0, 7, 0, 0 ],
	[ 0, 7, 0, 0 ],
	[ 0, 7, 0, 0 ]];

let y;
let x;

let score;

let loopEnd;

function setup() {
  createCanvas(w, h);
  y = 0;
  x = 5;
  blockNext();
  block_kinds = block_next;
  blockNext();
  score = 0;
  loopEnd = false;
}

function draw() {
  
  background(0);

  //　ステージの描画
  stage_draw();

  // // ブロックの描画
  block_draw(0);
  block_draw(1);

  // タイトル表示
  fill(255,0,255);
  textSize(20);
  text("TETRIS_MODOKI", 430, 20);
  fill(255,255,255);
  textSize(20);
  text("SCORE=" + score, 430, 50);
  text("NEXT BLOCK", 430, 80);

  if (block_check(1)) {
    stageUpdate();
    let by = parseInt(y);
    if(by == 0) {
      fill(255,0,0);
      textSize(20);
      text("GAME OVER", 430, 280);
      loopEnd = true;
      let stage_init = [ 
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
        [ 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]];
      stage = stage_init;
    }
    if (loopEnd){
      noLoop();
    } else {
      y = 0;
      x = 5;
      block_kinds = block_next;
      blockNext();
      block_draw(1);  
    }
  }
  lineCheck();
  y = y + 0.05;
}

function lineCheck() {
  let i;
  for(i=STAGE_Y_SIZE-2; i>0; i--)
  {
    let xAlign = 0;
    for(let j=0; j<STAGE_X_SIZE; j++)
    {
        if(!stage[i][j]==0) {
          xAlign++;
        }
    }
    if (xAlign==STAGE_X_SIZE) {
      for(let k=i;k>0; k--)
      {
        stage[k] = stage[k-1];
      }
      score += 100;
    }
  }
}

function block_check(directionFg) {
  for(let i=0; i<BLOCK_KINDS_Y_SIZE; i++ )
  {
    for(let j=0; j<BLOCK_KINDS_X_SIZE; j++ )
    {
      if(!block_kinds[i][j] == 0) {
        let by;
        let bx;
        switch (directionFg) {
          case 0:       // 上方向チェック                
            break;
          case 1:       // 下方向チェック
            by = parseInt(y+1);
            bx = parseInt(x);
            break;
          case 2:       // 右方向チェック
            by = parseInt(y);
            bx = parseInt(x+1);
            break;
          case 3:       // 左方向チェック
            by = parseInt(y);
            bx = parseInt(x-1);
            break;
        }
        if(!stage[i+by][j+bx] == 0) {
          return 1;
        }
      }
    }
  } 
  return 0;
}

function stageUpdate() {
  for(let i=0; i<BLOCK_KINDS_Y_SIZE; i++ )
  {
    for(let j=0; j<BLOCK_KINDS_X_SIZE; j++ )
    {
        if(!block_kinds[i][j]==0){
          let by = parseInt(y);
          let bx = parseInt(x);
          stage[i+by][j+bx]  = block_kinds[i][j];
        }
    }
  }  
}

function blockNext() {

    let result = Math.floor(Math.random()*7);
    switch (result) {
        case 0:
            block_next = BLOCK_Z;
            break;
        case 1:
            block_next = BLOCK_T;
            break;
        case 2:
            block_next = BLOCK_S;
            break;
        case 3:
            block_next = BLOCK_O;
            break;
        case 4:
            block_next = BLOCK_L;
            break;
        case 5:
            block_next = BLOCK_J;
            break;
        case 6:
            block_next = BLOCK_I;                            
            break;
        default:
            block_next = BLOCK_I;                            
            break;
    }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {     // 上キー 回転
    //if (!block_check(2) && !block_check(3)) {
      block_kinds = blockRotate();
    //}
  }
  if (keyCode === DOWN_ARROW) {   // 下キー 落ちる速度をあげる
    //y = y + 3;
  }
if (keyCode === RIGHT_ARROW) {    // 右キー 右移動
    if (!block_check(2)) {
       x = x + 1;
    }
  }
  if (keyCode === LEFT_ARROW) {   // 左キー 左移動
    if (!block_check(3)) {
      x = x - 1;
    }
  }
}

function blockRotate() {
  let block_temp = [
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],];
  for(let i=0; i<BLOCK_KINDS_Y_SIZE; i++ )    // y座標
  {
    for(let j=0; j<BLOCK_KINDS_X_SIZE; j++ )  // x座標
    {
      block_temp[j][3-i] = block_kinds[i][j];
    }
  }
  return  block_temp;
}

function block_draw(block_where) {
  for(let i=0; i<BLOCK_KINDS_Y_SIZE; i++ )    // y座標
  {
    for(let j=0; j<BLOCK_KINDS_X_SIZE; j++ )  // x座標
    {
        let fill_Color; 
        if(block_where === 0) {
          fill_Color = block_kinds[i][j];
        } else {
          fill_Color = block_next[i][j];
        }
        switch (fill_Color){
          // case 0:   // 黒
          //       fill(192,48,192);
          //       break;
          case 1:   // 紫
                fill(192,48,192);
                break;
            case 2:   // 青
                fill(0,0,128);
                break;
            case 3:   // 水色
                fill(0,191,255);
                break;
            case 4:   // 緑
                fill(0,128,0);
                break;
            case 5:   // 黄緑
                fill(0,255,0);
                break;
            case 6:   // 黄色
                fill(255,255,0);
                break;
            case 7:   // 赤
                fill(255,0,0);
                break;
        }
        if (!fill_Color==0){
          if (block_where === 0) {
            rect((j+x)*BLOCK_X_SIZE, (i+y)*BLOCK_Y_SIZE, BLOCK_X_SIZE ,BLOCK_Y_SIZE);
          } else {
            rect((j)*BLOCK_X_SIZE+500, (i)*BLOCK_Y_SIZE+100, BLOCK_X_SIZE ,BLOCK_Y_SIZE);
          }
        } 
    } 
  } 
}

function stage_draw() {
  for(let i=0; i<STAGE_Y_SIZE; i++ )        // y座標
  {
    for(let j=0; j<STAGE_X_SIZE; j++ )      // x座標
    {
        switch (stage[i][j] ){
          case 0:   // 黒
              fill(0,0,0);
              break;
          case 1:   // 紫
              fill(192,48,192);
              break;
          case 2:   // 青
              fill(0,0,128);
              break;
          case 3:   // 水色
              fill(0,191,255);
              break;
          case 4:   // 緑
              fill(0,128,0);
              break;
          case 5:   // 黄緑
              fill(0,255,0);
              break;
          case 6:   // 黄色
              fill(255,255,0);
              break;
          case 7:   // 赤
              fill(255,0,0);
              break;
          case 9:   // グレー
          fill(125,125,125);
          break;
      }
      rect(j*BLOCK_X_SIZE, i*BLOCK_Y_SIZE, BLOCK_X_SIZE ,BLOCK_Y_SIZE);
    }
  }
}