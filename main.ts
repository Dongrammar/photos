function reboot () {
    basic.clearScreen()
    control.reset()
}
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
        basic.showString("Show Mode")
        turtle.setSpeed(1000)
        turtle.forward(10)
        turtle.turnRight()
        turtle.forward(3)
        turtle.turnRight()
        turtle.back(2)
        basic.pause(2000)
        turtle.setSpeed(25)
        turtle.turnLeft()
        turtle.setSpeed(50)
        turtle.forward(100)
        reboot()
    }
})
control.inBackground(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
