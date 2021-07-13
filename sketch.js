var track,trackImg;
var boy,boyImg;
var invisibleBoundary;

function preload(){
  //pre-load images
trackImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite (200,200);
  track.addImage("path",trackImg);
  track.velocityY = 4;
  track.scale=1.2;

  boy = createSprite (200,350,10,10);
  boy.addAnimation("boy",boyImg);
  
  boy.scale=0.10;

  //create invisible boundary
  invisibleBoundary=createSprite(200,190);
  invisibleBoundary.visible=false;
}

function draw() {
  background(0);
  boy.x=World.mouseX;
  
drawSprites();

//code to reset the background
if(track.y > 400){
  track.y = height/2;
}
}
