#include <Wire.h>
#include <Arduino.h>

#include <LSM9DS1.h>

int x;
int y;
int z;

void printAxis(int x, int y, int z) {
    Serial.print("X = ");
    Serial.print(x, DEC);
    Serial.print("     Y = ");
    Serial.print(y, DEC);
    Serial.print("     Z = ");
    Serial.println(z, DEC);
}

void setup() {
  Wire.begin();
  smeAccelerometer.begin();
  Serial.begin(115200);

}

void loop() {
  x = smeAccelerometer.readX();
  y = smeAccelerometer.readY();
  z = smeAccelerometer.readZ();
  Serial.print("Direct Readings:  X = ");
  Serial.print(x);
  Serial.print("   Y = ");
  Serial.print(y);
  Serial.print("   Z = ");
  Serial.println(z);
  printAxis(x,y,z);
}
