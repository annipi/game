var bck;
var stuart;
var wall;
var fire;

var playState = {
    preload: function() {
        game.load.spritesheet('sky_img', 'src/img/sky.png',860, 389);
        game.load.spritesheet('stuart_img', 'src/img/stuart.png',128,128);
        game.load.image('wall_img', 'src/img/wall.png');
        game.load.image('fire_img', 'src/img/fire-r.png');
    },

    create: function() {
        //bck = game.add.tileSprite(0,0,835,389,'sky_img');
    },

    startGame: function(){
        this.state.start('play');
    }
};