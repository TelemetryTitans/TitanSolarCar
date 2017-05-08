#include <TimerOne.h>

//Fancy Numbers
//So every 969.696969 rotations is 1 mile
//And 16.1616161 rpm is 1 mph


//Pin Declarations
#define interruptPin 2

//Variables
#define sampleTime 100000 // time in microsends for each calculation, 1 second = 1 million microseconds
#define numMag 2 //number of magnets placed on the wheel
#define RPMtoMPH 16.161616 //magic number of wheel rpms to mph
#define readingAverage 10 //number of readings to store and average

volatile int count = 0;
int readings[readingAverage];
int index = 0;
int total;
int RPM;
float MPH;
//Methods
void calcRPM() {
  detachInterrupt(digitalPinToInterrupt(interruptPin));

  //calculations
  readings[index] = 60 * ((count * (sampleTime / 1000000)) / numMag);
  for (int i = 0; i < readingAverage; i++) {
    total += readings[i];
  }
  RPM = total / readingAverage;
  MPH = RPM * RPMtoMPH;

  //exit code
  Serial.print("RPM: ");
  Serial.println(RPM); 
  Serial.print("MPH: ");
  Serial.println(MPH);
  count = 0;
  total = 0;
  attachInterrupt(digitalPinToInterrupt(interruptPin), increment, RISING);
}

void increment() {
  count++;
}
void setup() {

  Serial.begin(115200);
  Timer1.initialize(sampleTime);
  Timer1.attachInterrupt(calcRPM);
  attachInterrupt(digitalPinToInterrupt(interruptPin), increment, RISING);
}

void loop() {
  // put your main code here, to run repeatedly:

}
