const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ourEngine, ourWorld,ground;
var ball,ball2;

function setup(){

    createCanvas(400,400);
    ourEngine = Engine.create();
    ourWorld = ourEngine.world;
 
    var ground_options = {
        isStatic:true
    }
     var ball_options={
         restitution:1.0,
     }
     var ball2_options={
         restitution:1.0,
     }
    ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(ourWorld,ground);
     ball=Bodies.circle(200,100,20,ball_options);
     World.add(ourWorld,ball);
     ball2=Bodies.rectangle(300,100,20,20,ball2_options);
     World.add(ourWorld,ball2);
    console.log(ground);
    console.log(ground.position.x);
    console.log(ground.position.y);
}

function draw(){
    background(0);
    Engine.update(ourEngine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ball2.position.x,ball2.position.y,20,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
   
}