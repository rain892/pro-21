
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, ground1,ground2;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	var ground_options = {
		isStatic: true
	}
  ball = Bodies.circle(100,100,30,ball_options)
  World.add(world,ball)
  ground = Bodies.rectangle(400,680,800,10,ground_options)
  World.add(world,ground)
  ground1 = Bodies.rectangle(400,620,20,100,ground_options)
  World.add(world,ground1)
  ground2 = Bodies.rectangle(600,620,20,100,ground_options)
  World.add(world,ground2)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30)
  rect(ground.position.x,ground.position.y,800,10)
  rect(ground1.position.x,ground1.position.y,20,100)
  rect(ground2.position.x,ground2.position.y,20,100)



  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

	}
}



