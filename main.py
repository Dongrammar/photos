def on_forever():
    if mbit_输入类.rocker(AnalogPin.P2,
        AnalogPin.P1,
        DigitalPin.P0,
        mbit_输入类.enRocker.UP):
        turtle.forward(1)
    if mbit_输入类.rocker(AnalogPin.P2,
        AnalogPin.P1,
        DigitalPin.P0,
        mbit_输入类.enRocker.DOWN):
        turtle.back(1)
    if mbit_输入类.rocker(AnalogPin.P2,
        AnalogPin.P1,
        DigitalPin.P0,
        mbit_输入类.enRocker.LEFT):
        turtle.turn_left()
        turtle.forward(1)
        turtle.turn_right()
    if mbit_输入类.rocker(AnalogPin.P2,
        AnalogPin.P1,
        DigitalPin.P0,
        mbit_输入类.enRocker.RIGHT):
        turtle.turn_right()
        turtle.forward(1)
        turtle.turn_left()
    if mbit_输入类.rocker(AnalogPin.P2,
        AnalogPin.P1,
        DigitalPin.P0,
        mbit_输入类.enRocker.PRESS):
        pass
basic.forever(on_forever)
