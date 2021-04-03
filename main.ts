let ertekem = 0
input.onButtonPressed(Button.A, function () {
    ertekem = pins.analogReadPin(AnalogPin.P1)
    basic.showString("" + (ertekem - 50) + "-" + (ertekem + 50))
})
input.onPinPressed(TouchPin.P2, function () {
    if (!(false)) {
    	
    }
})
