var game = new Phaser.Game(857, 480, Phaser.CANVAS, 'flyGame');

//añadiendo todos los estados que tiene el juego
game.state.add('menu', menuState);
game.state.add('credits', creditsState);
game.state.add('about', aboutState);
game.state.add('play', playState);
game.state.add('gameOver', gameOverState);
game.state.add('win', winState);

//Estado inicial del juego Menu
game.state.start('menu');