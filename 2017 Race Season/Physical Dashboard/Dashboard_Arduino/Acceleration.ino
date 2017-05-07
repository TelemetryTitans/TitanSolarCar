//VARIABLES//

//LED pins
#define accelR 39
#define accelG 41
#define stableB 43
#define decelG 45
#define decelR 47

//Setting LEDs
volatile bool accelBoolR = false;
volatile bool accelBoolG = false;
volatile bool stableBoolB = false;
volatile bool decelBoolG = false;
volatile bool decelBoolR = false;

//Initilization Method
//Meant to be called in setup loop in main code to initilaize the functions
void accelerationSetup() {
  pinMode(accelR, OUTPUT);
  pinMode(accelG, OUTPUT);
  pinMode(stableB, OUTPUT);
  pinMode(decelG, OUTPUT);
  pinMode(decelR, OUTPUT);
}

//METHODS//
void accelLED(float delta) {
  //Turn off LEDs that were on to be reset later
  if (digitalRead(accelR)) accelBoolR = false;
  if (digitalRead(accelG)) accelBoolG = false;
  if (digitalRead(stableB)) stableBoolB = false;
  if (digitalRead(decelG)) decelBoolG = false;
  if (digitalRead(decelR)) decelBoolR = false;

  //Test angle and set LED on based on cool stuff a.k.a. data
  if (delta < -2) {
    accelBoolR = true;
  }
  else if (delta >= -2 && delta < -.5) {
    accelBoolG = true;
  }
  else if (delta >= -0.5 && delta <= 0.5) {
    stableBoolB = true;
  }
  else if (delta > .5 && delta <= 2 ) {
    decelBoolG = true;
  }
  else {
    decelBoolR = true;
  }
  digitalWrite(accelR, accelBoolR);
  digitalWrite(accelG, accelBoolG);
  digitalWrite(stableB, stableBoolB);
  digitalWrite(decelG, decelBoolG);
  digitalWrite(decelR, decelBoolR);
}




