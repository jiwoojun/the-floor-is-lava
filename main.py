def on_a_pressed():
    if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
        mySprite.vy += -130
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite, location):
    game.over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava0,
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_east,
    on_overlap_tile2)

def on_overlap_tile3(sprite, location):
    game.over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile3)

mySprite: Sprite = None
mySprite = sprites.create(img("""
        f f f f f f f f 
            f d d d d d f f 
            f f f f d f f f 
            f f f f f f f f 
            . . . f f f . . 
            . . . f f f . . 
            . . . f f f . . 
            . . f f f f f . 
            . f f . . . f f
    """),
    SpriteKind.player)
tiles.set_tilemap(tilemap("""
    level1
"""))
controller.move_sprite(mySprite, 100, 0)
tiles.place_on_random_tile(mySprite, sprites.dungeon.stair_west)
scene.camera_follow_sprite(mySprite)
mySprite.ay = 200