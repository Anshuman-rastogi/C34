const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground;
var block, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var ball;
var bgImage;
var rope;
var Img;
var roof;

function preload(){
  bgImage = loadImage("Untitled.png");
  Img = loadImage("Picture12.png");
}

function setup() {
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,590,1200,20);
  block = new Blocks(650,570);
  block2 = new Blocks(650,500);
  block3 = new Blocks(650,430);
  block4 = new Blocks(650,360);
  block5 = new Blocks(650,290);
  block6 = new Blocks(700,570);
  block7 = new Blocks(700,500);
  block8 = new Blocks(700,430);
  block9 = new Blocks(700,360);
  block10 = new Blocks(700,290);
  block11 = new Blocks(750,570);
  block12 = new Blocks(750,500);
  block13 = new Blocks(750,430);
  block14 = new Blocks(750,360);
  block15 = new Blocks(750,290);
  block16 = new Blocks(800,570);
  block17 = new Blocks(800,500);
  block18 = new Blocks(800,430);
  block19 = new Blocks(800,360);
  block20 = new Blocks(800,290);
  
  ball = new Ball(390,300);

  roof = new Roof(724, 150, 260, 100);

  rope = new Rope(ball.body, {x:390, y:78});

}

function draw() {
  background(bgImage);
  Engine.update(engine);

  image(Img, -13, 5, 420, 90);

  ground.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  ball.display();

  roof.display();

  rope.display();
  
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:-650, y:-550});
  }
}