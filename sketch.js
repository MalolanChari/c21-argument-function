var moving_rect,fixed_rect,f2,bounce_nbr;
function setup() {
  createCanvas(800,400);
moving_rect=createSprite(400,200,50,50);
moving_rect.shapeColor=("green");
fixed_rect=createSprite(50,200,50,50); 
fixed_rect.shapeColor=("green");
fixed_rect.velocityX=2;

f2=createSprite(750,200,50,50);
f2.shapeColor="green";
f2.velocityX=-2;
}




function draw() {
  background(255,255,255);  
  moving_rect.x=mouseX;
  moving_rect.y=mouseY;
  /*if (istouching(moving_rect,fixed_rect)){
    moving_rect.shapeColor="red";
    fixed_rect.shapeColor="red"
  }
  else if (istouching(moving_rect,f2)){
    moving_rect.shapeColor="black";
    f2.shapeColor="black"
  }
  else{
    moving_rect.shapeColor="green";
    f2.shapeColor="green";
    fixed_rect.shapeColor="green";
  }*/
   
bounceoff(fixed_rect,f2);
  
  drawSprites();
}



function istouching( obj1,obj2){
  if(obj1.x-obj2.x<=(obj1.width/2+obj2.width/2)&&
  obj2.x-obj1.x<=(obj1.width/2+obj2.width/2)&&
  obj1.y-obj2.y<=(obj1.height/2+obj2.height/2)&&
  obj2.y-obj1.y<=(obj1.height/2+obj2.height/2)){
    return true;
  }
  else{
    return false;  
  }
}

function bounceoff (obj1,obj2){
  
  if (istouching (obj1,obj2)){
   obj1.velocityX=obj1.velocityX*(-1);
   obj2.velocityX=obj2.velocityX*(-1);

    }
  

}