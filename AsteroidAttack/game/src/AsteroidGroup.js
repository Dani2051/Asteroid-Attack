import Asteroid from './Asteroid';

export default class AsteroidGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);
    }
}