﻿module LD29.Characters {
    export class CharacterBase extends Phaser.Sprite {

        facing: string;
        constructor(game: Phaser.Game, x: number, y: number, image: string) {
            super(game, x, y, image, 0);

            this.anchor.setTo(0.5, 0);

            this.facing = 'right';
            game.add.existing(this);


            this.animations.add('down', [0, 1, 2], 10, true);
            this.animations.add('left', [3, 4, 5], 10, true);
            this.animations.add('right', [6, 7, 8], 10, true);
            this.animations.add('up', [9, 10, 11], 10, true);
            this.animations.play('right');

        }

        MovementUpdate() {

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.x--;

                if (this.facing != 'left') {
                    this.animations.play('left');
                    this.facing = 'left';
                }
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.x++;
                if (this.facing != 'right') {
                    this.animations.play('right');
                    this.facing = 'right';
                }
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.y--;
                if (this.facing != 'up') {
                    this.animations.play('up');
                    this.facing = 'up';
                }
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.y++;
                if (this.facing != 'down') {
                    this.animations.play('down');
                    this.facing = 'down';
                }
            } else {
                this.animations.frame = 0;
            }
        }

    }
} 