// puts you back at the start area
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202050303030303020202020202020202020503010303030303030202020202020205030303030303030303030202020202020202020303030303030303020202020202020202020202030301030302020202020202020202020303030303030304020202020202020202030303030303040202020202020202020303030301030402020202020202020303030303030302020202020202020303030303020202020202020202030303030303020202020202020202020303010303030202020202020202030403030303030202020202020202030303030303030202020202020202030301030303030202020202020202`, img`
        2 2 2 2 2 2 2 . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . 2 2 2 . . . . 
        . . . . . . . . . . . 2 2 . . . 
        2 2 2 2 . . . . . . . . 2 2 . . 
        . . . 2 2 2 2 2 . . . . . 2 2 2 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 . . . . . . . 2 
        . . . . 2 2 2 . . . . . 2 2 2 2 
        . . . . 2 . . . . . . 2 2 . . . 
        . . 2 2 2 . . . . . . 2 . . . . 
        . 2 2 . . . . . . . 2 2 . . . . 
        2 2 . . . . . . . 2 2 . . . . . 
        2 . . . . . . . 2 2 . . . . . . 
        `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.oceanDepths9], TileScale.Sixteen))
})
function startGame () {
    // what happens when you start the game
    tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202050303030303020202020202020202020503010303030303030202020202020205030303030303030303030202020202020202020303030303030303020202020202020202020202030301030302020202020202020202020303030303030304020202020202020202030303030303040202020202020202020303030301030402020202020202020303030303030302020202020202020303030303020202020202020202030303030303020202020202020202020303010303030202020202020202030403030303030202020202020202030303030303030202020202020202030301030303030202020202020202`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . 2 2 2 2 2 2 2 
        . . . . . . . . . . . 2 2 2 2 2 
        2 2 2 2 . . . . . . . . 2 2 2 2 
        2 2 2 2 2 2 2 2 . . . . . 2 2 2 
        2 2 2 2 2 2 2 2 . . . . . . . . 
        2 2 2 2 2 2 2 2 2 . . . . . . . 
        2 2 2 2 2 2 2 2 2 . . . . . . . 
        2 2 2 2 2 2 2 2 . . . . . . . 2 
        2 2 2 2 2 2 2 . . . . . 2 2 2 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 2 2 2 2 . . . . . . 2 2 2 2 2 
        2 2 2 . . . . . . . 2 2 2 2 2 2 
        2 2 . . . . . . . 2 2 2 2 2 2 2 
        2 . . . . . . . 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.oceanDepths9], TileScale.Sixteen))
    scene.cameraFollowSprite(main)
    main = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . . f d d d d f . . . . . 
        . . . . . f d d d d f . . . . . 
        . . . f f f d d d d f f f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f d d 2 2 2 2 d d f . . . 
        . . . f d d 2 2 2 2 d d f . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . . . . f 8 8 8 8 f . . . . . 
        . . . . . f 8 8 8 8 f . . . . . 
        . . . . . f 8 8 8 8 f . . . . . 
        . . . . . f 8 8 8 8 f . . . . . 
        `, SpriteKind.Player)
    main.setPosition(72, 59)
    controller.moveSprite(main)
    scene.cameraFollowSprite(main)
    info.setLife(3)
    game.showLongText("Hi.", DialogLayout.Bottom)
    game.showLongText("It's the middle of the COVID-19 quarantine.", DialogLayout.Bottom)
    game.showLongText("I need to get to the store.", DialogLayout.Bottom)
    game.showLongText("If you are on keyboard, 'z' is a and 'x' is b.", DialogLayout.Bottom)
}
function gameMusic () {
    // music
    music.setTempo(220)
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
    }
}
function scene2 () {
    // second area
    if (main.tileKindAt(TileDirection.Right, sprites.castle.tileGrass3)) {
        main.setPosition(24, 30)
        scene.cameraShake(8, 500)
        tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202050502020202020202020202020202020505050202020202020202020202020201050501010101020202020202020202020105050101010101020202020202020202010101010101010202020202020202020101010101010101020202020202020201010102020101010102020202020202010102020202010101010102020202020101020202010101010101010102020101010202010101010201010101060201010101010101010102020201010602010101010101010102020202020202020101010202020202020202020202020304030202020202020202020202020209070802020202020202020202020202`, img`
            2 2 2 . . . . . . . . . . . . . 
            . . 2 2 . . . . . . . . . . . . 
            . . . 2 2 2 2 2 . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            2 . . . . . . . . 2 . . . . . . 
            2 2 . . . . . . . 2 2 . . . . . 
            2 2 . . . . . . . . 2 2 . . . . 
            2 2 . . . 2 2 . . . . 2 2 2 . . 
            2 2 . . 2 2 2 2 . . . . . 2 2 2 
            2 2 . . 2 2 2 . . . . . . . . 2 
            2 . . . 2 2 . . . . 2 . . . . . 
            2 . . . . . . . . . 2 2 2 . . . 
            2 . . . . . . . . 2 . . 2 2 2 2 
            2 . . . 2 2 2 2 2 2 . . . . . . 
            2 2 2 2 2 . . . . . . . . . . . 
            . . . 2 . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.rock2,sprites.castle.rock1,sprites.castle.tileGrass1,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7], TileScale.Sixteen))
        game.showLongText("Stay away from other people.", DialogLayout.Bottom)
        parkbadguy = sprites.create(img`
            . . . . f f f f f f . . . . . . 
            . . . . f e e e e f . . . . . . 
            . . . . f e e e e f . . . . . . 
            . . . . f e e e e f . . . . . . 
            . . f f f e e e e f f f . . . . 
            . . f 4 4 4 4 4 4 4 4 f . . . . 
            . . f 4 4 4 4 4 4 4 4 f . . . . 
            . . f 4 4 4 4 4 4 4 4 f . . . . 
            . . f 4 4 4 4 4 4 4 4 f . . . . 
            . . f e e 4 4 4 4 e e f . . . . 
            . . f e e 4 4 4 4 e e f . . . . 
            . . f f f a a a a f f f . . . . 
            . . . . f a a a a f . . . . . . 
            . . . . f a a a a f . . . . . . 
            . . . . f a a a a f . . . . . . 
            . . . . f a a a a f . . . . . . 
            `, SpriteKind.Enemy)
        parkbadguy.setPosition(106, 80)
        for (let index = 0; index < 5000; index++) {
            if (main.overlapsWith(parkbadguy)) {
                hurt()
                pause(100)
            }
        }
    }
}
info.onLifeZero(function () {
    // death
    main.destroy(effects.disintegrate, 500)
    game.over(false)
})
function fruit () {
    // fruit minigame
    tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020207020202020202020202020202020202020702020202020202020202020202020107010202020202020202020202060601010102020202020202020202020606010101020202020202020202020206060202020202020202020202020202020203020202020202020202020202020204030202020202020502020202020202040302020202020202020202020202020403020202020202020202020202020204`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 2 . . . . . . . . . . . . . . 
        . 2 2 . . . . . . . . . . . . . 
        . . 2 2 . . . . . . . . . 2 2 2 
        . . . 2 . . . . . . . . . 2 . . 
        . . . 2 . . . . . . . . . 2 . . 
        . . . 2 . . . . . . . . . 2 . . 
        2 2 2 2 . . . . . . . . . 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,sprites.castle.shrub,sprites.castle.saplingPine,myTiles.tile1,myTiles.tile19,sprites.castle.tileGrass3], TileScale.Sixteen))
    game.showLongText("Which one is healthier?", DialogLayout.Bottom)
    tiles.placeOnRandomTile(main, myTiles.tile1)
}
function meat () {
    // meat minigame
    tiles.setTilemap(tiles.createTilemap(hex`1000100001030103010301030103010301030103030103010301030203010301030103010103010301030103010301030103010303010301030103010301030103010301010301030103010301030103010301030301030103010301030103010301030101030103010301030103010301030103030103010301030103010301030103010103010301030103010301030103010303010301030103010301030103010301010301030103010301030103010301030301030103010301030103010301030101030103010301030103010301030103030103010301030103010301030103010103010301030103010301030103010303010301030103010301030103010301`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile6,sprites.dungeon.chestOpen,sprites.castle.tilePath5], TileScale.Sixteen))
    game.splash("Make it to the chest while staying away from others.", "Not to mention that the camera isn't following you anymore!")
    meat_badguy = sprites.create(img`
        . . . . f f f f f f f . . . . . 
        . . . . f e e e e 2 f 2 . . . . 
        . . . . f e e e e f 2 2 2 . . . 
        . . . . f e e e e 2 2 2 . . . . 
        . . f f f e e e e f 2 f 2 . . . 
        . . f 4 4 4 4 4 4 4 4 f . . . . 
        . . f 4 4 4 4 4 4 4 4 f . . . . 
        . . f 2 4 2 4 4 4 4 4 f . . . . 
        . . 2 2 2 4 4 4 4 4 4 f . . . . 
        . . f 2 2 2 4 4 4 e e f . . . . 
        . . 2 e 2 4 4 4 4 e e f . . . . 
        . . f f f a a a a f f f . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        `, SpriteKind.Enemy)
    meat_badGuy2 = sprites.create(img`
        . . . . f f f f f f f . . . . . 
        . . . . f e e e e 2 f 2 . . . . 
        . . . . f e e e e f 2 2 2 . . . 
        . . . . f e e e e 2 2 2 . . . . 
        . . f f f e e e e f 2 f 2 . . . 
        . . f 4 4 4 4 4 4 4 4 f . . . . 
        . . f 4 4 4 4 4 4 4 4 f . . . . 
        . . f 2 4 2 4 4 4 4 4 f . . . . 
        . . 2 2 2 4 4 4 4 4 4 f . . . . 
        . . f 2 2 2 4 4 4 e e f . . . . 
        . . 2 e 2 4 4 4 4 e e f . . . . 
        . . f f f a a a a f f f . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        `, SpriteKind.Enemy)
    meat_badGuy3 = sprites.create(img`
        . . . . f f f f f f f . . . . . 
        . . . . f e e e e 2 f 2 . . . . 
        . . . . f e e e e f 2 2 2 . . . 
        . . . . f e e e e 2 2 2 . . . . 
        . . f f f e e e e f 2 f 2 . . . 
        . . f 4 4 4 4 4 4 4 4 f . . . . 
        . . f 4 4 4 4 4 4 4 4 f . . . . 
        . . f 2 4 2 4 4 4 4 4 f . . . . 
        . . 2 2 2 4 4 4 4 4 4 f . . . . 
        . . f 2 2 2 4 4 4 e e f . . . . 
        . . 2 e 2 4 4 4 4 e e f . . . . 
        . . f f f a a a a f f f . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        . . . . f a a a a f . . . . . . 
        `, SpriteKind.Enemy)
    scene.cameraFollowSprite(meat_badGuy3)
    main.setPosition(76, 108)
    meat_badguy.setPosition(18, 62)
    meat_badGuy2.setPosition(130, 40)
    meat_badGuy3.setPosition(94, 79)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 15; index++) {
            meat_badguy.x += 7
            meat_badGuy2.x += 7
            meat_badGuy3.x += 7
            if (main.overlapsWith(meat_badguy) || (main.overlapsWith(meat_badGuy2) || main.overlapsWith(meat_badGuy3))) {
                hurt()
            }
            pause(100)
        }
        for (let index = 0; index < 15; index++) {
            meat_badguy.x += -7
            meat_badGuy2.x += -7
            meat_badGuy3.x += -7
            if (main.overlapsWith(meat_badguy) || (main.overlapsWith(meat_badGuy2) || main.overlapsWith(meat_badGuy3))) {
                hurt()
            }
            pause(100)
        }
    }
}
function hurt () {
    // whenever you get hurt
    main.startEffect(effects.fire)
    info.changeLifeBy(-1)
}
function milk () {
    // milk minigame
    main.setPosition(145, 107)
    tiles.setTilemap(tiles.createTilemap(hex`1000100003010101010101010102010101010201010201020101010101020101010102010202010201020202020202020101020101010102010201010101010101010101020202020102020202020202010102020201010101020101010101010101010202010202010101010101010202020202010101020102010101010101010101010101020201020101010101020202020202020201010202020202010101010102010101010101010101020102020201020102020201020202010101020102010201020101010101020102010201020102010101010101010201020102010201020102010202010202010101010101010101020101010101010101020202020201`, img`
        . . . . . . . . . 2 . . . . 2 . 
        . 2 . 2 . . . . . 2 . . . . 2 . 
        2 2 . 2 . 2 2 2 2 2 2 2 . . 2 . 
        . . . 2 . 2 . . . . . . . . . . 
        2 2 2 2 . 2 2 2 2 2 2 2 . . 2 2 
        2 . . . . 2 . . . . . . . . . 2 
        2 . 2 2 . . . . . . . 2 2 2 2 2 
        . . . 2 . 2 . . . . . . . . . . 
        . . 2 2 . 2 . . . . . 2 2 2 2 2 
        2 2 2 . . 2 2 2 2 2 . . . . . 2 
        . . . . . . . . . 2 . 2 2 2 . 2 
        . 2 2 2 . 2 2 2 . . . 2 . 2 . 2 
        . 2 . . . . . 2 . 2 . 2 . 2 . 2 
        . . . . . . . 2 . 2 . 2 . 2 . 2 
        . 2 . 2 2 . 2 2 . . . . . . . . 
        . 2 . . . . . . . . 2 2 2 2 2 . 
        `, [myTiles.transparency16,myTiles.tile6,myTiles.tile7,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen))
    game.showLongText("Get to the end of the maze!  Don't forget to exercise your mind in quarantine.", DialogLayout.Bottom)
}
let meat_badGuy3: Sprite = null
let meat_badGuy2: Sprite = null
let meat_badguy: Sprite = null
let parkbadguy: Sprite = null
let main: Sprite = null
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogTextColor(15)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010102020202020202020202020202010101010202020202020202020202020201010102020202020202020202020202010101010202020202020202020202020101010102020202020202020202020202010101010101020202020202020202020201010101010101020202020202020202020201010101010101020202020202020202020101010101010102020202020202020202020101010101020202020202020202020202010101010202020202020202020202020201010101020202020202020202020202020101010102020202020202020202020202010101010202020202020202020202020201010102020202020202020202020202010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0], TileScale.Sixteen))
scene.centerCameraAt(0, 0)
scene.cameraShake(3, 500)
pause(1000)
scene.centerCameraAt(100, 20)
scene.cameraShake(3, 500)
pause(1000)
scene.centerCameraAt(20, 100)
scene.cameraShake(3, 500)
pause(1000)
scene.centerCameraAt(100, 100)
scene.cameraShake(3, 500)
pause(1000)
game.splash("ANTI-VIRUS:", "the game")
startGame()
forever(function () {
    if (controller.right.isPressed() || controller.left.isPressed() || (controller.up.isPressed() || controller.down.isPressed())) {
        main.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . . . f d d d d f . . . . . 
            . . . . . f d d d d f . . . . . 
            . . . f f f d d d d f . . . . . 
            . . . f 2 2 d d d d f . . . . . 
            . . . f 2 2 2 2 2 2 f f f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . . f d d 2 2 2 2 2 2 f . . . 
            . . . f d d 2 2 2 2 2 2 f . . . 
            . . . f f f 8 8 2 2 d d f . . . 
            . . . . . f 8 8 8 8 d d f . . . 
            . . . . . f 8 8 8 8 f f f . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . f f f 8 8 f . . . . . 
            `)
        pause(200)
        main.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . . . f d d d d f . . . . . 
            . . . . . f d d d d f . . . . . 
            . . . . . f d d d d f f f . . . 
            . . . . . f d d d d 2 2 f . . . 
            . . . f f f 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 d d f . . . 
            . . . f 2 2 2 2 2 2 d d f . . . 
            . . . f d d 2 2 8 8 f f f . . . 
            . . . f d d 8 8 8 8 f . . . . . 
            . . . f f f 8 8 8 8 f . . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . f 8 8 8 8 f . . . . . 
            . . . . . f 8 8 f f f . . . . . 
            `)
        pause(200)
    }
})
forever(function () {
    gameMusic()
})
forever(function () {
    scene2()
    if (main.tileKindAt(TileDirection.Right, sprites.castle.tileGrass3)) {
        main.setPosition(24, 30)
        scene.cameraShake(8, 500)
        tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202050502020202020202020202020202020505050202020202020202020202020201050501010101020202020202020202020105050101010101020202020202020202010101010101010202020202020202020101010101010101020202020202020201010102020101010102020202020202010102020202010101010102020202020101020202010101010101010102020101010202010101010201010101060201010101010101010102020201010602010101010101010102020202020202020101010202020202020202020202020304030202020202020202020202020209070802020202020202020202020202`, img`
            2 2 2 . . . . . . . . . . . . . 
            . . 2 2 . . . . . . . . . . . . 
            . . . 2 2 2 2 2 . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            2 . . . . . . . . 2 . . . . . . 
            2 2 . . . . . . . 2 2 . . . . . 
            . 2 . . . . . . . . 2 2 . . . . 
            . 2 . . . 2 2 . . . . 2 2 2 . . 
            . 2 . . 2 2 2 2 . . . . . 2 2 2 
            2 2 . . 2 2 2 . . . . . . . . 2 
            2 . . . 2 2 . . . . 2 . . . . . 
            2 . . . . . . . . . 2 2 2 . . . 
            2 . . . . . . . . 2 . . 2 2 2 2 
            2 . . . 2 2 2 2 2 2 . . . . . . 
            2 2 2 2 2 . . . . . . . . . . . 
            . . . 2 . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.rock2,sprites.castle.rock1,sprites.castle.tileGrass1,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7], TileScale.Sixteen))
        parkbadguy.setPosition(106, 80)
        if (main.overlapsWith(parkbadguy)) {
            hurt()
        }
    }
    if (main.tileKindAt(TileDirection.Left, sprites.builtin.oceanDepths9)) {
        tiles.setTilemap(tiles.createTilemap(hex`1000100006020202020202020202020202020202060303030303030303030303030303030602020202020202020202020202020201010105050505010101010101010101010105050505050101010101010101010101050505050501010101010101010101050505050505050501010101010101010505050505050505010101010101010105050505050505050101010101010101010505050505050501010101010101010101050505050501010101010101010101010505050101010101010101010101010101010101010101010105010101010101010101010101010505050101010101010101010101050505040501010101010101010101010101010101010101`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 . . . . 2 . 2 2 2 2 2 2 2 
            . 2 . . . . . 2 . . . . . . . 2 
            2 2 . . . . . 2 2 2 2 . 2 2 2 2 
            2 . . . . . . . . 2 2 . 2 . . . 
            2 . . . . . . . . 2 . . 2 . . . 
            2 . . . . . . . . 2 . . 2 2 2 2 
            2 2 . . . . . . . 2 . 2 . . . 2 
            2 2 2 . . . . . 2 2 . 2 2 2 . 2 
            2 . 2 . . . 2 2 . . . 2 . 2 . 2 
            2 . 2 2 2 2 2 . . 2 2 2 . 2 . 2 
            2 . 2 2 2 2 2 . 2 2 . . . 2 . 2 
            2 . 2 2 2 . . . . . . . . 2 2 2 
            2 . . . . . . 2 2 2 2 2 2 . . . 
            `, [myTiles.transparency16,sprites.builtin.forestTiles0,myTiles.tile8,myTiles.tile17,sprites.dungeon.chestClosed,sprites.castle.tilePath5,sprites.builtin.oceanDepths8], TileScale.Sixteen))
        main.setPosition(146, 10)
        scene.cameraShake(8, 500)
        game.showLongText("If you get lucky, you might find some chests here.", DialogLayout.Bottom)
    }
    if (main.tileKindAt(TileDirection.Left, sprites.builtin.oceanDepths8)) {
        main.setPosition(146, 10)
        scene.cameraShake(8, 500)
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000301010101010101010101000000000303020202020202020202020000000003030101010101010101010100000003030307070707070707070707000003030303030707070707070707070003030303030303030707070707070703030101010101010303070707070707030101050505050101030707070707070301050505050505010307070707070703010504050504050103030307070707030105050505050501030303070707070301050506060505010303070707070703010101060601010103030707070707030303030303030303030707070707070703030303030303030707070707070707070707070707070707070707070707`, img`
            . . . 2 2 . . . . . . . . . . . 
            . . . 2 . . . . . . . . . . . . 
            . . 2 2 . . . . . . . . . . . . 
            . 2 2 . . . 2 2 2 2 2 2 2 2 2 2 
            2 2 . . . . . 2 2 2 . . . . . . 
            2 . . . . . . . . 2 2 . . . . . 
            . . 2 2 2 2 2 2 . . 2 . . . . . 
            . 2 2 . . . . 2 2 . 2 . . . . . 
            . 2 . . . . . . 2 . 2 2 2 . . . 
            . 2 . . . . . . 2 . . . 2 . . . 
            . 2 . . . . . . 2 . . . 2 . . . 
            . 2 . . . . . . 2 . . 2 2 . . . 
            . 2 2 2 . . 2 2 2 . . 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            2 . . . . . . . . 2 2 . . . . . 
            2 2 2 2 2 2 2 2 2 2 . . . . . . 
            `, [myTiles.transparency16,myTiles.tile8,myTiles.tile17,sprites.castle.tilePath5,myTiles.tile7,sprites.builtin.brick,myTiles.tile19,sprites.builtin.forestTiles0], TileScale.Sixteen))
        game.showLongText("This is my house.  Still need some food.", DialogLayout.Bottom)
    }
    if (main.tileKindAt(TileDirection.Center, myTiles.tile19)) {
        scene.cameraShake(8, 500)
        tiles.setTilemap(tiles.createTilemap(hex`1000100004040401010101010101010101040404050303030303030202030303030303050303030303030302020303030303030303030303030303020203030303030303030303030202020202020202030303030103030302020202020202020303030101030303020202020202020203030301010202020202020202020202020202010103030202020202020202020203030101030303030202020202020303030301030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile7,sprites.builtin.brick,myTiles.tile6,sprites.dungeon.chestOpen,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
        game.showLongText("Still out of food... press 'b' to go back to the start.", DialogLayout.Bottom)
    }
    if (main.tileKindAt(TileDirection.Center, sprites.dungeon.chestClosed)) {
        scene.cameraShake(8, 500)
        main.startEffect(effects.hearts, 1000)
        info.changeLifeBy(1)
        tiles.setTileAt(tiles.getTileLocation(11, 14), sprites.castle.tilePath5)
    }
    if (main.tileKindAt(TileDirection.Right, sprites.castle.tilePath6)) {
        main.setPosition(24, 30)
        scene.cameraShake(8, 500)
        tiles.setTilemap(tiles.createTilemap(hex`1000100004040101010101050505010101010101040404010101010404040101010101010404040401010104040401010101010104040404040101040404040101010101010404040404040404040401010101010104040404040404040401010101010101010404040404040404010101010101010101010104040404040404040404010101010101040404040404040404040601010104040404040101010101040402010104040404040101010101010104060402040404040101010101010101010104030204040101010101010101010101040403020101010101010101010101010404040101010101010101010101010104040401010101010101010101010101`, img`
            . . 2 2 . . 2 . . . 2 . . . . . 
            . . . 2 2 . 2 . . . 2 . . . . . 
            . . . . 2 2 2 . . . 2 2 . . . . 
            . . . . . 2 2 . . . . 2 . . . . 
            2 . . . . . . . . . . 2 . . . . 
            2 . . . . . . . . . 2 2 . . . . 
            2 2 . . . . . . . . 2 2 2 2 2 2 
            . 2 2 2 2 . . . . . . . . . . 2 
            . . 2 2 2 . . . . . . . . . . 2 
            . 2 2 . . . . . 2 2 2 2 2 . . 2 
            2 2 . . . . . 2 2 . . . 2 2 . 2 
            . 2 . . . . 2 2 . . . . . 2 2 2 
            . 2 2 . . 2 2 . . . . . . . . 2 
            . . 2 2 2 2 . . . . . . . . . 2 
            . . . 2 2 . . . . . . . . . . 2 
            . . . 2 . . . . . . . . . . . 2 
            `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.rock2,sprites.castle.rock1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorth,sprites.castle.rock0], TileScale.Sixteen))
    }
    if (main.tileKindAt(TileDirection.Top, sprites.dungeon.darkGroundNorth)) {
        tiles.setTilemap(tiles.createTilemap(hex`1000100007070707070606060606060607070707070606060604040404040406060606070706040404040404040404040404060707060204040505050505050404020607070604020204040505040402020406070706040404020202020202040404060707060604040404040404040404060607070604040404040404040404040406070706040505050403030405050504060707060404040404030304040404040607070606060606060606060606060606070707070707070404040407070707070707070707070704040404070707070707070707070707040404040707070707070707070707070404040407070707070707070707070704010104070707070707`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 
            2 2 2 . . 2 2 2 2 2 2 . . 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
            2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
            2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
            `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile11], TileScale.Sixteen))
        parkbadguy.destroy()
        tiles.placeOnRandomTile(main, myTiles.tile1)
        game.showLongText("We made it to the store!", DialogLayout.Bottom)
    }
    if (main.tileKindAt(TileDirection.Top, myTiles.tile5)) {
        tiles.setTilemap(tiles.createTilemap(hex`10001000050505050505050505050505050505050102020202020202020202020202020701020203020202030202020203020207010202020202020202020202020202070102040202020202020202020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020402020b0b0b0b0b0b020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020202020b0b0b0b0b0b020202020701020402020202020202020202060207010202020202020202020202020202070102020202020202020202020202020701020a020a020a020a020a020a020a0702020202020202080202020202020202`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile1,myTiles.tile7,myTiles.tile14,sprites.builtin.brick], TileScale.Sixteen))
        tiles.placeOnRandomTile(main, myTiles.tile1)
        game.showLongText("Where should we go first?", DialogLayout.Bottom)
    }
    if (main.tileKindAt(TileDirection.Top, myTiles.tile11)) {
        milk()
    }
    if (main.tileKindAt(TileDirection.Left, myTiles.tile3)) {
        fruit()
    }
    if (main.tileKindAt(TileDirection.Right, myTiles.tile13)) {
        meat()
    }
    if (main.tileKindAt(TileDirection.Left, sprites.dungeon.collectibleRedCrystal)) {
        scene.cameraShake(4, 500)
        tiles.setTilemap(tiles.createTilemap(hex`1000100002020101010101010101010101010101010101020202020202020202020201020202010101010101010102020202010201010102020202020201010101010202010201010101010102010101020102010102020202020201010101010201020101010101010102010101010102010201020202020201020202020202010102010102010101010101010101010102010101020102020202010101010101020102010201020101020202020202020201020102010201020201010101010101010201020102010201010202010202020102010201010101010102010101010201020102020202020202020102020102010201010101010101010101020203020101`, img`
            2 2 . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 2 . 2 
            2 2 . . . . . . . . 2 2 2 2 . 2 
            . . . 2 2 2 2 2 2 . . . . . 2 2 
            . 2 . . . . . . 2 . . . 2 . 2 . 
            . 2 2 2 2 2 2 . . . . . 2 . 2 . 
            . . . . . . 2 . . . . . 2 . 2 . 
            2 2 2 2 2 . 2 2 2 2 2 2 . . 2 . 
            . 2 . . . . . . . . . . . 2 . . 
            . 2 . 2 2 2 2 . . . . . . 2 . 2 
            . 2 . 2 . . 2 2 2 2 2 2 2 2 . 2 
            . 2 . 2 . 2 2 . . . . . . . . 2 
            . 2 . 2 . 2 . . 2 2 . 2 2 2 . 2 
            . 2 . . . . . . 2 . . . . 2 . 2 
            . 2 2 2 2 2 2 2 2 . 2 2 . 2 . 2 
            . . . . . . . . . . 2 2 . 2 . . 
            `, [myTiles.transparency16,myTiles.tile6,myTiles.tile7,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
        main.setPosition(148, 107)
    }
    if (main.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        scene.cameraShake(4, 500)
        tiles.setTilemap(tiles.createTilemap(hex`1000100001010202020202020202020202020202020202010101010101010101010102010101020202010202020201010101020102010201010101010102020102020101020102020201010101010101010201020201010101010101010101010101010202020202020201010101010101010102010101010101010101010101020101020201020202020202010202020201020202010201010101010101020101010201020102010202010101010101010101010201020102010102020202020202020102010201020101020101010101010201020102020202020201020202020102010201010101010101010201010201020102020202020202020202010103010202`, img`
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 . . . . . . . . . . . 2 . 
            . . 2 2 2 . 2 2 2 2 . . . . 2 . 
            2 . 2 . . . . . . 2 2 . 2 2 . . 
            2 . 2 2 2 . . . . . . . . 2 . 2 
            2 . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 . . . . . . . . . 2 
            . . . . . . . . . . . . 2 . . 2 
            2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 2 
            2 . 2 . . . . . . . 2 . . . 2 . 
            2 . 2 . 2 2 . . . . . . . . . . 
            2 . 2 . 2 . . 2 2 2 2 2 2 2 2 . 
            2 . 2 . 2 . . 2 . . . . . . 2 . 
            2 . 2 2 2 2 2 2 . 2 2 2 2 . 2 . 
            2 . . . . . . . . 2 . . 2 . 2 . 
            2 2 2 2 2 2 2 2 2 2 . . . . 2 2 
            `, [myTiles.transparency16,myTiles.tile6,myTiles.tile7,sprites.builtin.crowd3], TileScale.Sixteen))
        main.setPosition(148, 107)
    }
    if (main.tileKindAt(TileDirection.Center, sprites.builtin.crowd3)) {
        scene.cameraShake(4, 500)
        tiles.setTilemap(tiles.createTilemap(hex`10001000050505050505050505050505050505050102020202020202020202020202020701020203020202030202020203020207010202020202020202020202020202070102040202020202020202020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020402020b0b0b0b0b0b020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020202020b0b0b0b0b0b020202020701020402020202020202020202060207010202020202020202020202020202070102020202020202020202020202020701020a020a020a020a020a020a020a0702020202020202080202020202020202`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile1,myTiles.tile7,myTiles.tile14,sprites.builtin.brick], TileScale.Sixteen))
        tiles.placeOnRandomTile(main, myTiles.tile1)
        game.splash("Congrats! You have beat the milk mini game.")
    }
    if (main.tileKindAt(TileDirection.Center, sprites.dungeon.chestOpen)) {
        scene.cameraShake(4, 500)
        tiles.setTilemap(tiles.createTilemap(hex`10001000050505050505050505050505050505050102020202020202020202020202020701020203020202030202020203020207010202020202020202020202020202070102040202020202020202020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020402020b0b0b0b0b0b020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020202020b0b0b0b0b0b020202020701020402020202020202020202060207010202020202020202020202020202070102020202020202020202020202020701020a020a020a020a020a020a020a0702020202020202080202020202020202`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile1,myTiles.tile7,myTiles.tile14,sprites.builtin.brick], TileScale.Sixteen))
        scene.cameraFollowSprite(main)
        tiles.placeOnRandomTile(main, myTiles.tile1)
        meat_badguy.destroy()
        meat_badGuy2.destroy()
        meat_badGuy3.destroy()
        game.splash("Congrats! You have beat the meat mini game.")
    }
    if (main.tileKindAt(TileDirection.Left, sprites.castle.shrub)) {
        game.showLongText("You know your fruits", DialogLayout.Bottom)
        tiles.setTilemap(tiles.createTilemap(hex`1000100007070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070708080807070707070707070707070707090908080707070707070707070707070909090807070707070707070707070709090808070707070707070707070202030308070707070707070707070102010303080707070707070707070701010103080807070707070707070707010101080807070707070707070707070707070707070707070707070707070707070504070707070707070707070707070705040707070707070607070707070707050407070707070707070707070707070504070707070707070707070707070705`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 . . . . . . . . . . . . 
            2 2 2 2 2 . . . . . . . . . . . 
            . . 2 . 2 . . . . . . . . . . . 
            . . . . 2 . . . . . . . . 2 2 2 
            . . . . 2 . . . . . . . 2 2 . . 
            . . . 2 2 . . . . . . . 2 . . . 
            . . . 2 . . . . . . . . 2 . . . 
            . . . 2 . . . . . . . . 2 . . . 
            . . 2 2 . . . . . . . . 2 2 2 2 
            2 2 2 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tilePath5,sprites.builtin.crowd8,sprites.dungeon.darkGroundNorthEast0,myTiles.tile1,myTiles.tile6,myTiles.tile8,myTiles.tile11], TileScale.Sixteen))
        tiles.placeOnRandomTile(main, myTiles.tile1)
    }
    if (main.tileKindAt(TileDirection.Right, sprites.dungeon.darkGroundNorthEast0)) {
        game.splash("You have beat the fruit minigame!")
        tiles.setTilemap(tiles.createTilemap(hex`10001000050505050505050505050505050505050102020202020202020202020202020701020203020202030202020203020207010202020202020202020202020202070102040202020202020202020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020402020b0b0b0b0b0b020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020202020b0b0b0b0b0b020202020701020402020202020202020202060207010202020202020202020202020202070102020202020202020202020202020701020a020a020a020a020a020a020a0702020202020202080202020202020202`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile1,myTiles.tile7,myTiles.tile14,sprites.builtin.brick], TileScale.Sixteen))
        tiles.placeOnRandomTile(main, myTiles.tile1)
    }
    if (main.tileKindAt(TileDirection.Right, sprites.castle.saplingPine)) {
        game.showLongText("You might want to hit the gym.", DialogLayout.Bottom)
        tiles.setTilemap(tiles.createTilemap(hex`10001000050505050505050505050505050505050102020202020202020202020202020701020203020202030202020203020207010202020202020202020202020202070102040202020202020202020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020402020b0b0b0b0b0b020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020202020b0b0b0b0b0b020202020701020402020202020202020202060207010202020202020202020202020202070102020202020202020202020202020701020a020a020a020a020a020a020a0702020202020202080202020202020202`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile1,myTiles.tile7,myTiles.tile14,sprites.builtin.brick], TileScale.Sixteen))
        tiles.placeOnRandomTile(main, myTiles.tile1)
    }
    if (main.tileKindAt(TileDirection.Left, sprites.builtin.crowd8)) {
        game.showLongText("You might want to hit the gym.", DialogLayout.Bottom)
        tiles.setTilemap(tiles.createTilemap(hex`10001000050505050505050505050505050505050102020202020202020202020202020701020203020202030202020203020207010202020202020202020202020202070102040202020202020202020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020402020b0b0b0b0b0b020206020701020202020b0b0b0b0b0b020202020701020202020b090b0b090b020202020701020202020b0b0b0b0b0b020202020701020402020202020202020202060207010202020202020202020202020202070102020202020202020202020202020701020a020a020a020a020a020a020a0702020202020202080202020202020202`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 . 2 . 2 . 2 . 2 . 2 . 2 . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile1,myTiles.tile7,myTiles.tile14,sprites.builtin.brick], TileScale.Sixteen))
        tiles.placeOnRandomTile(main, myTiles.tile1)
    }
})
