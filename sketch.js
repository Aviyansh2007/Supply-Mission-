const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var helicopter,heliImage,package,packImage;

var groundSprite;

var engine, world, packageBody, ground;

var rectangle1,rectangle2,rectangle3;




function preload()
{
	heliImage = loadImage("helicopter.png");
	packImage = loadImage("package.png");
}

function setup() {
	rectMode(CENTER);
	createCanvas(600, 700);

	engine = Engine.create();
	world = engine.world;


	
	package = createSprite(width/2,150,10,10);
	package.addImage(packImage);
	package.scale = 0.2;

	helicopter = createSprite(width/2,150,10,10);
	helicopter.addImage(heliImage);

	helicopter.scale = 0.6;

	groundSprite = createSprite(width/2,650,width,10);
	groundSprite.shapeColor = "white";

	var groundoptions = {
		isStatic:true
	}

	ground = Bodies.rectangle(width/2,650,width,15,groundoptions);
	World.add(world,ground);
	
	var packoptions = {
		isStatic:true,
		restitution:0
	}

	packageBody = Bodies.rectangle(width/2,150,50,50,packoptions);
	World.add(world,packageBody);
	
	var rectoptions = {
		isStatic: true
	}
	 rectangle1 = Bodies.rectangle(200,594,20,100, rectoptions);
	World.add(world,rectangle1);

	 rectangle2 = Bodies.rectangle(300,634,200,20,rectoptions);
	 World.add(world,rectangle2);

	 rectangle3 = Bodies.rectangle(400,594,20,100,rectoptions);
	 World.add(world,rectangle3);

	 Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
 package.x = packageBody.position.x;
 package.y = packageBody.position.y

 fill("red");
 stroke("red");
	
 rect(rectangle1.position.x,rectangle1.position.y,20,100);
 rect(rectangle2.position.x,rectangle2.position.y,200,20);
 rect(rectangle3.position.x,rectangle3.position.y,20,100);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
    
  }
}



