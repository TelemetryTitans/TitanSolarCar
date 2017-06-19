# TitanSolarCar
<h3>Telemetry Systems for Titan Solar Car</h3>


<p>This repository includes all the code that is implemented in the [Titan] Solar Car's<br>
secondary and telemetry systems. </p>
<br>
<p>The goal of this project is to collect data from the solar car and present it in an <br>
intuitive format using the hardware listed below. The data is being collected by several<br>
sensors including: hall effect sensors, potentiometers, and a battery monitor (from Victron).<br>
The hall sensors and potentiometers are wired to Arduinos respectively. The Arduinos and <br>
battery monitor are connected through serial line into the Raspberry Pi. The Pi uses Node to <br>
parse the serial lines (using JS) and hosts a local server for the UDOOs to access. The UDOOs, <br>
using the LVDS panels, present the data using an HTML GUI.</p>

-- <i>Physical Apparatus:</i>
  <ul>
  <li>
  Udoo Quad x2
  </li>
  <li>
  Udoo LVDS 15.6" panel
  </li>
  <li>
  Udoo LVDS 7" panel
  </li>
  <li>
  Arduino Uno x2
  </li>
  <li>
  Raspberry Pi 3
  </li>
  <li>
  Golden Motor - VEC300
  </li>
  <li>
  Victron Energy - BMV 702
  </li>
  <li>
  <a href="http://bit.ly/tsc_telemetryBOM">Full BOM</a>
  </li>
  </ul>
<p>© Titan Solar Car 2017 - - - - <a href="https://www.titansolarcar.com">titansolarcar.com</a></p>
