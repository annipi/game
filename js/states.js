var game = new Phaser.Game(857, 480, Phaser.CANVAS, 'flyGame');

game.state.add('menu', menuState);
game.state.add('control', controlState);
game.state.add('play', playState);
//game.state.add('game_over', gameOverState);

game.state.start('menu');