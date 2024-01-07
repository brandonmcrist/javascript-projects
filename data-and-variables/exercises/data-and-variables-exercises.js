let shuttleName = 'Determination';
let speed = 17500;
let distMars = 225000000;
let distMoon = 384400;
const mpk = 0.621;

let milesToMars = distMars * mpk;
let timeToMars = milesToMars / speed;
let daysToMars = timeToMars / 24;

console.log(shuttleName, " will take ", daysToMars, " days to reach Mars.");

let milesToMoon = distMoon * mpk;
let timeToMoon = milesToMoon / speed;
let daysToMoon = timeToMoon / 24;

console.log(shuttleName, " will take ", daysToMoon, " days to reach the Moon.");

