var byjus;
function setup() {
  createCanvas(1350,600);
  byjus=createSprite(675, 300, 200, 200)
  byjus.shapeColor=color("blue")
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW))  {
    background("red")
  }
  if(keyIsDown(DOWN_ARROW))  {
    background("black")
  }
  if(keyIsDown(LEFT_ARROW))  {
    background("purple")
  }
  if(keyIsDown(RIGHT_ARROW))  {
    background("green")
 }
drawSprites()
}




