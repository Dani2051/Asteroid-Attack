import Asteroid from './Asteroid.js'; // Imports Asteroid class

var windowY;

export default class AsteroidGroup extends Phaser.Physics.Arcade.Group {

    constructor(scene) {
        super(scene.physics.world, scene);
        
        windowY = scene.cameras.main.height;

        this.createMultiple ({ // creates multiple instances
            classType: Asteroid, // of asteroid class
            frameQuantity: 15, // creates 300 asteroid and stores them for later use 
            active: false,
            visible: false,
            key: 'asteroidIMG' // references asteroid image 
        })
    }

    randGeneration(scene) {
        var rnd = Phaser.Math.RND;
        var randomNum = rnd.between(1, 100); // randomly generates integer
        if (randomNum > 30) { // if integer is above spawn rate
            const Asteroid = this.getFirstDead(false); // gets first unused asteroid
            if (Asteroid) { // if true
                var scale = rnd.between(2,5);
                var y = rnd.between(0, windowY); // randomly generates asteroid height 
                var speed = rnd.between(100, 700); // randomly generates asteroid speed

                Asteroid.spawnAsteroid(y, speed, scale, scene);
            }
        }
    }
}