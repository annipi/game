var bck;
var stuart;
var wall;
var level = 10;
var time = 0;
var winGame;

var playState = {
    /*Precarga los elementos a usar durante el juego*/
    preload: function() {
        game.load.spritesheet('sky_img', 'src/img/sky.png',852, 480);
        game.load.spritesheet('stuart_img', 'src/img/stuart.png',144,144);
        game.load.image('wall_img', 'src/img/wall.png');
        game.load.image('fire_img', 'src/img/fire.png');
        game.load.image('finish-img', 'src/img/finish.png');
    },
    /*Crea todos los elementos que apareceran durante la partida*/
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        bck = game.add.sprite(0,0,'sky_img');
        bck.animations.add('sky', [0, 1, 2]);

        stuart = game.add.sprite(50,(game.height/5)*2,'stuart_img');
        game.physics.enable(stuart, Phaser.Physics.ARCADE);
        stuart.animations.add('flying', [0, 1]);
        stuart.body.collideWorldBounds = true;
        stuart.body.checkCollision.right = true;
        stuart.body.checkCollision.left = true;
        stuart.body.checkCollision.up = true;
        stuart.body.checkCollision.down = true;

        game.time.events.repeat(game.rnd.integerInRange(3000, 5000),level, this.createWall, this);
        game.time.events.add(game.rnd.integerInRange(28000, 30000), this.createFinish, this);

        /*Inicializa los controles del juego*/
        keys = game.input.keyboard.createCursorKeys();
    },

    update: function () {
        bck.animations.play('sky',3, true);
        stuart.animations.play('flying',10, true);

        if(stuart.alive ) {
            if(keys.up.isDown && stuart.y < 480){
                stuart.position.y -= 3;
            }
            if(keys.down.isDown && stuart.y >= 0){
                stuart.position.y += 3;
            }
            if(keys.right.isDown && stuart.x < 857){
                stuart.position.x += 3;
            }
            if(keys.left.isDown && stuart.x >= 0){
                stuart.position.x -= 3;
            }
        }
        game.physics.arcade.overlap(stuart, wall,this.die);
        game.physics.arcade.overlap(stuart, winGame,this.win);

    },

    render: function(){
        time = this.game.time.totalElapsedSeconds()|0;
        game.debug.text('SCORE: ' + time , 700, 32);
    },

    /*Esta funcion crea la meta o objetivo que debe alcanzar stuart(nuestro protagonsita) para ganar*/
    createFinish: function(){
        winGame = game.add.sprite(857,0,'finish-img');
        game.physics.enable(winGame, Phaser.Physics.ARCADE);
        winGame.body.collideWorldBounds = true;
        winGame.body.checkCollision.right = true;
        winGame.body.checkCollision.left = true;
        winGame.body.checkCollision.up = true;
        winGame.body.checkCollision.down = true;
    },

    /*Esta funcion permite crear paredes, que son los obstaculos a evitar por stuart(nuestro protagonista)*/
    createWall: function(){
        wall = game.add.sprite(857, game.rnd.integerInRange(0,336), 'wall_img');
        game.physics.enable(wall, Phaser.Physics.ARCADE);
        wall.body.checkCollision.right = true;
        wall.body.checkCollision.left = true;
        wall.body.checkCollision.up = true;
        wall.body.checkCollision.down = true;
        wall.body.velocity.x = -200;
        wall.lifespan = 6000;
    },

    /*Esta funcion permite pasar al estado de juego Ganado*/
    win: function(){
        game.state.start('win');
    },

    /*Esta funcion permite pasar al estado de juego Perdido*/
    die: function(){
        stuart.kill();
        stuart.alive = false;
        game.state.start('gameOver');
    }
};
