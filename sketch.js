const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,300,70,70);
    box2 = new Box(500,300,70,70);
    box3 = new Box(500,300,70,70);
    box4 = new Box(500,300,70,70);
    box5 = new Box(500,300,70,70);
    box6 = new Box(500,300,70,70);

    box7 = new Box(600,300,70,70);
    box8 = new Box(600,300,70,70);
    box9 = new Box(600,300,70,70);
    box10 = new Box(600,300,70,70);
    box11 = new Box(600,300,70,70);
    box12 = new Box(600,300,70,70);

    ground = new Ground(200,600,1200,20)

    ball = new Ball(200,200,50,50);
   rope = new Rope(ball.body,{x : 400,y:40});
}

function draw(){
    background(0);
    Engine.update(engine);
  ball.display();
  rope.display();
    box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

    ground.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}