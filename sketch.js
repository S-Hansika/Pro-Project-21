
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{

}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options= {
		isStatic: false,
		restitution:0.3,
		friction: 0,
		density: 1.2
	}
	ball=Bodies.circle(200,200,20,ball_options);
	World.add(world, ball);

	ground= new Ground(750,650,1500,20);
	left= new Ground(1000,550,20,180);
	right= new Ground(1300,550,20,180);


	Engine.run(engine);
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,30);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:50, y:-50});
	}
}

