﻿// ///////////////////////////
// /// LD29
// /// 03/04/2014
// /// By Steven Batchelor-Manning (http://insanedev.co.uk)
// /// and Sin Estelle
// ///////////////////////////
module LD29
{
    export class MenuState extends Phaser.State
    {
        ThemeMusic: Phaser.Sound;
        playMessage: Phaser.Text;
        background: Phaser.Sprite;
        preload()
        {
            this.background = new Phaser.Sprite(this.game, 0, 0, "content-graphics-title");
            this.background.x = (this.game.canvas.width * 0.5) - (this.background.width * 0.5);
            this.background.y = (this.game.canvas.height * 0.5) - (this.background.height * 0.5);
            this.game.add.existing(this.background);
        }

        create()
        {
            this.playMessage = this.game.add.text((window.innerWidth / 2) - 60, (window.innerHeight / 2) + 85, "Click To Play", { font: "19px Arial", fill: "FFD800", stroke: '#000000', strokeThickness: 3 });
            //put event handler on user input to load the game fully when the user clicks a button.
            this.input.onDown.addOnce(this.fadeOut, this);
            this.ThemeMusic =  this.game.add.audio("content-sound-maintheme", 0.2, true);
            this.ThemeMusic.play();
        }

        fadeOut()
        {
            this.add.tween(this.playMessage).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.background).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);
        }
        startGame()
        {
            this.game.state.start('Game', true, false);
        }
    }

}