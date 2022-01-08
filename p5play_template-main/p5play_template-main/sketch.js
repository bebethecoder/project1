var thing
function setup() {
  createCanvas(400,400);
  thing = createSprite(100,100,50,25)
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyDown(DOWN_ARROW)){
    thing.y = thing.y+5
  }
  if (keyDown(UP_ARROW)){
    thing.y = thing.y-5
  }
  if (keyDown(LEFT_ARROW)){
    thing.x = thing.x-5
  }
  if (keyDown(RIGHT_ARROW)){
    thing.x = thing.x+5
  }
}




