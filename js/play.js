var bck;
var dead_stuart;
var stuart;
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
        stuart.animations.add('flying', [0, 1]);
        stuart.anchor.setTo(0.3);
        game.physics.arcade.enable(stuart);
        stuart.body.collideWorldBounds = true;

        //pre-creación de las poderes
        fireballs = game.add.group();
        fireballs.enableBody = true;
        fireballs.physycsBodyType = Phaser.Physics.Arcade;
        fireballs.createMultiple(5, 'fire_img');
        //fireballs.setAll('anchor.x',0.5);//stuart.x + 50);
        //fireballs.setAll('anchor.y',0.5);//stuart.y + 70);
        fireballs.setAll('outOfBoundsKill',true);
        fireballs.setAll('checkWorldBounds', true);

        wall = game.add.sprite(400, 200, 'wall_img');
        wall.enableBody = true;
        wall.physycsBodyType = Phaser.Physics.Arcade;
        wall.anchor.setTo(0.5);

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
            if(fireBtn.justPressed()){
                fireball = fireballs.getFirstExists(false);
                if(fireball){
                    fireball.reset(stuart.x+50, stuart.y+70);
                    game.physics.p2.enable(fireball);
                    fireball.body.moveRight(800);
                    fireball.body.setCircle(10);
                }
            }
        }else{
            //stuart.animations.stop();
            dead_stuart = game.add.sprite(stuart.x - 52 ,stuart.y -52,'stuart_dead');
            stuart.kill();
        }
        game.physics.arcade.overlap(fireballs, wall, destroy, null, this);
        game.physics.arcade.overlap(stuart, wall, this.smashWall, null, this);
    },

    //función para muerte por colision contra paredes
    smashWall: function(){
        if( !stuart.alive ){
            return;
        }
        alert("Un minuto de silecio has matado a Stuart :'(");
        stuart.alive = false;
        this.state.start('Menu');
    },

    render: function(){
        time = this.game.time.totalElapsedSeconds()|0;
        score = game.debug.text('SCORE: ' + time , 700, 32);
    }
};

//función para colision bolas de fuego contra paredes
function destroy(fireball, wall){
    wall.kill();
    fireball.kill();
}
