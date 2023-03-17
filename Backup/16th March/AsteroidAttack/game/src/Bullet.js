var windowX;

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'BulletIMG');
        windowX = scene.cameras.main.width;
    }

    fire(x, y, scene) {
        scene.bullets.add(this);
        this.body.reset(x, y); // makes bullets x and y value where the spaceship is
        this.setScale(2);
        this.setActive(true); // makes bullet active
        this.setVisible(true); // makes bullet visible
        this.setVelocityX(1500); // x velocity of bullet 
    }   

    preUpdate() { // update method 
        if (this.x >= windowX + this.width/2) { // deletes the bullet if it exceeds world borders
            this.setActive(false); 
            this.setVisible(false);
        }
    }
}