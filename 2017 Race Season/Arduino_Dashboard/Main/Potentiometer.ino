#include <Arduino.h>

//the steering column turns 1.75 turns to max it out from all the way right to all the way left
//VARIABLES//

//LED Pins
#define rightR 29
#define rightG 31
#define centerB 33
#define leftG 35
#define leftR 37
//Analong In Pins
#define potIn A0

//Setting LEDs
volatile bool rightBoolR = false;
volatile bool rightBoolG = false;
volatile bool centerBoolB = false;
volatile bool leftBoolG = false;
volatile bool leftBoolR = false;

//Turning Angle Maximum
const int angleMax = 45; //Angle in degrees

//Initialization Method
//Meant to be called in setup loop in main code to initilaize the functions
void potentiometerSetup() {
  pinMode(rightR, OUTPUT);
  pinMode(rightG, OUTPUT);
  pinMode(centerB, OUTPUT);
  pinMode(leftG, OUTPUT);
  pinMode(leftR, OUTPUT);
  pinMode(potIn, INPUT);
}

//METHODS//

//Method for determining what LEDs on the dashboard to turn on based on an interger input
void turnAng(int angle) {
  //Checks to turn off LEDs
  if (digitalRead(leftR)) leftBoolR = false;
  if (digitalRead(leftG)) leftBoolG = false;
  if (digitalRead(centerB)) centerBoolB = false;
  if (digitalRead(rightG)) rightBoolG = false;
  if (digitalRead(rightR)) rightBoolR = false;

  //Tests angle then sets the LED on that needs to be on based on what the input is
  if (angle < -15) {
    leftBoolR = true;
  }
  else if (angle >= -15 && angle < -5) {
    leftBoolG = true;
  }
  else if (angle >= -5 && angle <= 5) {
    centerBoolB = true;
  }
  else if (angle > 5 && angle <= 15) {
    rightBoolG = true;
  }
  else {
    rightBoolR = true;
  }
  digitalWrite(leftR, leftBoolR);
  digitalWrite(leftG, leftBoolG);
  digitalWrite(centerB, centerBoolB);
  digitalWrite(rightG, rightBoolG);
  digitalWrite(rightR, rightBoolR);
}

//Method Variables
float val;
float ang;
//Method for reading the potentiometer values and returning an integer
//to be printed to the serial line and to the leds on the dashboard
int potRead() {
  val = analogRead(potIn);
  ang = floor(angleMax * ((val - 512) / 512));
  Serial.println(ang);
  return ang;
}
