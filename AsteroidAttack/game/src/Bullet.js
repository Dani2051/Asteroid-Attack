var windowX;

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'Bullet');
        windowX = scene.cameras.main.width;
    }

    fire(x, y) {
        this.body.reset(x, y); // makes bullets x and y value where the spaceship is
        this.setActive(true); // makes bullet active
        this.setVisible(true); // makes bullet visible
        this.setVelocityX(1000); // x velocity of bullet 
    }

    preUpdate(time, delta) { // update method applies to all active bullets
        super.preUpdate(time, delta);

        if (this.x >= windowX) { // deletes the bullet if it exceeds world borders
            this.setActive(false); 
            this.setVisible(false);
        }
    }
}