const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var myEngine,myWorld;
var backgroundImg;

function preload(){
backgroundImg = loadImage("sprites/bg.png");

}
function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  // adding the ground
  ground = new Ground(200,380,2000,20);
  //first layer
   box1 = new Box(700,320,70,70);
   box2 = new Box(920,320,70,70);
   pig1 = new Pig(810,350);
   log1 = new Log(810,260,300,PI/2);
   //second layer
   box3 = new Box(700,240,70,70);
   box4 = new Box(920,240,70,70);
   log2 = new Log(810,180,300,PI/2);
   pig2 = new Pig(810,220);
   //third layer
   box5 = new Box(810,40,70,69);
   log3 = new Log(730,80,170,PI/6);
   log4 = new Log(890,80,150,-PI/6);
   // making the bird
   bird = new Bird(200,100);

  
  
   
  
}


function draw() {
  background(backgroundImg);  
  Engine.update(myEngine);
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 pig1.display();
 pig2.display();
 bird.display();
  
  
}