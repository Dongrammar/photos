def on_forever():
    if mbit_输入类.rocker(AnalogPin.P2,
        AnalogPin.P1,
        DigitalPin.P0,
        mbit_输入类.enRocker.PRESS):
        basic.show_icon(IconNames.SCISSORS)
        basic.pause(100)
    if mbit_输入类.rocker(AnalogPin.P2,
        AnalogPin.P1,
        DigitalPin.P0,
        mbit_输入类.enRocker.UP):
        basic.show_leds("""
            . # # . #
                        # # # # #
                        # # # # #
                        . . . # #
                        . . . # #
        """)
        basic.pause(100)
basic.forever(on_forever)
