const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var  k = 0; k <=width; k = k + 50) {
    plinkos.push(new Plinko(k,75,10));
  }
  for (var  k = 0; k <=width; k = k + 50) {
    plinkos.push(new Plinko(k,175,10));
  }
  for (var  k = 0; k <=width; k = k + 50) {
    plinkos.push(new Plinko(k,275,10));
  }
  for (var  k = 0; k <=width; k = k + 50) {
    plinkos.push(new Plinko(k,375,10));
  }

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);

  for(var k=0; k< divisions.length;k++) {
    divisions[k].display();
  }
  for(var k=0; k< plinkos.length;k++) {
    plinkos[k].display();
  }

  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var k=0; k< particles.length;k++) {
    particles[k].display();
  }

  drawSprites();
}