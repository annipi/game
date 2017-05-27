//game.js

var game = new Phaser.Game(480, 360, Phaser.AUTO, null, 'gameDiv');

//Estados del juego

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('title', titleState);
game.state.add('play', playState);

//Estado Inicial del Juego
game.state.start('boot');