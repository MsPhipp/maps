tiles.setTilemap(tiles.createTilemap(hex`100010000303030303030207070e0e0e0e0e0e0e03030303030303070e0e0e0e0e0e0e0e0707070707030307070e0e0e0e0e0e0e0c0c0707070303070707070707070e0e0c0c0707070303030303030303040d0d0c0c0c0c070303040404040403040d0d0c0c0c0c070303050606060403040d0d0c0c0c0c070301040404040403040d0d0c0c0c0c070303040403030303040d0d0a0a0a0a0a0808040403040404040d0d0a0f0a0a0a0808040403040a0a0a0a0a0a0a0a0a0a0808040404040a0a0a0a0a0b0b0b0b0b0b0b0b0b0b0b0b0b0a0a0a0b0b0b0909090b0b0b0b0b0b0b0a0a0a090909090909090909090b0b0b0a0a0a090909090909090909090b0b0b0a0a0a`, img`
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    2 2 2 2 2 . . 2 . . . . . . . . 
    . . 2 2 2 . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 . . . . . . . . 2 . . 
    . . . . 2 . . 2 2 2 2 2 . 2 . . 
    . . . . 2 . . . . . . 2 . 2 . . 
    . . . . 2 . . 2 2 2 2 2 . 2 . . 
    . . . . 2 . . 2 2 . . . . 2 . . 
    . . . . . . . 2 2 . 2 2 2 2 . . 
    . . . . . . . 2 2 . 2 . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.floorLight0,sprites.dungeon.stairWest,sprites.dungeon.darkGroundNorthWest1,sprites.castle.rock0,sprites.dungeon.hazardLava0,sprites.dungeon.hazardWater,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.builtin.forestTiles21,sprites.castle.shrub,sprites.castle.rock1], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . 4 d d d d d d 4 . . . . . 
    . . . . d f d d f d . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 . 7 . . . . . 
    . . . 7 . 7 7 7 7 . 7 . . . . . 
    . . . d . 7 7 7 7 . d . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . e e 8 8 e e . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let lava = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 . . . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . 2 4 4 . . . . . . . . 
    . . . . 4 5 4 5 4 . . . . . . . 
    . . . 4 5 4 2 5 5 4 . . . . . . 
    . . . 4 5 2 2 5 4 . . . . . . . 
    . . . . 4 5 5 4 4 . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
tiles.createSpritesOnTiles(sprites.dungeon.hazardLava0, SpriteKind.Projectile)
lava.startEffect(effects.spray, 500)
