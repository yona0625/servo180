input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (모터_구동_중 == true) {
        servos.P0.setAngle(0)
        모터_구동_중 = false
    } else {
        servos.P0.setAngle(90)
        모터_구동_중 = true
    }
    basic.pause(500)
})
input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 230)
    if (모터_구동_중 == true) {
        servos.P0.setAngle(0)
        모터_구동_중 = false
    } else {
        servos.P0.setAngle(90)
        모터_구동_중 = true
    }
    basic.pause(500)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    music.stopAllSounds()
})
let 모터_구동_중 = false
모터_구동_중 = false
