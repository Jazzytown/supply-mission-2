var helicopterimage, helicopter, supply,supplyimage;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	helicopterimage=loadImage("helicopter.png")
	supplyimage=loadImage("package.png")
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	supply=createSprite(width/2, 80, 10,10);
	supply.addImage(supplyimage)
	supply.scale=0.2
	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterimage)
	helicopter.scale=0.6
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottom = createSprite(width/2, 650, 200, 20);
	bottom.shapeColor = "lime";

	side1 = createSprite(300, 610, 20, 100);
	side1.shapeColor = "cyan";

	side2 = createSprite(500, 610, 20, 100);
	side2.shapeColor = "yellow";
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 0 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  supply.x= packageBody.position.x 
  supply.y= packageBody.position.y 

  supply.collide(bottom);
  supply.collide(side1);
  supply.collide(side2);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on

	Matter.Body.setStatic(packageBody, false);

	
    
  }
}
