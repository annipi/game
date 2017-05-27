var game = new Phaser.Game(830, 380, Phaser.AUTO, 'flyGame');
var fly;

game.state.add('menu', menuState);
game.state.add('play', playState);
//game.state.add('game_over', gameOverState);

game.state.start('menu');