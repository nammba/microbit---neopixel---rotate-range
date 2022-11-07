let number_of_leds = 144
let strip = neopixel.create(DigitalPin.P0, number_of_leds, NeoPixelMode.RGB)
strip.setBrightness(20)
let range = strip.range(0, 10)
range.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(10)
})
