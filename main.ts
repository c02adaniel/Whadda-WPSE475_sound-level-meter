input.onButtonPressed(Button.A, function () {
    program += 1
    if (program > 4) {
        program = 0
    }
    basic.showNumber(program)
})
input.onGesture(Gesture.ScreenDown, function () {
    program = 0
    color = 0
    basic.showNumber(program)
})
input.onButtonPressed(Button.AB, function () {
    if (wait < 100) {
        wait = 500
    } else {
        wait = wait - 100
    }
})
input.onButtonPressed(Button.B, function () {
    if (program == 0 || program == 2) {
        if (color < 8) {
            color += 1
        } else {
            color = 0
        }
    }
})
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let mic = 0
let color = 0
let program = 0
let wait = 0
wait = 500
let max1 = 23
let strip = neopixel.create(DigitalPin.P2, 26, NeoPixelMode.RGB)
program = 0
color = 0
// max_volume: 255
let max_volume = 200
let degree = -1
for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= 4; y++) {
        led.plot(x, y)
        basic.pause(50)
    }
}
basic.pause(100)
for (let x2 = 0; x2 <= 4; x2++) {
    for (let y2 = 0; y2 <= 4; y2++) {
        led.unplot(x2, y2)
        basic.pause(50)
    }
}
basic.clearScreen()
strip.clear()
strip.show()
basic.showNumber(program)
basic.forever(function () {
    mic = input.soundLevel()
    if (degree != -1 && (program == 2 || program == 3)) {
        degree = input.compassHeading()
    }
    if (degree == -1 && (program == 2 || program == 3)) {
        input.calibrateCompass()
        degree = input.compassHeading()
    }
})
control.inBackground(function () {
    while (true) {
        if (program == 0) {
            for (let index = 0; index <= mic / max_volume * 26; index++) {
                if (color == 0) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
                }
                if (color == 1) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Orange))
                }
                if (color == 2) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
                }
                if (color == 3) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
                }
                if (color == 4) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
                }
                if (color == 5) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Indigo))
                }
                if (color == 6) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Violet))
                }
                if (color == 7) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Purple))
                }
                if (color == 8) {
                    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
                }
                strip.show()
            }
        }
        if (program == 1) {
            range = strip.range(0, mic / 255 * 26)
            range.showRainbow(1, 360)
            range.show()
        }
        if (program == 2) {
            for (let index2 = 0; index2 <= degree / 359 * 26; index2++) {
                if (color == 0) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Red))
                }
                if (color == 1) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Orange))
                }
                if (color == 2) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Yellow))
                }
                if (color == 3) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Green))
                }
                if (color == 4) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Blue))
                }
                if (color == 5) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Indigo))
                }
                if (color == 6) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Violet))
                }
                if (color == 7) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Purple))
                }
                if (color == 8) {
                    strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.White))
                }
                strip.show()
            }
        }
        if (program == 3) {
            range = strip.range(0, degree / 359 * 26)
            range.showRainbow(1, 360)
            range.show()
        }
        if (program == 4) {
            while (program == 4 && max1 >= 0) {
                range2 = strip.range(0, max1)
                for (let index32 = 0; index32 <= max1; index32++) {
                    if (color == 0) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.Red))
                    }
                    if (color == 1) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.Orange))
                    }
                    if (color == 2) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.Yellow))
                    }
                    if (color == 3) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.Green))
                    }
                    if (color == 4) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.Blue))
                    }
                    if (color == 5) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.Indigo))
                    }
                    if (color == 6) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.Violet))
                    }
                    if (color == 7) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.Purple))
                    }
                    if (color == 8) {
                        range2.setPixelColor(index32, neopixel.colors(NeoPixelColors.White))
                    }
                    range2.show()
                    basic.pause(wait)
                    range2.clear()
                    range2.show()
                }
                if (color == 0) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.Red))
                }
                if (color == 1) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.Orange))
                }
                if (color == 2) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.Yellow))
                }
                if (color == 3) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.Green))
                }
                if (color == 4) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.Blue))
                }
                if (color == 5) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.Indigo))
                }
                if (color == 6) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.Violet))
                }
                if (color == 7) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.Purple))
                }
                if (color == 8) {
                    strip.setPixelColor(max1, neopixel.colors(NeoPixelColors.White))
                }
                max1 = max1 - 1
            }
            if (max1 < 0) {
                max1 = 23
                strip.clear()
                strip.show()
            }
        }
        if (program == 0 || program == 1) {
            basic.pause(100)
            strip.clear()
            strip.show()
        }
        if (program == 2 || program == 3) {
            basic.pause(200)
            strip.clear()
            strip.show()
        }
    }
})
