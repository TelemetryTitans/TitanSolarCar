#include <DueTimer.h>
/////////////////////////////////////
///////DASHBOARD LED VARIABLES//////
// H = high, M = medium, L = low///
// R = red, G = green, B = blue///
/////////////////////////////////

// Battery Level Led
#define batH 23
#define batM 25
#define batL 27
// Turning Angle Led
#define rightR 29
#define rightG 31
#define centerB 33
#define leftG 35
#define leftR 37
// Acceleration Led
#define accelR 39
#define accelG 41
#define stableB 43
#define decelG 45
#define decelR 47
// Last Lap
#define lastLap 49

//////////////////////////////
///CAR BLINKER VARIABLES/////
////////////////////////////

// Switch Pins
#define rightIn 26
#define leftIn 28
#define hazardIn 34
// Blinker Pins
#define leftRelay 30
#define rightRelay 32
#define hazardRelay 36
// Blink Interval
const int blinkT = 500000; //delay time in microseconds

void switchR() {
  ////////////////////////////
  ////RIGHT SWITCH METHOD////
  //////////////////////////

  if (!digitalRead(rightIn) && digitalRead(hazardIn)) {
    Timer1.start(blinkT);
    //Start timer for Right blinker (refer to RIGHT BLINK METHOD)
  }
  else if (digitalRead(hazardIn)) {
    Timer1.stop();
    digitalWrite(rightRelay, LOW);
  }
}


void switchL() {
  ////////////////////////////
  ////LEFT SWITCH METHOD/////
  //////////////////////////

  if (!digitalRead(leftIn) && digitalRead(hazardIn)) {
    Timer2.start(blinkT);
    //Start timer for Left blinker (refer to LEFT BLINK METHOD)
  }
  else if (digitalRead(hazardIn)) {
    Timer2.stop();
    digitalWrite(leftRelay, LOW);
  }

}

void hazardSwitch() {
  /////////////////////////////
  ////HAZARD SWITCH METHOD////
  ///////////////////////////
  if (!digitalRead(hazardIn)) {
    Timer1.stop();
    Timer2.stop();
    Timer3.start(blinkT);
  }
  else {
    Timer3.stop();
    digitalWrite(rightRelay, LOW);
    digitalWrite(leftRelay, LOW);
    if (!digitalRead(rightIn)) Timer1.start(blinkT);
    if (!digitalRead(leftIn)) Timer2.start(blinkT);
  }

}

void blinkR() {
  ////////////////////////////
  ////RIGHT BLINK METHOD/////
  //////////////////////////
  digitalWrite(rightRelay, !digitalRead(rightRelay));
  //Serial.println("right blink");
  //use to test
}

void blinkL() {
  ////////////////////////////
  ////LEFT BLINK METHOD//////
  //////////////////////////
  digitalWrite(leftRelay, !digitalRead(leftRelay));
  //Serial.println("left blink");
}

void hazardBlink() {
  /////////////////////////////
  ////HAZARD BLINK METHOD/////
  ///////////////////////////
  digitalWrite(rightRelay, !digitalRead(rightRelay));
  digitalWrite(leftRelay, !digitalRead(leftRelay));
  //Serial.println("hazard blink");

}

/////////////////////////////
////BATTERY LEVEL METHOD////
///////////////////////////
void batLvl (float voltage) {
  digitalWrite(batL, HIGH);
  digitalWrite(batM, LOW);
  digitalWrite(batH, LOW);
  if (voltage >= 48.0) {
    digitalWrite(batM, HIGH);
    if (voltage >= 50.0) {
      digitalWrite(batH, HIGH);
    }
  }
}



void accelLED(float delta) {
   ////////////////////////////////
  ////ACCELERATION READ METHOD////
 ////////////////////////////////
  if (digitalRead(accelR)) digitalWrite(accelR, LOW);
  if (digitalRead(accelG)) digitalWrite(accelG, LOW);
  if (digitalRead(stableB)) digitalWrite(stableB, LOW);
  if (digitalRead(decelG)) digitalWrite(decelG, LOW);
  if (digitalRead(decelR)) digitalWrite(decelR, LOW);

  if (delta < -2) {
    digitalWrite(accelR, HIGH);
  }
  else if (delta >= -2 && delta < -.5) {
    digitalWrite(accelG, HIGH);
  }
  else if (delta >= -0.5 && delta <= 0.5) {
    digitalWrite(stableB, HIGH);
  }
  else if (delta > .5 && delta <= 2 ) {
    digitalWrite(decelG, HIGH);
  }
  else {
    digitalWrite(decelR, HIGH);
  }
  }
/////////////////////////////
///MAIN CODE BELOW HERE/////
///////////////////////////
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  ///////////////////////////
  //////BLINKER PINS////////
  /////////////////////////
  pinMode(rightIn, INPUT_PULLUP);
  pinMode(rightRelay, OUTPUT);
  pinMode(leftIn, INPUT_PULLUP);
  pinMode(leftRelay, OUTPUT);
  pinMode(hazardIn, INPUT_PULLUP);
  pinMode(hazardRelay, OUTPUT);
  /////////////////////////////////
  //////DASHBOARD LED PINS////////
  ///////////////////////////////

  // Battery Level Led
  pinMode(batH, OUTPUT);
  pinMode(batM, OUTPUT);
  pinMode(batL, OUTPUT);
  // Turning Angle Led
  pinMode(rightR, OUTPUT);
  pinMode(rightG, OUTPUT);
  pinMode(centerB, OUTPUT);
  pinMode(leftG, OUTPUT);
  pinMode(leftR, OUTPUT);
  // Acceleration Led
  pinMode(accelR, OUTPUT);
  pinMode(accelG, OUTPUT);
  pinMode(stableB, OUTPUT);
  pinMode(decelG, OUTPUT);
  pinMode(decelR, OUTPUT);

  /////////////////////////////
  ////POTENENTIOMETER PINS////
  ///////////////////////////
  pinMode(potIn, INPUT);

  /////////////////////////////////////////////////
  ///PHYSICAL INTERRUPTS AND TIMER INTERRUPTS/////
  ///////////////////////////////////////////////

  Timer1.attachInterrupt(blinkR);
  //refer to RIGHT BLINK METHOD
  attachInterrupt(digitalPinToInterrupt(rightIn), switchR, CHANGE);
  // refer to RIGHT SWITCH METHOD
  Timer2.attachInterrupt(blinkL);
  //refert to LEFT BLINK METHOD
  attachInterrupt(digitalPinToInterrupt(leftIn), switchL, CHANGE);
  // refer to LEFT SWITCH METHOD
  Timer3.attachInterrupt(hazardBlink);
  //refer to HAZARD BLINK METHOD
  attachInterrupt(digitalPinToInterrupt(hazardIn), hazardSwitch, CHANGE);
  // refer to HAZARD SWITCH METHOD


}

void loop() {
  //batLvl(52.0);
  turnAng(potRead(angleMax));
  accelLED(0);
}



