const w= window.innerWidth;
const h = window.innerHeight;

let x = [];
let y = [];
let s = [];
let speedx = [];
let speedy = [];
let speeds = [];
let r = [];
let g = [];
let b = [];
let a = [];
let v = [];
let time=0;
let remaing=0;

function setup() {
  createCanvas(w, h);
  for(let i=0;i<=100;i++) {
    x[i] = random(w);
    y[i] = random(h);
    s[i] = random(100);
    speedx[i]=random(1.5);
    speedy[i]=random(1.5);
    speeds[i]=random(1.5);
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
    a[i] = random() * 50 + 50   // 50以上100以下
    v[i] = true;
  }
  noStroke();
}

function draw() {
  
  background(0);

  fill(255,255,255);
  textSize(50);
  text("Time=" + time + "秒" ,10,50);

  remaing=0;
  for(let i=0;i<=100;i++){  

    x[i]=x[i]+speedx[i];
    y[i]=y[i]+speedy[i];
    s[i]=s[i]+speeds[i];
  
    if(x[i]>w || x[i]<0) {
      speedx[i]=speedx[i]*(-1);
    }
    if(y[i]>h || y[i]<0) {
      speedy[i]=speedy[i]*(-1);
    }
    if(s[i]>100 || s[i]<0) {
      speeds[i]=speeds[i]*(-1);
    }

    if(mouseX >= x[i] - s[i] && mouseX < x[i] + s[i] && 
       mouseY >= y[i] - s[i] && mouseY < y[i] + s[i] && 
        v[i]) {
        v[i] = false;
        r[i]=0;
        g[i]=0;
        b[i]=0;
        a[i]=0;
        fill(0,0,0);
    } else {
        fill(r[i], g[i], b[i], a[i]);
    }
    ellipse(x[i], y[i], s[i], s[i]); 
    if(!v[i]) remaing++;
  }
  if(remaing>100) noLoop();
  time++;
}