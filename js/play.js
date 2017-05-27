var bck;
var dead;
var stuart;
var wall;
var walls;
var fire;

var playState = {
    preload: function() {
        game.load.spritesheet('sky_img', 'src/img/sky.png',852, 480);
        game.load.spritesheet('stuart_img', 'src/img/stuart.png',144,144);
        game.load.image('wall_img', 'src/img/wall.png');
        game.load.image('fire_img', 'src/img/fire-r.png');
        game.load.image('stuart_dead', 'src/img/dead_stuart.png');
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        bck = game.add.sprite(0,0,'sky_img');
        bck.animations.add('sky', [0, 1, 2]);

        stuart = game.add.sprite(50,(game.height/5)*2,'stuart_img');
        stuart.animations.add('flying', [0, 1]);
        stuart.anchor.setTo(0.3);
        game.physics.arcade.enable(stuart);
        stuart.body.collideWorldBounds = true;

        //wall = game.add.sprite(400, 200, 'wall_img');
        //walls = game.add.group();
        //walls.enableBody = true;
        //walls.physycsBodyType = Phaser.Physics.Arcade;


    },

    update: function () {
        bck.animations.play('sky',3, true);
        stuart.animations.play('flying',10, true);
    }
};
