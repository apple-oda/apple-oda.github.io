let x = [];
let y = [];
let s = [];
let speedx = [];
let speedy = [];
let speedrs = [];
let r = [];
let g = [];
let b = [];
let a = [];

function setup() {
  const w = windowWidth;
  const h = windowHeight;
  createCanvas(w, h);
  for(let i=0;i<=100;i++) {
    x[i] = random(w);
    y[i] = random(h);
    s[i] = random(100);
    speedx[i]=random(1.5);
    speedy[i]=random(1.5);
    speedrs[i]=random(1.5);
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
    a[i] = random(100);
  }
  noStroke();
}

function draw() {
  const w = windowWidth;
  const h = windowHeight;
  background(0);

  for(let i=0;i<=100;i++){  

    x[i]=x[i]+speedx[i];
    y[i]=y[i]+speedy[i];
    s[i]=s[i]+speedrs[i];
  
    if(x[i]>w || x[i]<0) {
      speedx[i]=speedx[i]*(-1);
    }
    if(y[i]>h || y[i]<0) {
      speedy[i]=speedy[i]*(-1);
    }
    if(s[i]>100 || s[i]<0) {
      speedrs[i]=speedrs[i]*(-1);
    }
    fill(r[i], g[i], b[i], a[i]);
    ellipse(x[i], y[i], s[i], s[i]);
    //rect(x[i], y[i], 100, 100);
  }
   
}