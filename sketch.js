var player;
var computer;


function setup() {
  createCanvas(400,400);
  computer=createSprite(200, 200, 50, 50);
  player= createSprite(20,200,20,50);
  
}

function draw() {
  background("yellow");  
  player.y=World.mouseY;
  player.x=World.mouseX;
  player.shapeColor= "green";
  computer.shapeColor= "green";
  if(player.x-computer.x <computer.width/2+player.width/2 && computer.x-player.x <computer.width/2+player.width/2 ){
    player.shapeColor= "red";
  computer.shapeColor= "pink";
  }
  if(player.y-computer.y <computer.height/2+player.height/2 && computer.y-player.y <computer.height/2+player.height/2 ){
    player.shapeColor= "red";
  computer.shapeColor= "pink";
  }
  drawSprites();
}