var winState = {
    preload: function () {
        game.load.image('back', 'src/img/win.png');
        game.load.image('replay-btn', 'src/img/replay.png');
        game.load.image('menu-btn', 'src/img/menu.png');
    },

    create: function() {
        game.add.tileSprite(0,0,835,532,'back');
        this.add.button( 60, 250, 'replay-btn', this.startGame, this );
        this.add.button( 250, 250, 'menu-btn', this.backMenu, this );
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
