var ship,shipFloat;
var water;

function preload(){
  shipFloat = loadAnimation("ship-1.png","ship-1.png","ship-1.png","ship-1.png","ship-2.png","ship-2.png","ship-2.png");
  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(1000,600);

  water = createSprite(-450,400,400,600);
  water.addImage("seas",sea);
  water.scale =0.7;

  ship = createSprite(850,475,100,150);
  ship.addAnimation("bounce",shipFloat);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  water.velocityX = 3;
  if(water.x>1460){
    water.x=-water.width/9.2;
  }

  drawSprites();
}