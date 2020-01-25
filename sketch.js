var bg,bg_img

var  pic1,pic1_img

var  pic2,pic2_img

var  pic3,pic3_img

var  pic4,pic4_img

var  pic5,pic5_img

var  txt1,txt1_img

var  txt2,txt2_img

var  txt3,txt3_img

var  ui,ui_img

var  gameState = "start"

function preload(){

  bg_img=loadImage("images/a6.jpg");
  pic1_img=loadImage("images/a1.png");
  pic2_img=loadImage("images/a2.png");
  pic3_img=loadImage("images/a3.png");
  pic4_img=loadImage("images/a4.png");
  pic5_img=loadImage("images/a5.png");
  txt1_img=loadImage("images/txt1.png");
  txt2_img=loadImage("images/txt2.png");
  txt3_img=loadImage("images/txt3.png");
    ui_img=loadImage("images/ui.png");
}

function setup(){

  createCanvas(displayWidth,displayHeight);
  pic1=createSprite(800,400,50,50);
  pic1.addImage("img",pic1_img);
  pic1.scale=0.15;

  pic2=createSprite(600,400,50,50);
  pic2.addImage("img",pic2_img);
  pic2.scale=0.15;

  pic3=createSprite(500,400,50,50);
  pic3.addImage("img",pic3_img);
  pic3.scale=0.25;

  pic4=createSprite(700,450,50,50);
  pic4.addImage("img",pic4_img);
  pic4.scale=0.15;

  pic5=createSprite(950,500,50,50);
  pic5.addImage("img",pic5_img);
  pic5.scale=0.5;

  txt1=createSprite(650,200,50,50);
  txt1.addImage("img",txt1_img);

  txt2=createSprite(210,450,50,50);
  txt2.addImage("img",txt2_img);

  txt3=createSprite(400,300,50,50);
  txt3.addImage("img",txt3_img);

  ui=createSprite(400,450,50,50);
  ui.addImage("img",ui_img);
  ui.scale=0.8;

  textSize(20);
  fill("orange");
 
}

function draw(){

  background(bg_img);
  
  if(gameState ==="start"){
    txt1.visible=false;
    txt2.visible=false;
    txt3.visible=false;
    pic4.visible=true;
   // pic4.(700,450,50,50);
  }

  if(keyDown("space")){
    gameState = "play";
    txt1.visible=true;
  }

  if(keyDown("1")){
    gameState = "play";
    txt1.visible=false;
    txt2.visible=true;
    txt3.visible=false;
  }

  if(keyDown("Q")){
    gameState = "start";
  }

  if(keyDown("2")){
    txt1.visible=false;
    txt2.visible=false;
    txt3.visible=true;
  }

  if(keyDown(LEFT_ARROW)){
    move(-1,0);
  }

  drawSprites();
  text("Press space to start nd 1,2,3 in order to start conversation.",100,100);
  text("Press 'Q' to reset ",150,150);
}

function move(x,y){
  pic4.x=pic4.x+x;
  pic4.y=pic4.y+y;
}

function isTouching(){

  if(pic4.x-ui.x<pic4.width/2+ui.width/2 
    && ui.x-pic4.x<pic4.width/2+ui.width/2){
    return true
  }

  else{
    return false
  }
}