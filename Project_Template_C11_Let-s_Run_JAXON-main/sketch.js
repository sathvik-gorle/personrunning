var road;
var roadImg;
var person;
var person_running;
var leftWall;
var rightWall;

function preload(){
roadImg = loadImage("path.png")
person_running = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  road = createSprite(200, 200);
  road.addImage(roadImg);
  road.velocityY = 4;
  road.scale=1.2;

  person = createSprite(200, 325, 50, 50);
  person.addAnimation("running", person_running)
  person.scale=0.05
  createEdgeSprites()
  
  leftWall = createSprite(375, 200, 50,  400)
  rightWall = createSprite(0, 200, 100,  400)
  leftWall.visible=false
  rightWall.visible=false
}

function draw() {
  background(0);
  person.position.x=mouseX

  if (road.y>400){
    road.y=100
  }
  if (person.x>=375){
    person.x=375
  }
  if (person.x<25){
    person.x=25
  }

  person.collide(leftWall)
  person.collide(rightWall)
  
  console.log(person.x)
  drawSprites()




}
