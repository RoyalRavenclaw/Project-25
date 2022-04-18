const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

var boy, girl, cleaner1, cleaner2, button, buttonImg;

function preload(){
//find the bug in the below code
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");
    cleaner1 = loadImage("cleaner_boy.png");
	cleaner2 = loadImage("cleaner_girl.png");
	buttonImg = loadImage("restart.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  
}


function draw() {
	background("skyblue");
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

    boy = createSprite(50,525);
    girl = createSprite(1300,525);
	button = createSprite(1550,80);
    boy.scale = 3;
	girl.scale= 3;
	button.scale = 0.5;
	boy.addImage(cleaner1);
	girl.addImage(cleaner2);
	button.addImage(buttonImg);

	push();
	textSize(50);
	fill("green");
	textFont("CooperBlack");
	text("Clean India, Safe India", 600, 233);
	pop();

	push();
	textSize(30);
	fill("blue");
	textFont("CooperBlack");
	text("Press 'Up', 'Left', 'Right' and 'Down' to move the ball", 50,80);
    pop();

	push();
	textSize(30);
	fill("red");
	textFont("CooperBlack");
	text("Throw the paper ball into the bin to maintain cleanliness", 50, 50);
	pop();

	push();
	textSize(30);
	fill("purple");
	textFont("CooperBlack");
	text("When done press the restart button to play again", 50, 110);
	pop();

	imageMode(CENTER);
		//use image() command to add paper image to the ball
image(paperImg,ball.position.x,ball.position.y,radius,radius);

	// use image() command to add dustbin image in the canvas.
	image(dustbinImg,1185, 570, 200,200);

	if(mousePressedOver(button)){
		ball.position.x = 260;
		ball.position.y =101;
	}
	
	
drawSprites();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:0,y:-85});
    
  	}

	  if(keyCode === RIGHT_ARROW){
		  Matter.Body.applyForce(ball,ball.position,{x:55,y:0});
	  }

	  if(keyCode === LEFT_ARROW){
		  Matter.Body.applyForce(ball,ball.position,{x:-45,y:0});
	  }

	  if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0,y:85});
	}
}
