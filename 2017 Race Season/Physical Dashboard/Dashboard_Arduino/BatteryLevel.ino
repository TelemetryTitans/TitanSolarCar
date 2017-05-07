//VARIABLES//

//LED Pins
#define batH 23
#define batM 25
#define batL 27
#define lastLap 49

//Setting LEDs
volatile bool batBoolL = false;
volatile bool batBoolM = false;
volatile bool batBoolH = false;
volatile bool lastLapBool = false;

//Initialization Method
//Meant to be called in setup loop in main code to initilaize the functions
void batLvlSetup() {
  pinMode(batH, OUTPUT);
  pinMode(batM, OUTPUT);
  pinMode(batL, OUTPUT);
}

//METHODS//
void batLvl (float voltage, bool last) {
  //Set the initial pin states
  batBoolL = true;
  batBoolM = false;
  batBoolH = false;
  //Check Input then set pins high based on input
  if (voltage >= 48.0) {
    batBoolM = true;
    if (voltage >= 50.0) {
      batBoolH = true;
    }
  }
  if (last) {
    lastLapBool = true;
  }
  else {
    lastLapBool = false;
  }
  digitalWrite(batH, batBoolH);
  digitalWrite(batM, batBoolM);
  digitalWrite(batL, batBoolL);
  digitalWrite(lastLap, lastLapBool);
}
