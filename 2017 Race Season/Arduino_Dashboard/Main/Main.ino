#include <Arduino.h>

#include <DueTimer.h>

//Battery LED Placement
//BatH    : 23
//batM    : 25
//batL    : 27
//lastLap : 49
//Blinker LED + Pin Placement
//rightIn     : 26
//leftIn      : 28
//hazardIn    : 34
//rightRelay  : 32
//leftRelay   : 30
//hazardRelay : 36
//Acceleration LED + Pin Placement
//accelR  : 39
//accelG  : 41
//stableB : 43
//decelG  : 45
//decelR  : 47
//Potentiometer LED + Pin Placement
//rightR  : 29
//rightG  : 31
//centerB : 33
//leftG   : 35
//leftR   : 37
//potIn   : A0
void setup() {
  Serial.begin(115200); //Begin serial at a 115200 baud rate for communicating to and from the udoo
  //Initializations
  accelerationSetup();
  batLvlSetup();
  blinkersSetup();
  potentiometerSetup();

}

void loop() {
  batLvl(52.0, false);
  turnAng(potRead());
  accelLED(0);
}
