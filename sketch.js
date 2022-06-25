var towerImg, tower;
var doorImg;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var doorGroup;
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  //spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300,40,30);
  ghost.addImage("ghost-standing",ghostImg);
 ghost.scale = 0.4;
}

function draw() {
  background(200)
  spawnDoors();
  drawSprites();
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("A"))
    {
      ghost.x = ghost.x - 4
    }
    if(keyDown("D"))
    {
      ghost.x = ghost.x + 4
    }
    if(keyDown("W"))
    {
      ghost.velocityY = - 4
    }
    ghost.velocityY = ghost.velocityY + 0.2

    if(tower.y > 450)
    {
      tower.y = 300
    }
}
function spawnDoors()
{
if(frameCount%120 === 0)
{
 
var door = createSprite(150, 40)
door.addImage(doorImg)
door.x = Math.round(random(100,200))
door.velocityY = 7
door.lifetime = 1000
}
}