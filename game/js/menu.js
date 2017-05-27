var menuState = {
    preload: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.load.atlasJSONHash('sprite', '/sprite01.png', '/sprite01.json');

        //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //game.scale.PageAlignHorizonally = true;
        //game.scale.PageAlignVertically = true;
        //game.stage.backgroundColor = '#000000';
    },

    create: function() {

        var background = game.add.sprite(0, 0, 'sprite', 'background.png');

        //fly = game.add.sprite(0, 180, 'cityscene', 'fly/fly01');
        //fly.scale.setTo(0.5,0.5);
        //fly.animations.add('move', Phaser.Animation.generateFrameNames('fly', 1, 8, '', 4), 10, true, false);
        //fly.animations.play('move');
    },

    update: function() {
    //    fly.x += 3;
    //    if(fly.x > 800)
    //    {
    //        fly.x = -50;
    //    }
    }
};
