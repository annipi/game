var game = new Phaser.Game(857, 480, Phaser.CANVAS, 'flyGame');

game.state.add('menu', menuState);
game.state.add('credits', creditsState);
game.state.add('about', aboutState);
game.state.add('play', playState);
game.state.add('gameOver', gameOverState);
game.state.add('win', winState);

game.state.start('menu');