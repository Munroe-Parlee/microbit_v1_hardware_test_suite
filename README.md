MakeCode program for hardware testing / diagnostics of micro:bits. This is the main program for the micro:bit to be tested, which works in conjunction with the receiver program for testing the radio and light sensor.

Open both programs in split view in the MakeCode for micro:bit editor by copying and pasting this link into the address your browser:
```
https://makecode.microbit.org/---multi#pub:https://github.com/Vegz78/microbit_test_testunit:|:pub:https://github.com/Vegz78/microbit_test_receiver
```
Or by clicking this link if your are viewing this page from https://vegz78.github.io/microbit_test_testunit:<BR>
[https://makecode.microbit.org/---multi#pub:https://github.com/Vegz78/microbit_test_testunit:|:pub:https://github.com/Vegz78/microbit_test_receiver](https://makecode.microbit.org/---multi#pub:https://github.com/Vegz78/microbit_test_testunit:|:pub:https://github.com/Vegz78/microbit_test_receiver)

## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#instructions)
3. [Companion Program](#companion-program)
4. [Other Useful Resources](#other-useful-resources)
5. [Support or Lack Thereof](#support-or-lack-thereof)

## Introduction
Features 11 tests for various inputs (buttons, sensors etc.) and outputs (LED display, pins, radio transmitter etc.) on a micro:bit.

Tested mainly on the micro:bit V1, but should also work on the V2, albeit lacking tests for the new microphone, touch logo and capacative touch on the V2.

No doubt, there are probably much better test suites for the microbit out there, but I could not find what I was looking for - for testing typical faults after being abused in a classroom setting - on the official ["Test your micro:bit" page](https://support.microbit.org/support/solutions/articles/19000029924-testing-your-micro-bit) nor after having searched a while.

## Instructions
Requires one or more micro:bits to be tested (the _test units_ which must load this main program) and one receiver (which must load [this program](https://github.com/Vegz78/microbit_test_receiver)), where the receiver displays the results of the dianotstics of the test unit's radio transmission and light sensor, but is also able to transmit radio to diagnose the test unit's radio reception.

The number of the LED always lit on the test unit's dipslay, corresponds to the numbered test in the list below.

To move up between tests, hold down the A button on the test unit micro:bit and push the B button, and vice versa to move down. You can jump directly to test 11 from 1 by going up and vice versa.

_NB!: Simultaneous pushing of buttons in the MakeCode editor's simulator [does not work yet](https://github.com/microsoft/pxt-microbit/issues/2219). Therefore, to cycle between the various tests in the simulator, instead manually change the variable `testNumber` to a number between 0 and 10._

The various tests:
1. _Buttons_: The test unit displays arrows when buttons are pressed (A button = left arrow, B button = right arrow, A+B buttons = up arrow)
2. _Display_: Cycles between lighting all LED in the test unit's display, and showing the test number (2)
3. _Radio_: Pushing the A or B button on the test unit transmits and shows an _OK_ symbol on the receiver's display, while pushing the A or B button on the receiver transmits and shows an _OK_ symbol on the test unit's display
4. _Light sensors_: The receiver displays the intensity of the light measured from the test unit's LEDs
5. _Compass_: The test unit displays the points measured by the compass, after first asking for calibration. If the compass has been calibrated already, press the B button to cancel calibration. If not, calibration starts regardless, or press the A button to force calibration
6. _Accelerometer_: The test unit displays arrows corresponding to the direction of its tilt, as well as an _OK_ symbol when shaking or applying G forces
7. _Thermometer_: The test unit displays measured temperatures as a scale of 0 to 25 LEDs lit, corresponding to an intervall between 15 and 40 degress celsius
8. _Pins 0-2_: The test unit displays the number of the pin chosen resistively (e.g. keep your right finger on the GND whilie selecting pin 0, 1 and 2 with your left finger)
9. _Audio out_: The test unit plays audio (requires a speaker, preferably an active speaker, connected between pin 0 and GND)
10. _Analog input signal_: The test unit displays applied voltage over pins 0, 1 or 2 (+) and GND (-) of between 0 and 3V as a scale of 0 to 25 LEDs lit (e.g. a 1.5V battery or directly fromo the 3V pin)
11. _Anolog output signal_: The test unit applies voltage to pins 0, 1 and 2, which can be verified for instance by connecting a LED or multimeter between any of these pins (+) and GND (-)

## Companion Program
You can find the receiver program which works in conjunction with this program for diagnosting the radio and light sensor on the test unit here:<BR>
[https://github.com/Vegz78/microbit_test_receiver](https://github.com/Vegz78/microbit_test_receiver)

## Other Useful Resources
- Overview of the various error codes:
  - https://makecode.microbit.org/device/error-codes
  - https://support.microbit.org/support/solutions/articles/19000016969
- How to sometimes fix the dreaded _Maintenance Mode_ (e.g. re-flashing firmware):
  - https://support.microbit.org/support/solutions/articles/19000082598-maintenance-mode
  - https://microbit.org/get-started/user-guide/firmware/  

## Support or Lack Thereof
Since the program works, though presumably not optimally, but nevertheless has fullfilled its intended purpose, there is very little further development and support to be expected.

However, if you have had good use of it or have ideas for or made improvements or experienced some horrible bugs, please tell me about it in the [issues section](https://github.com/Vegz78/microbit_test_testunit/issues)!
<BR>

<BR>
> Åpne denne siden på [https://vegz78.github.io/microbit_test_testunit/](https://vegz78.github.io/microbit_test_testunit/)

## Bruk som utvidelse

Dette kodeområdet kan bli lagt til som en **utvidelse** i MakeCode.

* åpne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikk på **Nytt prosjekt**
* klikk på **Utvidelser** i menyen under tannhjulet
* søk etter **https://github.com/vegz78/microbit_test_testunit** og importér

## Rediger dette prosjektet

For å redigere dette kodeområdet i MakeCode.

* åpne [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikk på **Importer** og så på **Importér URL**
* lim inn **https://github.com/vegz78/microbit_test_testunit** og klikk på importér

#### Metadata (brukes for søk, visualisering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
