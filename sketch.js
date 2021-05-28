var  database;
var gameState=0;
var playerCount=0;
var form,player,game;
var allplayers;
var distance=0
var car1, car2, car3, car4 ,car;
var car1Img, car2Img, car3Img, car4Img;
var ground ,track;

function preload(){
  car1Img = loadImage("images - 37/car1.png ");
  car2Img = loadImage("images - 37/car2.png ");
  car3Img = loadImage("images - 37/car3.png ");
  car4Img = loadImage("images - 37/car4.png ");

  ground = loadImage("images - 37/ground.png");
  track = loadImage("images - 37/track.jpg")
}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.getState();
  game.startState();
}

function draw(){
  background("white");
  if(playerCount === 4){
     game.updateState(1)
  }
 
  if(gameState === 1){
   clear()
      game.playState()
    }
  
  if(gameState === 2){
    game.endState()
  }
}

// C:\Users\shahn\OneDrive\Desktop\Zafeera\Zafeera-class-37--main\Zafeera-class-37--main\images - 37\car1.png
// images - 37\car1.png