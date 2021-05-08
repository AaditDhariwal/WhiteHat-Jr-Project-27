
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var bar;

var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1= new Bob(400,300);
	bob2= new Bob(435,300);
	bob3= new Bob(470,300);
	bob4= new Bob(505,300);
	bob5= new Bob(540,300);

	bar= new Bar(width/2,height/2);

  rope1= new Rope(bar.body,bob1.body,-80,0);
	rope2= new Rope(bar.body,bob2.body,-40,0);
	rope3= new Rope(bar.body,bob3.body,0,0);
	rope4= new Rope(bar.body,bob4.body,40,0);
	rope5= new Rope(bar.body,bob5.body,80,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  bar.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}


function keyPressed(){
	if (keyCode === LEFT_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100})
      console.log("working");
	}
}

