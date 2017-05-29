var aboutState = {
    preload: function() {
        game.load.image('abt1', 'src/img/about1.png');
        game.load.image('abt2', 'src/img/about2.png');
        game.load.image('next-btn', 'src/img/next.png');
        game.load.image('menu-btn', 'src/img/menu.png');
    },

    //pantalla incial en la que muestra las opciones previas al juego
    create: function() {
        game.add.tileSprite(0,0,835,532,'abt1');
        //Botones para ver mas acerca de y para regresar al menu
        this.add.button( 610, 190, 'next-btn', this.next, this );
    },

    //Se regresa al estado de menu
    backMenu: function(){
        this.state.start('menu');
    },

    //Se muestra mas acerca del juego
    next: function(){
        game.add.tileSprite(0,0,835,532,'abt2');
        this.add.button( 610, 190, 'menu-btn', this.backMenu, this );
    }
};
