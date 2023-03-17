import Spaceship from './Spaceship.js'; 
import AsteroidGroup from './AsteroidGroup.js'; 

export default class Main extends Phaser.Scene {

    constructor() {
        super('main'); // creates identifier for this scene 
    }

    preload() {
        this.load.image('spaceshipIMG', 'assets/spaceship.png')
        this.load.image('bulletIMG', 'assets/bullet.png') 
        this.load.image('backgroundIMG', 'assets/background.png')  
        this.load.image('starsIMG', 'assets/bg-stars.png')  
        this.load.audio('explodeAUDIO', 'assets/explosion.wav')
        this.load.audio('bulletAUDIO', 'assets/test3.wav')
        this.load.audio('bgAUDIO', 'assets/bgMusic.wav')        
        this.load.atlas('asteroidIMG', 'assets/asteroid.png', 'assets/asteroid_atlas.json')   

    }

    create() {        
        this.windowX = this.cameras.main.width;
        this.windowY = this.cameras.main.height;
        this.explodeSFX = this.sound.add('explodeAUDIO', {volume: 0.3});  
        this.bulletSFX = this.sound.add('bulletAUDIO', {volume: 0.10}); 
        this.bgMusic = this.sound.add('bgAUDIO', {volume: 0.25, loop: true}).play();

        this.score = 0;
        this.background = this.add.tileSprite(0, 0, this.windowX*2, this.windowY*2, 'backgroundIMG').setOrigin(0, 0).setScale(6.5);
        this.stars = this.add.tileSprite(0, 0, this.windowX*2, this.windowY*2, 'starsIMG').setOrigin(0, 0).setScale(6.5);

        this.playerScore = this.add.text(this.windowX - 250,20, "Score: 0", {font: "40px Arial", fill: "red"});
        this.inputKeys = this.input.keyboard.addKeys('left, right, up, down, space, W, S, A, D');

        this.AsteroidGroup = new AsteroidGroup(this);
        this.Spaceship = new Spaceship(this);

        this.asteroids = this.add.group();
        this.bullets = this.add.group();
        this.physics.add.collider(this.asteroids, this.bullets, this.bulletAsteroidCollision, null, this);

        this.anims.create({ 
            key: 'explode', 
            frames: this.anims.generateFrameNames('asteroidIMG', { 
                prefix: 'asteroid', 
                start: 1,
                end: 7, 
            }), 
            duration: 400,
            skipMissedFrames: false,
            repeat: 0,
            hideOnComplete: true,
    });
}

    bulletAsteroidCollision(asteroid, bullet) {    
        this.explodeSFX.play();      
        this.add.sprite(asteroid.x, asteroid.y, 'asteroidIMG').play("explode").setScale(asteroid.scale); // creates asteroid and plays anim
        this.score += 5; // adds score
        this.playerScore.text = "Score: " + this.score;
        asteroid.body.reset(-100, -100); // sends asteroid off page
        bullet.body.reset(this.windowX + 100, this.windowY + 100); // sends bullet off page
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

        if (this.input.keyboard.checkDown(this.inputKeys.space, 120) == true) {
            this.bulletSFX.play();         
            this.Spaceship.shoot(this); // shoots bullets from spaceship 
        }

        this.background.tilePositionX += 0.6;
        this.stars.tilePositionX += 0.3; // scrolls background left
        this.AsteroidGroup.randGeneration(this);
    }
}

