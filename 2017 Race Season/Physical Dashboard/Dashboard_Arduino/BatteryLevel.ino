//VARIABLES//

//LED Pins
#define batH 23
#define batM 25
#define batL 27
#define lastLap 49

//Initialization Method
//Meant to be called in setup loop in main code to initilaize the functions
void batLvlSetup() {
  pinMode(batH, OUTPUT);
  pinMode(batM, OUTPUT);
  pinMode(batL, OUTPUT);
}

//METHODS//
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
