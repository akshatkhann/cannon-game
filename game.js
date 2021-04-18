class Game{

constructor(){

}
getGameState(){

    var GameStateREF=database.ref("gameState")
    GameStateREF.on("value",function(data){
    
    gameState=data.val()
    })
    
    }
    updateState(state){
    database.ref("/").update({
    
    gameState:state
    
    })




}





async start(){
if(gameState===0){
player=new Player()
var playerCountREF=await database.ref("playerCount").once("value") 

if(playerCountREF.exists()){
playerCount=playerCountREF.val()
    player.GetCount()

}
foarm=new Foarm()
foarm.display()
}
cannon1=createSprite(displayWidth,displayHeight)
cannon1.addImage(cannonimg)
cannon1.scale=0.3
cannon2=createSprite(displayWidth,displayHeight)
cannon2.addImage(cannonimg)
cannon2.scale=0.3
cannon3=createSprite(displayWidth,displayHeight)
cannon3.addImage(cannonimg)
cannon3.scale=0.3
cannon4=createSprite(displayWidth,displayHeight)
cannon4.addImage(cannonimg)
cannon4.scale=0.3
players=[cannon1,cannon2,cannon3,cannon4]
}
play(){




    

    Player.playerinfo()
    
    var x=100
    var y=200
    var index=0
    
    drawSprites()

    for(var plr in allPlayers){
        
    index = index+1
    x = displayWidth-allPlayers[plr].position;
    y = displayWidth/2;

   
  
  
    players[index-1].x = x
    players[index-1].y = y 
    
    
    if(player===player.index){
        for(var i=0;i<playerbullets[player.index-1].length;i++){
            playerbullets[player.index-1][i].display()
            playerbullets[player.index-1][i].updatey()



        }        
    }
    
    }

if(keyIsDown(LEFT_ARROW)&&player.index!==null){
    player.position+=3
    player.updatePlayerinfo()


}

if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
    player.position-=3
    player.updatePlayerinfo()
    
    
    }

    



}








}