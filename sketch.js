
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	
	 
	 


	Engine.run(engine);
groundObj=new Ground(width/2,670,width,20)
paperObj=new Paper(200,450,40)
dustbinObj=new Dustbin(1200,650)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
 paperObj.display();
 dustbinObj.display();

 drawSprites();
}

function keypressed() {
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85})
}


}


