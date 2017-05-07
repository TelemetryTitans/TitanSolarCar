//Variables//

//Switch Pins
#define rightIn 26
#define leftIn 28
#define hazardIn 34
//LED Pins
#define leftRelay 30
#define rightRelay 32
#define hazardRelay 36
//Blink Interval
const int blinkT = 500000; //delay time in microseconds

//Initialize Method
//Meant to be called in setup loop in main code to initilaize the functions
void blinkersSetup() {
  //Set pin modes
  pinMode(rightIn, INPUT_PULLUP);
  pinMode(rightRelay, OUTPUT);
  pinMode(leftIn, INPUT_PULLUP);
  pinMode(leftRelay, OUTPUT);
  pinMode(hazardIn, INPUT_PULLUP);
  pinMode(hazardRelay, OUTPUT);
  
  //Attach interrupts to pins as to not eat up clock time
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

//METHODS//
//Method triggered by switch interupt to begin or turn off the right blinker timer
void switchR() {
  if (!digitalRead(rightIn) && digitalRead(hazardIn)) {
    Timer1.start(blinkT);
    //Start timer for Right blinker (refer to RIGHT BLINK METHOD)
  }
  else if (digitalRead(hazardIn)) {
    Timer1.stop();
    digitalWrite(rightRelay, LOW);
  }
}

//Method triggered by switch interrupt to begin or turn off the left blinker timer
void switchL() {

  if (!digitalRead(leftIn) && digitalRead(hazardIn)) {
    Timer2.start(blinkT);
    //Start timer for Left blinker (refer to LEFT BLINK METHOD)
  }
  else if (digitalRead(hazardIn)) {
    Timer2.stop();
    digitalWrite(leftRelay, LOW);
  }

}

//Method to turn on hazards
//hazardous method, not haphazardly coded(hopefully)
void hazardSwitch() {
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

//Toggle with timers right
//RIGHT BLINK METHOD
void blinkR() {
  digitalWrite(rightRelay, !digitalRead(rightRelay));
}

//toggle with timers left
//LEFT BLINK METHOD
void blinkL() {
  digitalWrite(leftRelay, !digitalRead(leftRelay));
}

//toggle with timers hazard
//HAZARD BLINK METHOD
void hazardBlink() {
  digitalWrite(rightRelay, !digitalRead(rightRelay));
  digitalWrite(leftRelay, !digitalRead(leftRelay));
}
