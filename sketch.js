var player,game,foarm,cannon1,cannon2,cannon3,cannon4,cannonimg,backgroundimg;    
var playerCount=0,gameState=0,players=[],allPlayers,cannonball,cannonballimg,playerbullets=[[],[],[],[]];
function preload(){
 cannonimg=loadImage("images/cannon.png")
backgroundimg=loadImage("images/background.jpg")
cannonballimg=loadImage("images/cannon ball.png")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database()
 


game=new Game()
game.getGameState()
game.start()
}
 function draw(){
  background(backgroundimg)
if(playerCount===4){
game.updateState(1)

if(gameState===1){

game.play()


}
if(keyDown("space")){
  console.log("hello")
  cannonball=new Cannonball(players[player.index-1].x,players[player.index-1].y-50)

  // cannonball.addImage(cannonballimg)
  // cannonball.velocityY=-6
  // cannonball.scale=0.3
playerbullets[player.index-1].push(cannonball)

}
 }

  
 }










