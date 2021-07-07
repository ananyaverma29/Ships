var seasprite;
var ship;
var seaImg;
var shipImg;
function preload()
{
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
}

function setup()
{
  createCanvas(3000,800);
  seasprite = createSprite(400,180,600,20);
  seasprite.velocityX = -10;
  seasprite.addImage("sea",seaImg);
  ship = createSprite(300,180,600,50);

  ship.addAnimation("ships",shipImg);
 ship.scale=0.45;

}

function draw()
 {
  background("blue"); 
  
 if(seasprite.x<0)
 {
   seasprite.x= seasprite.width/2;
 }
 drawSprites();
}

