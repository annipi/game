var aboutState = {
    /*Precarga los elementos a usar durante este estado del juego*/
    preload: function() {
        game.load.image('abt1', 'src/img/about1.png');
        game.load.image('abt2', 'src/img/about2.png');
        game.load.image('next-btn', 'src/img/next.png');
        game.load.image('menu-btn', 'src/img/menu.png');
    },

    /*Crea todos los elementos que apareceran durante este estado del juego*/
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
