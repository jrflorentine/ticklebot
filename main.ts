pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
servos.P1.setAngle(90)
servos.P2.setAngle(90)
basic.forever(function () {
    while (input.logoIsPressed()) {
        servos.P1.setAngle(180)
        servos.P2.setAngle(180)
        basic.pause(200)
        servos.P1.setAngle(90)
        servos.P2.setAngle(90)
        basic.pause(200)
    }
})
