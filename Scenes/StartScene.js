class StartScene extends Phaser.Scene {

    constructor ()
    {
        super('StartScene');
    }

    preload ()
    {
        this.load.image('karta', './assets/karta.png');

    }

    create() {
        
        const bg = this.add.image(0, 0, 'karta')
            .setOrigin(0)
            .setDisplaySize(this.scale.width, this.scale.height) // Fyll hela skärmen
            .setAlpha(0.3); // Justera transparens

        const game = this.add.text(150, 180, 'KTH-terra', {
            fill: '#0d3a67',
            font: 'bold 150px "Arial"', // Lekfull och rund stil
            stroke: '#ffffff',
            strokeThickness: 8
        });

        const helloButton = this.add.text(220, 350, 'Klicka här för att starta spelet!', {
            fill: '#0d3a67',
            fontFamily: 'Trebuchet MS',
            fontSize: '40px',
            fontStyle: 'bold'});
        helloButton.setInteractive();

        helloButton.on('pointerover', () => {
            helloButton.setStyle({ fill: '#ff0'});;
        });

        helloButton.on('pointerout', () => {
            helloButton.setStyle({ fill: '#0d3a67'});;
        });

        helloButton.on('pointerdown', () => {
            this.time.delayedCall(170, () => {
                this.scene.start('GameScene');
              }, null, this);        
        });  // Byta till scene 2
        
        

    }

}