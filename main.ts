input.onButtonPressed(Button.A, function () {
    program += 1
    if (program > 3) {
        program = 0
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
let range: neopixel.Strip = null
let mic = 0
let color = 0
let program = 0
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
basic.forever(function () {
    if (program == 0 || program == 1) {
        mic = input.soundLevel()
    }
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
        if (program == 0 || program == 1) {
            basic.pause(100)
        } else {
            basic.pause(200)
        }
        strip.clear()
    }
})
