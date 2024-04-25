function updateTime() {
//get current and time
let today = new Date();
let thisHour = today.getHours();
let thisMinute = today.getMinutes();
let thisSecond = today.getSeconds();
let secDot = document.getElementById("sec-container");
let minDot = document.getElementById("min-container");
let hourDot = document.getElementById("hour-container");

//conditionals
if(thisSecond == 5){
    secDot.innerHTML = "";
}
if(thisSecond < 5){
    secDot.innerHTML = "";
}
if(thisSecond < 10) {
    thisSecond = "0" + thisSecond;
}
if(thisMinute < 10) {
    thisMinute = "0" + thisMinute;
}
if(thisHour < 10) {
    thisHour = "0" + thisHour;
}
if(thisSecond < 4){
    secDot.classList.add("disappear");
} else {
    secDot.classList.remove("disappear");
}
if(thisMinute < 2){
    minDot.classList.add("disappear");
} else {
    minDot.classList.remove("disappear");
}
if(thisHour < 1){
    hourDot.classList.add("disappear");
} else {
    hourDot.classList.remove("disappear");
}
if(thisMinute == 0 && thisSecond == 0){
    //update hours
    hourDot.innerHTML += "<div class='hourDot'></div>";
}
if(thisSecond == 0 && thisMinute % 2 === 0) {
    //update minutes
    //minDot.style.backgroundColor = "yellow";
    minDot.innerHTML += "<div class='minDot'></div>";
}
if(thisSecond % 5) {
    //blank
  } else {
    //update seconds
    secDot.innerHTML += "<div class='secDot'></div>";
}

//add to inner HTML
let timeHere = document.getElementById("timeHere");
timeHere.innerHTML = thisHour + " : " + thisMinute + " : " + thisSecond;

//current water consumption
let waterPerSec = 5.25751157;
let secWater = thisSecond * waterPerSec;
let minWater = thisMinute * waterPerSec * 60;
let hourWater = thisHour * waterPerSec * 60 * 60;
let currentWater = Math.floor(secWater + minWater + hourWater) + " ML";
let waterHere = document.getElementById("waterHere");
waterHere.innerHTML = currentWater;

//random second dot position
let seconds = document.querySelectorAll(".secDot")
for (let second of seconds) {
    let randomTop = Math.random() * 100;
    let randomLeft = Math.random() * 100;
    second.style.top = randomTop + "vh";
    second.style.left = randomLeft + "vw";
}
}
setInterval(updateTime, 1000);

//random minute dot location
function minLocation() {
let minutes = document.querySelectorAll(".minDot")
for (let minute of minutes) {
    let randomTop = Math.random() * 100;
    let randomLeft = Math.random() * 100;
    minute.style.top = randomTop + "vh";
    minute.style.left = randomLeft + "vw";
}
}
setInterval(minLocation, 5000);

//random hour dot location
function hourLocation() {
let hours = document.querySelectorAll(".hourDot")
for (let hour of hours) {
    let randomTop = Math.random() * 100;
    let randomLeft = Math.random() * 100;
    hour.style.top = randomTop + "vh";
    hour.style.left = randomLeft + "vw";
}
}
setInterval(hourLocation, 12000);

//get current and time
let today = new Date();
let thisHour = today.getHours();
let thisMinute = today.getMinutes();
let thisSecond = today.getSeconds();

//generate second dots
function createSecDivs(numSecDivs) {
    var secContainer = document.getElementById('sec-container');
    for (var i = 0; i < numSecDivs; i++) {
        var div = document.createElement('div');
        div.className = 'secDot';
        div.textContent = '';
        secContainer.appendChild(div);
    }
}

let secContainer = document.getElementById('sec-container');
let divSecNumber = Math.floor((thisSecond / 5));
createSecDivs(divSecNumber);


//generate minute dots
function createMinDivs(numMinDivs) {
    var minContainer = document.getElementById('min-container');
    for (var i = 0; i < numMinDivs; i++) {
        var div = document.createElement('div');
        div.className = 'minDot';
        div.textContent = '';
        minContainer.appendChild(div);
    }
}

let minContainer = document.getElementById('min-container');
let divMinNumber = Math.floor((thisMinute / 2));
createMinDivs(divMinNumber);


//generate hour dots
function createHourDivs(numHourDivs) {
    var hourContainer = document.getElementById('hour-container');
    for (var i = 0; i < numHourDivs; i++) {
        var div = document.createElement('div');
        div.className = 'hourDot';
        div.textContent = '';
        hourContainer.appendChild(div);
    }
}

let hourContainer = document.getElementById('hour-container');
let divHourNumber = thisHour;
createHourDivs(divHourNumber);

//starting random location
let seconds = document.querySelectorAll(".secDot")
for (let second of seconds) {
    let randomTop = Math.random() * 100;
    let randomLeft = Math.random() * 100;
    second.style.top = randomTop + "vh";
    second.style.left = randomLeft + "vw";
}
let minutes = document.querySelectorAll(".minDot")
for (let minute of minutes) {
    let randomTop = Math.random() * 100;
    let randomLeft = Math.random() * 100;
    minute.style.top = randomTop + "vh";
    minute.style.left = randomLeft + "vw";
}
let hours = document.querySelectorAll(".hourDot")
for (let hour of hours) {
    let randomTop = Math.random() * 100;
    let randomLeft = Math.random() * 100;
    hour.style.top = randomTop + "vh";
    hour.style.left = randomLeft + "vw";
}

