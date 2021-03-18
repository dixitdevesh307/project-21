var bullet,wall,thickness
var speed,weight

function setup() {
 createCanvas(1600,400)
 thickness=random(22,83);
  
  bullet=createSprite(50,200,15,5);
 bullet.shapeColor="white";
  
  wall=createSprite(1500,200,thickness,100);
  
  speed=random(40,50);
  weight=random(30,52);
 bullet.velocityX=speed;
}

function draw() {
  background("Black");  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180) {
    bullet.shapeColor = "white";
    }
    if (deformation<180 && deformation>100) {
    bullet.shapeColor = "white";
    }
    if (deformation<100) {
    bullet.shapeColor = "white";
    }
  }
if(iscollided(bullet,wall)){
  bullet.vilocityX=0
  var damage=0.5 * weight *speed* Speed/(thickness * thickness*thickness)
  if (damage>10){
  wall.shapeColor="red"

  }
  if (damage<10){
    wall.shapeColor="green";
  }
}
  drawSprites();

}

function iscollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}