let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if (crewStatus === true) {
    console.log("Crew Ready");
 } else {
    console.log("Crew Not Ready");
 }
 
 if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
 } else if (computerStatusCode === 400) {
    console.log("Success! Computer online.");
 } else {
    console.log("ALERT: Computer offline!");
 }
 
 if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
 } else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
 } else {
    console.log("Stable speed");
 }

console.log("No");
