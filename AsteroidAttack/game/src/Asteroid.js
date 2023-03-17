var windowX

export default class Asteroid extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'asteroidIMG');
        windowX = scene.cameras.main.width;
    }

    spawnAsteroid(y, speed, scale, scene) {
        scene.asteroids.add(this);
        this.body.reset(windowX + 50, y); // spawns asteroid at right of screen with the random y value
        this.setScale(scale); // scales the asteroid
        this.setActive(true); // makes asteroid active
        this.setVisible(true); // makes asteroid visible
        this.setVelocityX(-speed); // x velocity of asteroid
        this.setOffset(30, 30); // adjusts offset from scaling 
        this.setCircle((this.width - 60)/2); // adjusts the asteroids hitbox 
    }

    preUpdate() { // update method
        if (this.x < -this.width/2) { // deletes the asteroid if it exceeds world borders            
            this.setActive(false); 
            this.setVisible(false);
        }
    }
}
