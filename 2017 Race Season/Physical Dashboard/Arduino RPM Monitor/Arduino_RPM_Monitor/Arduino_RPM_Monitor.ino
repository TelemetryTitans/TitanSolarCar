//VARIABLES//
const int NumReadings = 10;
int Readings[NumReadings];
unsigned long Average = 0;
int Index = 0;
unsigned long Total;

volatile int Half_Rotations = 0;
unsigned long Hz = 0;
unsigned long Rpm = 0;
unsigned long Lastmillis =  0;
const byte InterruptPin = 2;
unsigned long = RotationCount;
//So every 969.696969 rotations is 1 mile
//And 16.1616161 rpm is 1 mph
//

void Detect() {
  Half_Rotations ++;
  //err time half revolutions happens, add one more to counter
  //Serial.println("Detect")
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  attachInterrupt(digitalPinToInterrupt(InterruptPin), Detect, RISING);
  //sets digital pin that will be interupted and runs detect comand when Voltage goes from LOW to HIGH(aka Rising)
  RotationCount = 20
}

void loop() {
  // put your main code here, to run repeatedly:
  //if (Serial.read() >= 0){
    //RotationCount = Serial.read();
    //}
  if (half_Rotations >= RotationCount){
    //update err set of rotations
    detachInterrupt(digitalPinToInterrupt(InterruptPin));
      //disable interrupt while calculating
      total = 0;
      Readings[Index] = 30 * 1000 / (millis() - Lastmillis) * Half_Rotations;
      //convert Frequency to Rpm and using 30 because half rotations instead of full rotations
      for (int x = 0; x <= 9; x++) {
        Total = Total + Readings[x];
      }
      Average = Total / NumReadings;
      Rpm = Average;
      Hz = Half_Rotations / 2;
      Serial.print("RPM = ");
      Serial.println(Rpm);




      Half_Rotations = 0 ;
      //restart counting Rotations for next interval
      Index++;
      if (Index >= NumReadings) {
        Index = 0;
        // to keep the 10 most recent indexes for calculations
      }


      Lastmillis = millis();
      //updates last second
      attachInterrupt(digitalPinToInterrupt(InterruptPin), Detect, Rising);
      //startup interrupt
    }

}
