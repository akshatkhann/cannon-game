class Player{

constructor(){
this.name=null
this.position=100
this.rank=null
this.cannonballs=[]
}

GetCount(){
var playerCountREF=database.ref("playerCount")
playerCountREF.on("value",function(data){
playerCount=data.val()
})
}

updateCount(count){
database.ref("/").update({

playerCount:count


})

}


updatePlayerinfo(){
    var playerinfo=database.ref("players/player"+this.index)
database.ref(playerinfo).set({

name:this.name,
position:this.position


})


}
static playerinfo(){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {
        allPlayers = data.val();




})

}
















}