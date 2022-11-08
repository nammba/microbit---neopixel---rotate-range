let number_of_leds = 144
let number_of_leds_of_range = 144
let strip = neopixel.create(DigitalPin.P0, number_of_leds, NeoPixelMode.RGB)
strip.setBrightness(20)
let range = strip.range(0, number_of_leds_of_range)
basic.forever(function () {
    for (let index = 0; index <= number_of_leds_of_range; index++) {
        range.setPixelColor(index, neopixel.hsl(3970 + randint(-10, 40), 100, 20))
    }
    strip.show()
})
