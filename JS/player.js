class Player {
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
        
    }
// geting the playerCount information from firebase
    getCount(){
    var referee=database.ref("playerCount")
    referee.on("value",(data)=>{
     playerCount=data.val()
    })

    }

// this function updating playerCount to my firebase
    updateCount(count){
      database.ref("/").update({
       playerCount:count
      })
    }

// update name of the player
  updatename(){     
      // player1, player2
        var playerindex= "players/player"+this.index
        database.ref(playerindex).set({
        name:this.name,
        distance: this.distance
        })
    }
    
   static getPlayerInput(){
          var info = database.ref("players")
          info.on("value" ,(data)=>{
          allplayers = data.val()
          })
    }
      
    
    


}