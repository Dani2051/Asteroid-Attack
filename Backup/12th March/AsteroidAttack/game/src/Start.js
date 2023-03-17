class Start extends Phaser.Scene { // creates the class for this scene 
    constructor() {
        super("start"); // creates identifier for this scene
    }

create() {
    this.scene.start("main") //TAKE OUT WHEN DONE
    const windowX = this.cameras.main.width;
    const windowY = this.cameras.main.height;

    // creates title
    this.add.text(windowX/2, windowY/2, 'Asteroid Attack', {fontSize: '120px', fill: '#ff0000', fontFamily: 'Arial'})
    .setOrigin(0.5);
    
    // creates start button 
    this.startButton = this.add.text(100, 650, 'Start', {fontSize: '100px', fill: '#000000', fontFamily: 'Arial'})
    .setInteractive({useHandCursor: true}) // sets button to interactive 
    // when first parameter is true then the corresponding function is called
    .on('pointerover', () => this.startButton.setStyle({fill: '#00ff00'}))
    .on('pointerout', () => this.startButton.setStyle({fill: '#000000'}))
    .on('pointerdown', () => this.scene.start("main"))

    // creates leaderboard button
    this.leaderboardButton = this.add.text(100, 850, 'Leaderboard', {fontSize: '100px', fill: '#000000', fontFamily: 'Arial'})    
    .setInteractive({useHandCursor: true}) // sets button to interactive
    // when first parameter is true then the corresponding function is called
    .on('pointerover', () => this.leaderboardButton.setStyle({fill: '#00ff00'}))
    .on('pointerout', () => this.leaderboardButton.setStyle({fill: '#000000'}))
    .on('pointerdown', () => this.scene.start("leaderboard"))
    }
}

    

    

 


