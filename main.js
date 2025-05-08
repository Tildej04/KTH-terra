
var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    backgroundColor: 0x99bde0,
    scene: [StartScene, GameScene, GameOverScene],
    parent: 'spel-ruta',  // <--- kopplar till div:en
};

