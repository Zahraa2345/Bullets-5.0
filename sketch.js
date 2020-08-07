var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

   thickness=random(22,83);  
   speed=random(223,321);
   weight=random(30,52);

   bullet=createSprite(50,200,50,10);
   bullet.shapeColor="red";
   bullet.velocityX=speed;

   wall=createSprite(1200,200,thickness,height/2);
   wall.shapeColor="blue";
}

function draw() {
  background(255,255,255);  

if(Has_Collided(bullet,wall))
{

  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage > 10)
{
    wall.shapeColor="green";
}

if (damage < 10)
{
  wall.shapeColor="pink";
}
}
  drawSprites();
}

function Has_Collided(bullet,wall)
{

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge >= wallLeftEdge)
{

    return true

}
    return false;

}