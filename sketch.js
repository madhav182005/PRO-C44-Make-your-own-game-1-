var bg, bgImg
var bull, bullImg
var obstacle1, obstacle2, obstacleImg
var man, manImg
var ground

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  bg = createSprite(displayWidth/2, displayHeight/2); 
  bg.addImage(bgImg);
  bg.scale = 2; 

  ground = createSprite(displayWidth/2, displayHeight+20, displayWidth,20); 

  man = createSprite(150,displayHeight-50);
  man.addAnimation("man", manImg); 
}

function preload() { 
bgImg = loadImage ("images/background.png"); 
bullImg = loadAnimation ("images/bull1.png", "images/bull2.png", "images/bull3.png"); 
obstacle1 = loadImage ("images/obstacle 1.png"); 
obstacle2 = loadImage ("images/obstacle 2.png"); 
manImg = loadAnimation ("images/man1.png", "images/man2.png", "images/man3.png", "images/man4.png"); 
}

function draw() {
  background(255,255,255);  

  man.collide (ground);

  drawSprites();
}