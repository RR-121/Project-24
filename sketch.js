
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, trashBin, wall1, wall2, crumpledPaper;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 350, 1200, 30);

	trashBin = new TrashBin(850, 320, 200, 20);
	wall1 = new TrashBin(750, 290, 20, 80);
	wall2 = new TrashBin(950, 290, 20, 80);

	crumpledPaper = new CrumpledPaper(100, 320, 50);

	console.log(crumpledPaper);
  
}


function draw() {
  background("goldenRod");

  Engine.run(engine);

  ground.display();

  trashBin.display();
  wall1.display();
  wall2.display();

  crumpledPaper.display();

  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position,{x : 190, y : 190});
	}
}

