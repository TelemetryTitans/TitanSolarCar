#include <DueTimer.h>

void setup() {
  Serial.begin(115200); //Begin serial at a 115200 baud rate for communicating to and from the udoo
  accelerationSetup();
  batLvlSetup();
  blinkersSetup();
  potentiometerSetup();

}

void loop() {
  batLvl(52.0);
  turnAng(potRead());
  accelLED(0);
}



