controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -130
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    f f f f f f f f 
    f d d d d d f f 
    f f f f d f f f 
    f f f f f f f f 
    . . . f f f . . 
    . . . f f f . . 
    . . . f f f . . 
    . . f f f f f . 
    . f f . . . f f 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(mySprite, 100, 0)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
game.onUpdateInterval(5000, function () {
    for (let index = 0; index < 100; index++) {
        mySprite2 = sprites.create(img`
            2 5 
            4 2 
            `, SpriteKind.Player)
        if (Math.percentChance(50)) {
            mySprite2.vy = randint(-30, -80)
        } else {
            mySprite2.vy = randint(-150, -200)
        }
    }
})
