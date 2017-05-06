//VARIABLES//

//LED pins
#define accelR 39
#define accelG 41
#define stableB 43
#define decelG 45
#define decelR 47

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
