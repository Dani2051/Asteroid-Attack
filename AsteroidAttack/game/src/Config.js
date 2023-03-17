import Main from "./Main.js";

//stores the configuration of the game
let config = { 
    type: Phaser.AUTO, //Phaser will use WebGL if it can, if not it will use canvas
    width: 1920, //sets the width of the window
    height: 1080, //sets the height of the window
    backgroundColor: '#808080', // Sets the default background colour for all scenes
    scene: [Start, Main, Leaderboard, Gameover], //all the scenes that the program will contain
    scale: {
        mode: Phaser.Scale.FIT, //will scale the window to fit the users screen
        autoCenter: Phaser.Scale.CENTER_BOTH //will place the window at the centre of the users screen
    },    
    physics: { // Configurates the physics that will be used in the game
        default: 'arcade', // Uses arcade physics
        arcade: {
            debug: false,
            gravity: {y: 0}
        }
    }
}

let game = new Phaser.Game(config); //creates new game instance with configuration 'config'


