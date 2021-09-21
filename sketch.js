var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeleaf, orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));
  if (frameCount%80==0) {
    if (select_sprites == 1) {
      spawnApples();
    } else{
      spawnLeaves();
    }
  }

  drawSprites();
}

function spawnApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY=2;
  apple.scale=0.1;
}
function spawnLeaves() {
  orangeleaf = createSprite(random(60, 370), 40, 10, 10);
  orangeleaf.addImage(orangeleafImg);
  orangeleaf.velocityY=2;
  orangeleaf.scale=0.1;
}