# p5.jsでプログラミングを体験しよう

## 開発準備
今回の体験で使うフォルダとファイルを作成します。  
開発環境は何でも大丈夫です。  
ここでは「Visual Studio Code」で開発していきます。

### フォルダの作成
フォルダに自分の名字と年月を書きます。  
例「oda202201」

### ファイルの作成
作成したフォルダに以下のファイルを作成します。

* index.html
```html
<html>
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
        <script src="sketch.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
    </body>
</html>
```

* style.css
```css
html, body {
    margin: 0;
    padding: 0;
}
```

* sketch.js
```js
function setup(){
}

function draw() {
}
```

## まずは画面に表示してみましょう
sketch.jsに以下のコードを書き加えます。

* sketch.js
```js
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(220);
}

function draw() {
    ellipse(50,50,80,80);
}
```
保存後、index.htmlを開きます。  
円が表示されていたら成功です。

## 動かしてみましょう
sketch.jsを以下のように修正します。

* sketch.js
```js
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(220);
}

function draw() {
    text("hello world!", 50,50)
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX,mouseY,80,80);
}
```
保存後、index.htmlを開きます。  
円がマウスの位置について来たら成功です。