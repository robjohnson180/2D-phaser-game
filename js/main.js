// JavaScript source code
console.log('loaded');

var config = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:100}
        }
    }
}

var game = new Phaser.Game(config);

var player;
var cursors;

function preload() {

}

function create() {

}

function update() {

}