var boy, boy_running;
var ground;

function preload() {

    boy_running = loadAnimation("boy1.png", "boy2.png", "boy3.png", "boy4.png", "boy5.png", "boy6.png", "boy7.png", "boy8.png");

}

function setup() {

  createCanvas(1200, 1200);

  boy = createSprite(80, height - 150, 20, 60);
  boy.addAnimation("running", boy_running);
  boy.scale = 0.5;

  ground = createSprite(width / 2, height - 85, width, 15);
  ground.velocityX = -5;
  ground.x = ground.width / 2;


}

function draw() {
  background("white");  

  if(ground.x < 0){

      ground.x = ground.width / 2;

  }

  drawSprites();
}