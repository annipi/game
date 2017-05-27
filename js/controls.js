var controlState = {
    preload: function() {
        game.load.image('back', 'src/img/background.png');
        game.load.image('play-btn', 'src/img/play-button.png');
    },

    //pantalla incial en la que muestra las opciones previas al juego
    create: function() {
        game.add.tileSprite(0,0,835,532,'back');
        //se agrega un botón que da paso a iniciar el juego
        var nextBtn = this.add.button( game.width/2 - 30, (game.height/5)*2, 'play-btn', this.startGame, this );
        nextBtn.anchor.setTo(0.5);
    },

    //Se pasa al estado de Juego
    startGame: function(){
        this.state.start('play');
    }
};
