// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const orange = document.getElementById("orange");
const blue = window.matchMedia("(max-width: 800px)");

//Change Intropic
function turnMe() {
  orange.classList.add("turnOrange");
  waterPour();
  setTimeout(orangeOff, 4000);
}

function orangeOff() {
  orange.classList.remove("turnOrange");
}

//Make sound of juice pouring
function waterPour() {
  const waterPouring = new Audio("sounds/water.mp3");
  waterPouring.play();
}

// Show and hide about info
function show() {
  info.classList.toggle("xxc");
}
function unshow() {
  info.classList.remove("xxc");
}

//Center the loader wherever the page is
function checkForTop() {
  loader.style.top = window.pageYOffset + "px";
}
checkForTop();

//Manage the loader
function stopLoader() {
  loader.classList.add("stop");
}
function startLoader() {
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}
function toggler() {
  sidey.classList.toggle("block");
}
myFunction(blue);

//GAME FUNCTIONALITY
var lists = [
  ['places to eat', 'dining room', 'kitchen', 'restaurant', 'cafe', 'park', 'beach'],
  ['vehicles', 'car', 'motorbike', 'bike', 'train', 'bus', 'camel'],
  ['fruits', 'apple', 'pear', 'banana', 'orange', 'kiwi', 'lemon'],
  ['weather', 'sunny', 'rainy', 'cloudy', 'windy', 'snowy', 'stormy'],
  ['pets', 'dog', 'cat', 'rabbit', 'guinea pig', 'hamster', 'mouse'],
  ['clothes', 'shirt', 'hat', 'trousers', 'jacket', 'jumper', 'belt'],
  ['colors', 'red', 'green', 'blue', 'purple', 'yellow', 'black'],
  ['jobs', 'doctor', 'teacher', 'builder', 'police officer', 'footballer', 'artist'],
  ['places in Town', 'Baker\'s', 'Cinema', 'Supermarket', 'Chemist\'s', 'Police Station', 'School'],
  ['sports', 'Football', 'Basketball', 'Tennis', 'Aikido', 'Swimming', 'Cycling'],
  ['That\'s All Folks!']
]


const answer0 = document.getElementById('answer0');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const answer5 = document.getElementById('answer5');
const answer6 = document.getElementById('answer6');

i = -1;
j=0;

function clearTable(){
 answer1.innerText = "";
 answer2.innerText = "";
 answer3.innerText = "";
 answer4.innerText = "";
 answer5.innerText = "";
 answer6.innerText = "";
 answer0.innerText = "";
}

function mainlist(){
  if(answer0.innerText ==='THAT\'S ALL FOLKS!'){
     window.location.reload();
  } else
if(i === 6){
   clearTable();
     j++;
     i=0;
     const  green = `answer${i}`
     let currentArray = lists[j];
     window[green].innerText = currentArray[i].toUpperCase();
  } else {
  i++;
const  green = `answer${i}`
let currentArray = lists[j];
window[green].innerText = currentArray[i].toUpperCase();
}
}