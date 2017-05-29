var gameOverState = {
    preload: function () {
        game.load.image('back', 'src/img/background.png');
        game.load.image('stuart-dead','src/img/dead_stuart.png');
        game.load.image('replay-btn', 'src/img/replay.png');
        game.load.image('msg', 'src/img/kill-msg.png');
        game.load.image('rip', 'src/img/rip.png');
    },

    create: function() {
        game.add.tileSprite(0,0,835,532,'back');
        game.add.sprite(70, 20, 'msg');
        game.add.sprite(420,250,'stuart-dead');
        game.add.sprite(560,200,'rip');
        var replayBtn = this.add.button( 250, 300, 'replay-btn', this.startGame, this );
        replayBtn.anchor.setTo(0.5);
        time = this.game.time.totalElapsedSeconds()|0;
        game.add.text(680, 330,''+time, { font: "16px Arial", fill: "#3f4253"} );
    },

    //se pasa al estado Juego
    startGame: function(){
        this.state.start('play');
    }

};