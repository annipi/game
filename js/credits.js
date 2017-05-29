var creditsState = {
    /*Precarga los elementos a usar durante este estado del juego*/
    preload: function() {
        game.load.image('cred1', 'src/img/credit1.png');
        game.load.image('cred2', 'src/img/credit2.png');
        game.load.image('next-btn', 'src/img/next.png');
        game.load.image('menu-btn', 'src/img/menu.png');
        game.load.image('github-btn', 'src/img/github.png');
    },

    /*Crea todos los elementos que apareceran durante este estado del juego*/
    create: function() {
        game.add.tileSprite(0,0,835,532,'cred1');
        //Botones para ver mas acerca de y para regresar al menu
        this.add.button( 610, 190, 'next-btn', this.next, this );
        this.add.button( 300, 350, 'github-btn', this.git, this );
    },

    //Abre nueva ventana hacia el repositorio en github
    git: function(){
        window.open("https://github.com/annipi/game", "_blank");
    },

    //Se regresa al estado de menu
    backMenu: function(){
        this.state.start('menu');
    },

    //Se muestra mas sobre los creditos del juego
    next: function(){
        game.add.tileSprite(0,0,835,532,'cred2');
        this.add.button( 610, 190, 'menu-btn', this.backMenu, this );
    }
};