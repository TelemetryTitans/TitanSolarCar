#include <Wire.h>
#include <Arduino.h>

#include <LSM9DS1.h>

int x;
int y;
int z;

void setup() {
  Wire.begin();
  smeAccelerometer.begin();
  Serial.begin(115200);

}

void loop() {
  // put your main code here, to run repeatedly:

}
