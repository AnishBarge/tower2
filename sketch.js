const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground,platform,platform1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var polygon1,launch;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  stroke(255)
  ground = new Ground(600,height,1200,20);
  platform = new Ground(350,400,240,20)
 platform1 = new Ground(650,350,240,20)
 block1 = new block(570,300)
 block2 = new block(670,300)
 block3 = new block(620,300)
 block4 = new block(720,300)

 block5 = new block(600,250)
 block6 = new block(650,250)
 block7 = new block(700,250)

 block8 = new block(625,200)
 block9 = new block(675,200)

 block10 = new block(650,150)


 block11 = new block(270,350)
 block12 = new block(320,350)
 block13 = new block(370,350)
 block14 = new block(420,350)

 block15 = new block(295,300)
 block16 = new block(345,300)
 block17 = new block(395,300)

 block18 = new block(320,250)
 block19 = new block(370,250)

 block20 = new block(345,200)

 polygon1 = new Polygon(75,460,50,50);
 launch=new SlingShot(polygon1.body,{x:75,y:200});
 
}
function draw() {
  //camera.zoom=camera.zoom+1
  background("brown");  
  Engine.update(engine);
  block1.shapeColor="white"
  
  ground.display()
  platform.display()
  platform1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  
  polygon1.display()
  launch.display()
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
launch.fly();

}

function keyPressed (){
if(keyCode === 32){
Matter.Body.setPosition(polygon1.body,{x:75, y:200});
    
launch.attach(polygon1.body);
}
} 