
var ballImg,hoopImg, ball, hoop, player, defense, defenceImg,score=0, questions,shotImg,playerAni,dunkImg, hoopAni;
function preload(){
  ballImg=loadImage("ball.png");
  hoopImg=loadAnimation("Hoop.png");
  shotImg=loadAnimation("shot.png");
  playerAni=loadAnimation("dribble1.png","dribble2.png");
  dunkImg=loadAnimation("dunk.png");
defenceImg=loadImage("defence.png");
hoopAni=loadAnimation("hoop2.png","hoop3.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
ball=createSprite(displayWidth/2,displayHeight/2);
ball.addImage(ballImg);

hoop=createSprite(displayWidth/2+200,displayHeight/2);
hoop.addAnimation("hoop",hoopImg);
hoop.addAnimation("hoop22",hoopAni);
hoop.scale=(1.5)

player=createSprite(displayWidth/2-500,displayHeight/2+300);
player.addAnimation("player",playerAni);
player.addAnimation("shoot",shotImg)

defense=createSprite(displayWidth/2-75,displayHeight/2+300);
defense.addImage(defenceImg);
inputbox=new Inputbox();
}


function draw(){
background("white")
drawSprites();
textSize(25)
text("Score:"+score,displayWidth/2-800,displayHeight/2-150)
if(keyDown(UP_ARROW)){
player.changeAnimation("shoot",shotImg)
hoop.changeAnimation("hoop22",hoopAni)
score=score+1;
}

if(keyDown(LEFT_ARROW)){
  player.x=player.x-10
}

if(keyDown(RIGHT_ARROW)){
  player.x=player.x+10
}
if(score>=1){
  /*ball.visible=false
  player.visible=false
  hoop.visible=false
defense.visible=false
*/
  questions=random(1,1)
  switch(questions){
    case 1: textSize(25);
    text("Which burger is healthier? A grilled burger or a Quarter Pounder from Mcdonalds",displayWidth/2-55,displayHeight/2);
   inputbox.display();
    break;
  default:break;
  }
}
}
