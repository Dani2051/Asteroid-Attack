import Bullet from './Bullet.js'; // Imports Bullet class

export default class BulletGroup extends Phaser.Physics.Arcade.Group {

    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple ({ // creates multiple instances
            classType: Bullet, // of bullet class
            frameQuantity: 300, // creates 300 bullets and stores them for later use 
            active: false,
            visible: false,
            key: 'Bullet' // refrences bullet image 
        })
    }

    fire(x, y) {
        const Bullet = this.getFirstDead(false); // gets first unused bullet
        if (Bullet) { // if true
            Bullet.fire(x, y);  
        }
    }
}
