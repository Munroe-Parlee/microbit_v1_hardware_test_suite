radio.onReceivedNumber(function (receivedNumber) {
    if (testNumber == 2) {
        if (receivedNumber != 0) {
            justSwitched = 0
            basic.showIcon(IconNames.Yes)
        }
    }
})
function CompassTest () {
    if (!(calibrated)) {
        basic.showString("Calibrate?", 60)
while (!(calibrated)) {
            if (input.buttonIsPressed(Button.A)) {
                input.calibrateCompass()
                calibrated = 1
            } else if (input.buttonIsPressed(Button.B)) {
                calibrated = 1
            }
        }
    }
    degrees = input.compassHeading()
    // Compass routine inspired from here:
    // https://makecode.microbit.org/projects/compass#:~:text=%7B-,Step%207,-%7D
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    } else if (degrees <= 360) {
        basic.showString("N")
    }
}
input.onButtonPressed(Button.A, function () {
    basic.pause(PAUSE_TIME)
    if (input.buttonIsPressed(Button.B)) {
        testNumber += -1
    }
})
function AccelerometerTest () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.North)
    } else if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.South)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
    } else if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Yes)
    } else if (input.isGesture(Gesture.ThreeG)) {
        basic.showIcon(IconNames.Yes)
    }
}
function ButtonTest () {
    while (input.buttonIsPressed(Button.AB)) {
        basic.showArrow(ArrowNames.North)
    }
    while (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.West)
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.East)
    }
}
function LightSensorTest () {
    level = input.lightLevel()
    radio.sendNumber(level)
    basic.pause(PAUSE_TIME)
}
function EmptyAndShowTestNo () {
    testNumber = TrueModulo(testNumber, 11)
    if (!(justSwitched)) {
        basic.pause(DEBOUNCE_TIME)
        justSwitched = 1
    }
    basic.clearScreen()
    led.plot(testNumber % 5, (testNumber/5)|0)
    if (testNumber == 4 || testNumber == 6) {
        if (justSwitched) {
            basic.pause(DEBOUNCE_TIME)
            justSwitched = 0
        }
    } else {
        justSwitched = 1
    }
}
function TrueModulo (dividend: number, divisor: number) {
    return dividend < 0 ? Math.abs((dividend += divisor) % divisor) : dividend % divisor
}
function PinAnalogOutputTest2 () {
    for (let index3 = 0; index3 <= 2; index3++) {
        pins.analogWritePin(index3 + 100, 500)
    }
    basic.pause(DEBOUNCE_TIME)
    for (let index4 = 0; index4 <= 2; index4++) {
        pins.analogWritePin(index4 + 100, 0)
    }
}
function PinResistiveTest () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showNumber(0)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showNumber(1)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        basic.showNumber(2)
    }
}
input.onButtonPressed(Button.B, function () {
    basic.pause(PAUSE_TIME)
    if (input.buttonIsPressed(Button.A)) {
        testNumber += 1
    }
})
function RadioTest () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        // Debouncer copied from @joshkeys19 on the MakeCode Forum:
        // https://forum.makecode.com/t/microbit-ignoring-radio-message-when-in-while-loop/5100/6
        if (input.runningTime() > lastButtonPressTime + DEBOUNCE_TIME) {
            radio.sendString("OK")
            basic.pause(PAUSE_TIME)
            radio.sendString("\"")
            lastButtonPressTime = input.runningTime()
        }
    }
}
function ScreenTest () {
    basic.pause(PAUSE_TIME)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(PAUSE_TIME)
}
function PinAnalogInputTest () {
    level = ((Math.max(pins.analogReadPin(AnalogPin.P0), Math.max(pins.analogReadPin(AnalogReadWritePin.P1), pins.analogReadPin(AnalogReadWritePin.P2)))) / (1023/25))|0
for (let index2 = 0; index2 <= level; index2++) {
        led.plot(index2 % 5, (index2/5)|0)
    }
}
function ThermometerTest () {
    level = input.temperature() - 15
    for (let index = 0; index <= level; index++) {
        led.plot(index % 5, (index/5)|0)
    }
}
let level = 0
let degrees = 0
let lastButtonPressTime = 0
let calibrated = 0
let justSwitched = 0
let testNumber = 0
let PAUSE_TIME = 0
let DEBOUNCE_TIME = 0
radio.setGroup(99)
DEBOUNCE_TIME = 500
PAUSE_TIME = 200
testNumber = 0
justSwitched = 1
calibrated = 0
lastButtonPressTime = 0
basic.forever(function () {
    EmptyAndShowTestNo()
    if (!(testNumber)) {
        ButtonTest()
    } else if (testNumber == 1) {
        ScreenTest()
    } else if (testNumber == 2) {
        RadioTest()
    } else if (testNumber == 3) {
        LightSensorTest()
    } else if (testNumber == 4) {
        CompassTest()
    } else if (testNumber == 5) {
        AccelerometerTest()
    } else if (testNumber == 6) {
        ThermometerTest()
    } else if (testNumber == 7) {
        PinResistiveTest()
    } else if (testNumber == 8) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
    } else if (testNumber == 9) {
        PinAnalogInputTest()
    } else if (testNumber == 10) {
        PinAnalogOutputTest2()
    }
})
