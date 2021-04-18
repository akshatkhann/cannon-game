class Foarm{



constructor(){
this.cannon=createElement("h2")
this.greating=createElement("h2")
this.name=createInput("name")
this.play=createButton("play")
}


display(){

    this.cannon.html("cannon ball throwing game")
    this.cannon.position(displayWidth/2,10)
   
    this.name.position(displayWidth/2,displayHeight/2)
    
    this.play.position(displayWidth/2,displayHeight/2+50)
    this.play.mousePressed(()=>{
    this.play.hide()
    this.name.hide()
    playerCount+=1
    player.index=playerCount
    player.updateCount(playerCount)
    player.name=this.name.value()
    player.updatePlayerinfo()

this.greating.html("hello"+player.name)
this.greating.position(displayWidth/2,displayHeight/2)
    })








}





}