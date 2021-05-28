class Form {
    constructor() {
        this.title = createElement("h1")
        this.input = createInput("playerName")
        this.button = createButton("play")
        this.greeting = createElement("h2")
        this.reset = createButton("reset")
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display() {

        this.title.html("Car Racing Game")
        this.title.position(displayWidth / 2 -200, 100)
        this.title.style("color", " blue")
        this.title.style("font-size", "45px")

        this.input.position(displayWidth /2 -100, displayHeight /2 -100)
        this.button.position(displayWidth /2 + 55, displayHeight /2 - 70)
        this.reset.position(displayWidth /2, 13)

        // javascrpit arrow functions 
        // function(){ }
        // ()=>{}
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            // this.name means entering name to particular player
            player.name = this.input.value();

            // this.index= playerCount 
            //player.index= playerCount 
            // if playerCount =1
            // player1= playerCount
            playerCount += 1;
            player.index = playerCount


            player.updatename();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth /2 -100, displayHeight /2 - 100);

        })

        this.reset.mousePressed(()=> {
            player.updateCount(0)
            game.updateState(0);
           database.ref("/").update({
               players: null
           })
        })
    }
    }