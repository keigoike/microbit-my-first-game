input.onButtonPressed(Button.A, function () {
    自機.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    自機.change(LedSpriteProperty.X, 1)
})
let 敵: game.LedSprite = null
let 自機: game.LedSprite = null
自機 = game.createSprite(2, 4)
let isEnemyCalled = false
basic.forever(function () {
    if (!(isEnemyCalled)) {
        敵 = game.createSprite(randint(0, 4), 0)
        isEnemyCalled = true
    } else {
        if (敵.get(LedSpriteProperty.Y) == 4) {
            敵.delete()
            isEnemyCalled = false
        } else {
            敵.change(LedSpriteProperty.Y, 1)
        }
    }
    if (自機.isTouching(敵)) {
        game.gameOver()
    }
    basic.pause(500)
})
