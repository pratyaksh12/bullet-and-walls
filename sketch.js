var bullet,wall;
function setup(){
    createCanvas(1600,400);
     bullet=createSprite(50,200,30,10);
     wall=createSprite(1500,200,60,200);
     
     
     
    

    var speed,weight,thickness;
    speed=random(55,90);
    weight=random(800,1500);
    thickness=random(22,83);

    bullet.velocityX=speed;


}

function draw(){
    background(0,0,0);
    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
        bullet.velocityX=0;
        var Damage=(0.5*weight*speed*speed)/(thickness*thiskness*thickness);
        if(Damage>10){
            bullet.shapeColor=color("red");
        }
       
        if(damage<10){
            bullet.shapeColor=color("green");
        }
        wall.shapeColor = color("yellow");
    }
   
    drawSprites();
}