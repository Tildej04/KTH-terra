class GameScene extends Phaser.Scene {

    constructor ()
    {
        super('GameScene');
    }

    preload ()
    {
        this.load.image('karta', './assets/karta.gif');

    }

    create() {

        // Bild på kartan
        const bildKarta = this.add.image(500, 380, 'karta');
        bildKarta.setScale(2.5)
        
        // Avbrytknapp
        const hej = this.add.text(920, 20, 'Avbryt', {fill: '#ff0000'});
        hej.setInteractive();

        hej.on('pointerover', () => {
            hej.setStyle({ fill: '#ff0'});;
        });

        hej.on('pointerout', () => {
            hej.setStyle({ fill: '#ff0000'});;
        });

        hej.on('pointerdown', () => {
            this.scene.start('StartScene')
        });  // Byta till scene 1

      

        // Alla husen i figurer

        // Funktion som skapar cirklar/byggnader

        const skapaCirkel = (xKord, yKord) => {
            const byggnad = this.add.circle(xKord, yKord, 5, 0xffffff);
            byggnad.setInteractive();
            byggnad.setStrokeStyle(3, 0x000000);

            byggnad.on('pointerover', () => {
                byggnad.setFillStyle(0x000000);
            });
    
            byggnad.on('pointerout', () => {
                byggnad.setFillStyle(0xffffff);
    
            });

            return byggnad;
        };

       const Ehuset = skapaCirkel(888, 500);
       const Dhuset = skapaCirkel(955, 490);
       const Bibloteket = skapaCirkel(797, 448);
       const Borggården = skapaCirkel(885, 420);
       const nk = skapaCirkel(777, 555);
       const F1 = skapaCirkel(910, 350)
       const Khuset = skapaCirkel(815, 270)
       const Vhuset = skapaCirkel(595, 180)
       const KTHhallen = skapaCirkel(400, 190)
       const Uhuset = skapaCirkel(541, 270)
       const Bhuset = skapaCirkel(541, 360)
       const TC = skapaCirkel(631, 550)
       const META = skapaCirkel(760, 410)


        // Array med platserna
        const platser = ['E-huset', 'D-huset', 'Bibloteket', 'Borggården', 'Nymble/kårhuset', 'F1', 'K-huset', 'V-huset', 'KTH-hallen', 'U-huset', 'B-huset', 'TC', 'META'];

        // Returnerar en random integer från 0 till arraylängden:

        const nyArray = []
        for (let i = 0; i < platser.length; i++) {
            const randomNumber = Math.floor(Math.random() * (platser.length));
            const aktuellPlats = platser[randomNumber]; // Platsen spelaren ska klicka på

            if (!nyArray.includes(aktuellPlats)){
                nyArray[i] = aktuellPlats
            }else {
                i--; // Om platsen redan finns, försök igen utan att gå vidare i loopen
            }
                  
            }

            let currentIndex = 0
            let aktuellPlats = nyArray[currentIndex]
            let text = this.add.text(20, 30, "Klicka på... " + aktuellPlats, {fontSize: 30});

    
// Byggnad är alltså namnent på figuren/cirkeln
// Arrow funktion, this så menar man scenen

        const test = (byggnad, namnArray, textObjekt)  => {
            byggnad.on('pointerdown', () => {
                if (aktuellPlats === namnArray){
                    byggnad.setFillStyle(0x00FF00); // är grön konstant
                    byggnad.on('pointerout',() => {
                        byggnad.setFillStyle(0x00FF00);
                    });

                    currentIndex++;
                    if (currentIndex < nyArray.length) {
                        aktuellPlats = nyArray[currentIndex];
                        textObjekt.setText("Klicka på... " + aktuellPlats);
                    } else {
                        this.time.delayedCall(500, () => {
                            this.scene.start('GameOverScene');
                          }, null, this); // <--- Här säger vi att "this" inuti callback = scenen
                        }  // det inte finns några platser kvar, gå till scen 3
       
                } else {
                    byggnad.setFillStyle(0xFF0000);

                    const felmeddelande = this.add.text(110, 600, "Du klickade fel, testa igen!", {fill: '#ff0000', fontSize: 35});
                    this.time.delayedCall(1000, () => {
                        felmeddelande.destroy();
                    }, null, this); 
                    // denna ska tas bort efter 3 sek
                    
                }
                });
            }

            test(Ehuset, 'E-huset', text);
            test(Dhuset, 'D-huset', text);
            test(Bibloteket, 'Bibloteket', text);
            test(nk, 'Nymble/kårhuset', text);
            test(Borggården, 'Borggården', text);
            test(F1, 'F1', text);
            test(Khuset, 'K-huset', text);
            test(Vhuset, 'V-huset', text);
            test(KTHhallen, 'KTH-hallen', text);
            test(Uhuset, 'U-huset', text);
            test(Bhuset, 'B-huset', text);
            test(TC, 'TC', text);
            test(META, 'META', text);
            

    }

    

}