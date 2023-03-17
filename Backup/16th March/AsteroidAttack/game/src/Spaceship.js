import BulletGroup from './BulletGroup.js'; // Imports BulletGroup class

var speed = 15;
var spaceship;
var windowX;
var windowY;

export default class Spaceship extends Phaser.Physics.Arcade.Sprite { 
    
    constructor(scene, x, y) {
        super(scene, x, y);
        windowX = scene.cameras.main.width; // finds the max width of screen 
        windowY = scene.cameras.main.height; // finds the max height of screen   

        this.BulletGroup = new BulletGroup(scene); // creates new instance of bulletGroup class
        spaceship = scene.physics.add.image(500, windowY/2, 'SpaceshipIMG').setScale(2);; // adds ship to scene
        //spaceship.setSize(35, 25);
    }

    move(xDirection, yDirection) {
        spaceship.x += xDirection*speed;
        spaceship.y += yDirection*speed; 

        if (spaceship.x < spaceship.width/2) {
            spaceship.x = spaceship.width/2
        }

        if (spaceship.y < spaceship.height/2) {
            spaceship.y = spaceship.height/2
        }

        if (spaceship.x > windowX-spaceship.width/2) {
            spaceship.x = windowX-spaceship.width/2
        }

        if (spaceship.y > windowY-spaceship.height/2) {
            spaceship.y = windowY-spaceship.height/2
        }
    }

    shoot(scene) {
        this.BulletGroup.fire(scene, spaceship.x + spaceship.width/2 + 10, spaceship.y);
    }
}


