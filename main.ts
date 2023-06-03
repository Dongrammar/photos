basic.forever(function () {
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Up
    )) {
        turtle.forward(1)
    }
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Down
    )) {
        turtle.back(1)
    }
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Left
    )) {
        turtle.turnLeft()
        turtle.forward(1)
        turtle.turnRight()
    }
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Right
    )) {
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnLeft()
    }
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Press
    )) {
        turtle.home()
    }
})
