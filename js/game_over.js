var gameOverState = {
    preload: function () {
        game.load.image('back', 'src/img/background.png');
        game.load.image('stuart-dead','src/img/dead_stuart.png');
        game.load.image('replay-btn', 'src/img/replay.png');
        game.load.image('msg', 'src/img/kill-msg.png');
        game.load.image('rip', 'src/img/rip.png');
        game.load.image('menu-btn', 'src/img/menu.png');
    },

    create: function() {
        game.add.tileSprite(0,0,835,532,'back');
        game.add.sprite(70, 20, 'msg');
        game.add.sprite(420,250,'stuart-dead');
        game.add.sprite(560,200,'rip');
        this.add.button( 60, 200, 'replay-btn', this.startGame, this );
        this.add.button( 250, 200, 'menu-btn', this.backMenu, this );
        time = game.time.totalElapsedSeconds()|0;
        game.add.text(680, 335,''+time, { font: "16px Courier New", fill: "#3f4253"} );
    },

    //Se regresa al estado de menu
    backMenu: function(){
        this.state.start('menu');
    },

    //se pasa al estado Juego
    startGame: function(){
        this.state.start('play');
    }

};