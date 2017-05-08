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

volatile int count = 0; //count for how many times the hall effect sensor reads
int readings[readingAverage]; //array to store the rpm values to be averaged
int index = 0; //for indexing through averaging array
int total;
int RPM;
float MPH;
//Methods
void calcRPM() {
  detachInterrupt(digitalPinToInterrupt(interruptPin)); //detach the interrupt so it doesnt break the calculations

  //calculations
  readings[index] = 60 * ((count * (sampleTime / 1000000)) / numMag);
  for (int i = 0; i < readingAverage; i++) {
    total += readings[i];
  }
  RPM = total / readingAverage;
  MPH = RPM * RPMtoMPH;

  if(index >= 9) index = 0; //loop the index value so we dont get out of bounds errors and other fun breaky stuff
  
  //print values to serial to be read by the udoo
  Serial.print("RPM: ");
  Serial.println(RPM); 
  Serial.print("MPH: ");
  Serial.println(MPH);
  //reset varibles
  count = 0;
  total = 0;
  attachInterrupt(digitalPinToInterrupt(interruptPin), increment, RISING); //reattach the interrupt so code works
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
