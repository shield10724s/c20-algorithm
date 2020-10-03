var fix,move;

function setup() {
  createCanvas(windowWidth,windowHeight);
  fix = createSprite(400, 200, 50, 50);
  fix.shapeColor='red';
  move = createSprite(100,0,50,50);
  move.shapeColor='red';
}

function draw() {
  background('yellow'); 
  
  ///////
  move.x = World.mouseX;
  move.y = World.mouseY;

  if(move.x - fix.x < fix.width/2 + move.width/2 && fix.x - move.x < fix.width/2 + move.width/2 &&
     move.y - fix.y < fix.width/2 + move.width/2 && fix.y - move.y < fix.width/2 + move.width/2){
    fix.shapeColor='blue';
    move.shapeColor='blue';
  }
  else{
    fix.shapeColor='red';
    move.shapeColor='red';
  }
  
  drawSprites();
}