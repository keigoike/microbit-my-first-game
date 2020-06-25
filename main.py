def on_forever():
    basic.show_leds("""
        . # . # .
        . # . # .
        . . # . .
        . # . # .
        . # . # .
        """)
    basic.show_animation("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)
basic.forever(on_forever)
