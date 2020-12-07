var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var truck,truckImg,truckMove=false,count=0;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	truckImg = loadImage("pngwing 1.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  console.log(width)
  if(truckMove===true){
	packageSprite.debug=true
	packageSprite.setCollider("circle",0,0,20)
	if(truck.x>packageSprite.x ){
		console.log("hellos")
		truck.velocityX=0;
		truckMove=false
		packageSprite.visible=false;
		
	}
}
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false);
	count++;
	if(count===1){
		moveTruck();
	}
    
  }
}

function moveTruck(){
	truck = createSprite(10,600,100,50);
	truck.addImage(truckImg);
	truck.scale=0.1;
	truck.velocityX=15;
	truck.debug=true
	truck.setCollider("rectangle",0,0,100,50)
	
	truckMove=true
}