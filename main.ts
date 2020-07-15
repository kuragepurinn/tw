input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        plenbit.servoWrite(1, -55)
        basic.pause(100)
        plenbit.servoWrite(3, -80)
        basic.pause(100)
        plenbit.servoWrite(1, 55)
        basic.pause(100)
        plenbit.servoWrite(3, 80)
        basic.pause(100)
        plenbit.servoWrite(5, -55)
        basic.pause(100)
        plenbit.servoWrite(7, -80)
        basic.pause(100)
        plenbit.servoWrite(5, 55)
        basic.pause(10)
        plenbit.servoWrite(7, 80)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        plenbit.stdMotion(plenbit.StdMotions.WalkForward)
        plenbit.stdMotion(plenbit.StdMotions.WalkBack)
    }
})
plenbit.servoInitialSet()
basic.forever(function () {
	
})
