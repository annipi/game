var menuState = {
    preload: function() {
        game.load.image('back', 'src/img/background.png');
        game.load.image('play-btn', 'src/img/play-button.png');
        game.load.image('about', 'src/img/about-btn.png');
        game.load.image('credits', 'src/img/credits-btn.png');
    },

    create: function() {
        game.add.tileSprite(0,0,835,532,'back');
        //se agrega un botón que da paso a iniciar el juego
        this.add.button( 270, 80, 'play-btn', this.startGame, this );
        this.add.button( 225, 260, 'credits', this.creditsGame, this );
        this.add.button( 465, 260, 'about', this.aboutGame, this );
    },

    //se pasa al estado Juego
    startGame: function(){
        this.state.start('play');
    },

    //se pasa al estado de Creditos del juego
    creditsGame: function(){
        this.state.start('credits');
    },

    //se pasa al estado de Acerca del Juego
    aboutGame: function(){
        this.state.start('about');
    }
};