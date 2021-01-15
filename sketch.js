
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5)


	engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
  mouse :canvasmouse
};
mConstraint = MouseConstraint.create(engine, options)
World.add(world, mConstraint)

	//Create the Bodies Here.
bob1 = new BOB(360,500)
bob2 = new BOB(400,500)
bob3 = new BOB(440,500)
bob4 = new BOB(480,500)
bob5 = new BOB(520,500)

rope1 = new Sling(bob1.body,40)
rope2 = new Sling(bob2.body,80)
rope3 = new Sling(bob3.body,160)
rope4 = new Sling(bob4.body,240)
rope5 = new Sling(bob5.body,320)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();

  drawSprites();
 
}

function mousePressed(){
    Matter.Body.setPosition (bob1.body, {x: mouseX ,y: mouseY });
    
}
