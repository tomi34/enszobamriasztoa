let ertekem = 0
input.onButtonPressed(Button.A, function () {
    ertekem = pins.analogReadPin(AnalogPin.P1)
    basic.showString("" + (ertekem - 50) + "-" + (ertekem + 50))
})
input.onPinPressed(TouchPin.P2, function () {
    if (!(pins.analogReadPin(AnalogPin.P1) <= ertekem + 50 && pins.analogReadPin(AnalogPin.P1) >= ertekem - 50)) {
        while (!(pins.analogReadPin(AnalogPin.P1) <= ertekem + 50 && pins.analogReadPin(AnalogPin.P1) >= ertekem - 50)) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            music.playTone(784, music.beat(BeatFraction.Whole))
        }
    }
})
