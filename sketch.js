var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	box=createSprite(width/2, 650, 100,20);
	box.shapeColor=("red")

	box2=createSprite(box.x-50, 615, 20,100);
	box2.shapeColor=("red")

	box3=createSprite(box.x+50, 615, 20,100);
	box3.shapeColor=("red")
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	rectMode(CENTER);
	helicopterSprite=createSprite(width/2, 190, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	
	var packageSprite_options ={
		restitution: 0.7, isStatic: true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageSprite_options);
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 var boxBody_options ={
		 isStatic: true
	 }
	 rectMode(CENTER)
	 boxBody = Bodies.rectangle(width/2, 635, 100, 20 , boxBody_options );
	 World.add(world, boxBody);
	 var box2Body_options ={
		isStatic: true
	}
	 box2Body = Bodies.rectangle(box.x-50, 615, 20, 100 , box2Body_options );
	 World.add(world, box2Body);

	 box3Body = Bodies.rectangle(box.x+50, 615, 20, 100 , box2Body_options );
	 World.add(world, box3Body);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  /*box.x = boxBody.position.x;
  box.y = boxBody.position.y;*/
  box2.x = box2Body.position.x;
  box2.y = box2Body.position.y;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
    
  }
}
