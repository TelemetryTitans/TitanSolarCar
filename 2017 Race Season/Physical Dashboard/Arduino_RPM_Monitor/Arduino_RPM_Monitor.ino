//VARIABLES//
const int numReadings = 10; //number of readings to sue to average the speed or the car
int readings[numReadings]; //array with the length of number of readings to be used to average the speed
unsigned long average = 0;
int Index = 0; //Index counter for the average array
unsigned long total; 

volatile int halfRotations = 0; //Rotations counter that is incremneted everytime the hall effect sensor is triggered.
unsigned long Hz = 0;
unsigned long lastMillis =  0;
const byte interruptPin = 2;
unsigned int count = 20;

//So every 969.696969 rotations is 1 mile
//And 16.1616161 rpm is 1 mph

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  attachInterrupt(digitalPinToInterrupt(interruptPin), Detect, RISING);
  //sets digital pin that will be interupted and runs detect comand when Voltage goes from LOW to HIGH(aka Rising)
}

void loop() {
  if (halfRotations >= count){
    //update err set of rotations
    detachInterrupt(digitalPinToInterrupt(interruptPin));
      //disable interrupt while calculating
      total = 0;
      readings[Index] = 30 * 1000 / (millis() - lastMillis) * halfRotations;
      //convert Frequency to Rpm and using 30 because half rotations instead of full rotations
      for (int x = 0; x <= 9; x++) {
        total = total + readings[x];
      }
      average = total / numReadings;
      Hz = halfRotations / 2;
      Serial.print("RPM = ");
      Serial.print(average);




      halfRotations = 0 ;
      //restart counting Rotations for next interval
      Index++;
      if (Index >= numReadings) {
        Index = 0;
        // to keep the 10 most recent Indexes for calculations
      }


      lastMillis = millis();
      //updates last second
      attachInterrupt(digitalPinToInterrupt(interruptPin), Detect, RISING);
      //startup interrupt
    }

}

void Detect() {
  halfRotations ++;
  //err time half revolutions happens, add one more to counter
  //Serial.println("Detect")
}
