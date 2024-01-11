let engineIndicatorLight = "red blinking";
let spacesuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spacesuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;


// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}