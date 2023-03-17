export default class Asteroid extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y, 'Asteroid');
        this.windowX = scene.cameras.main.width;
        scene.load.image('Spaceship', 'assets/spaceship.png');
        scene.add.sprite(400, 400, 'asteroid')
    }

    destroy(scene) {
    scene.load.atlas('asteroid', 'assets/asteroid.png', 'assets/asteroid_atlas.json')

    this.anims.create({
        key: 'destroy',
        frames: [{
            key: 'asteroid',
            frame: 'asteroid1'
        }, {
            key: 'asteroid',
            frame: 'asteroid2'
        }, {
            key: 'asteroid',
            frame: 'asteroid3'
        },  {
            key: 'asteroid',
            frame: 'asteroid4'
        },  {
            key: 'asteroid',
            frame: 'asteroid5'
        },  {
            key: 'asteroid',
            frame: 'asteroid6'
        }, {
            key: 'asteroid',
            frame: 'asteroid7'
        }, ],
        framerate: 1,
        repeat: -1
    }); 
    this.load.animation('asteroidAnim', 'assets/asteroid_atlas.json')

    this.asteroid.play("destroy");
    }
}