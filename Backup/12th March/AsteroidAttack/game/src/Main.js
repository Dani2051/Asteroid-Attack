import Spaceship from './Spaceship.js'; // Imports Spaceship class
import Asteroid from './Asteroid.js'; // Imports Asteroid class

export default class Main extends Phaser.Scene { // creates the class for this scene 

    constructor() {
        super('main'); // creates identifier for this scene 
    }

    preload() {
        this.Bullet = this.load.image('Bullet', 'assets/bullet.png') // preloads bullet image
        
        this.Spaceship = new Spaceship(this); // creates new instance of spaceship class 
        Spaceship.preload(this); // calls the ships preload function 
    }

    create() {          
        this.Spaceship.spawn(this); // spawns in ship 

        // creates keyboard input keys and accepts them as inputs 
        this.inputKeys = this.input.keyboard.addKeys('left, right, up, down, space, W, S, A, D');
    }

    update() {
        if (this.inputKeys.up.isDown || this.inputKeys.W.isDown) {
            this.Spaceship.move(0,-1); // moves spaceship up
        }

        if (this.inputKeys.left.isDown || this.inputKeys.A.isDown) {
            this.Spaceship.move(-1,0); // moves spaceship left
        }

        if (this.inputKeys.down.isDown || this.inputKeys.S.isDown) {
            this.Spaceship.move(0,1); // moves spaceship down 
        } 

        if (this.inputKeys.right.isDown || this.inputKeys.D.isDown) {
            this.Spaceship.move(1,0); // moves spaceship right 
        }                              

        if (this.input.keyboard.checkDown(this.inputKeys.space, 100) == true) {
            this.Spaceship.shoot(); // shoots bullets from spaceship 
        }
    }
}




