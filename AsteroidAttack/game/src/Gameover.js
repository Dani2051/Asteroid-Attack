class Gameover extends Phaser.Scene { // creates the class for this scene
    constructor() {
        super("gameover"); // creates identifier for this scene
    }

    preload() {
    }

    create() {
        this.add.text(20,20, "gameover screen"); // outputs text to the screen
    }

    update() {
    }
}