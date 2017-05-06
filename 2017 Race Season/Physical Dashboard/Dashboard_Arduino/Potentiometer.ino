//VARIABLES//

//Pin
#define potIn A0

//Turning Angle Maximum
const int angleMax = 45; //Angle in degrees

//METHODS//

//Method for determining what LEDs on the dashboard to turn on based on an interger input
void turnAng(int angle) {
  //Checks to turn off LEDs
  if (digitalRead(leftR)) digitalWrite(leftR, LOW);
  if (digitalRead(leftG)) digitalWrite(leftG, LOW);
  if (digitalRead(centerB)) digitalWrite(centerB, LOW);
  if (digitalRead(rightG)) digitalWrite(rightG, LOW);
  if (digitalRead(rightR)) digitalWrite(rightR, LOW);
  //Tests angle then sets the LED on that needs to be on based on what the input is
  if (angle < -15) {
    digitalWrite(leftR, HIGH);
  }
  else if (angle >= -15 && angle < -5) {
    digitalWrite(leftG, HIGH);
  }
  else if (angle >= -5 && angle <= 5) {
    digitalWrite(centerB, HIGH);
  }
  else if (angle > 5 && angle <= 15) {
    digitalWrite(rightG, HIGH);
  }
  else {
    digitalWrite(rightR, HIGH);
  }

}

//Method Variables
float val;
float ang;
//Method for reading the potentiometer values and returning an integer 
//to be printed to the serial line and to the leds on the dashboard
int potRead(int maxAng) {
  val = analogRead(potIn); 
  ang = maxAng * ((val - 512) / 512);
  ang = floor(ang);
  Serial.println(ang);
  return ang;
}
