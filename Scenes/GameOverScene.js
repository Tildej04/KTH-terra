class GameOverScene extends Phaser.Scene {

    constructor ()
    {
        super('GameOverScene');
    }

    preload ()
    {
    }


    create() {
        this.add.text(20, 20, "Loading game ...");
        this.add.text(this.scale.width / 2, 300, "Grattis! Du klarade spelet!", { 
            fontSize: '60px', 
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontStyle: 'bold',
            fill:rgb(44, 97, 151),
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5, 0);


        const avsluta = this.add.text(this.scale.width / 2, 500, 'Klicka här för att komma till Startmenyn!', {
            fill: '#bbd4fe',
            fontFamily: 'Trebuchet MS', 
            fontSize: '35px',
            fontStyle: 'bold'
        }).setOrigin(0.5, 0);

        avsluta.setInteractive();

        avsluta.on('pointerover', () => {
            avsluta.setStyle({ fill: '#ff0'});;
        });

        avsluta.on('pointerout', () => {
            avsluta.setStyle({ fill: '#ff0000'});;
        });

        avsluta.on('pointerdown', () => {
            this.scene.start('StartScene')
        });  // Byta till scene 1
        
        
    }

}