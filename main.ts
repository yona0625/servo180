input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (모터_구동_중 == true) {
        모터_구동_중 = false
    } else {
        모터_구동_중 = true
    }
    basic.pause(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 230)
    if (모터_구동_중 == true) {
        모터_구동_중 = false
    } else {
        모터_구동_중 = true
    }
    basic.pause(500)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    music.stopAllSounds()
})
let 모터_구동_중 = false
모터_구동_중 = false
basic.forever(function () {
    if (모터_구동_중 == true) {
        servos.P2.setAngle(0)
        basic.pause(500)
        servos.P2.setAngle(180)
        basic.pause(500)
    }
})
