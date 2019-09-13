
// Getters and setters are important, because they hide internal implementation details.


function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
constructor(farhrenheit){
  this.farhrenheit = farhrenheit;
}
get temperature(){
  return 5 / 9 * (this.farhrenheit -32);
}
set temperature(celsius){
this.farhrenheit = celsius * 9.0 / 5 + 32;
}
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
