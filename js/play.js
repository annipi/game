var bck;
var dead_stuart;
var stuart;
var walls;
var wall;
var fireballs;
var fireball;
var time;
var score;

var playState = {
    preload: function() {
        game.load.spritesheet('sky_img', 'src/img/sky.png',852, 480);
        game.load.spritesheet('stuart_img', 'src/img/stuart.png',144,144);
        game.load.image('wall_img', 'src/img/wall.png');
        game.load.image('fire_img', 'src/img/fire.png');
        game.load.image('stuart_dead', 'src/img/dead_stuart.png');
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        bck = game.add.sprite(0,0,'sky_img');
        bck.animations.add('sky', [0, 1, 2]);

        stuart = game.add.sprite(50,(game.height/5)*2,'stuart_img');
        game.physics.enable(stuart, Phaser.Physics.ARCADE);
        stuart.animations.add('flying', [0, 1]);
        stuart.body.collideWorldBounds = true;
        stuart.body.checkCollision.right = true;
        stuart.body.checkCollision.left = true;
        stuart.body.checkCollision.up = true;
        stuart.body.checkCollision.down = true;

        wall = game.add.sprite(800, 200, 'wall_img');
        game.physics.enable(wall, Phaser.Physics.ARCADE);
        wall.body.velocity.x = -200;
        wall.lifespan = 7000;

        //botones de movimiento
        keys = game.input.keyboard.createCursorKeys();

        //configuración dpara disparo de poderes
        fireBtn = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    },

    update: function () {
        bck.animations.play('sky',3, true);
        stuart.animations.play('flying',10, true);

        if(stuart.alive ) {
            if(keys.up.isDown && stuart.y < 480){
                stuart.position.y -= 3;
            }
            if(keys.down.isDown && stuart.y > 0){
                stuart.position.y += 3;
            }
            if(keys.right.isDown && stuart.x < 857){
                stuart.position.x += 3;
            }
            if(keys.left.isDown && stuart.x > 0){
                stuart.position.x -= 3;
            }
        }
        game.physics.arcade.collide(stuart, wall);
        //game.physics.arcade.overlap(fireballs, walls, destroy, null, this);

    },

    //función para muerte por colision contra paredes
    //smashWall: function(){
    //    if( !stuart.alive ){return;}
    //    alert("Un minuto de silecio has matado a Stuart :'(");
    //    stuart.alive = false;
    //    this.state.start('Menu');
    //},

    render: function(){
        time = this.game.time.totalElapsedSeconds()|0;
        score = game.debug.text('SCORE: ' + time , 700, 32);
    }
};

//función para colision bolas de fuego contra paredes
//function destroy(fireball, wall){
//    wall.kill();
//    fireball.kill();
//}
