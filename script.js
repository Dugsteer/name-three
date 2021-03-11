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
  [
    "superheroes: batman...",
    "ironman",
    "spiderman",
    "thor",
    "captain marvel",
    "black panther",
    "captain america",
  ],
  [
    "illnesses: sore throat...",
    "cough",
    "cold",
    "temperature",
    "stomach-ache",
    "headache",
    "earache",
  ],
  [
    "daily actions: get up...",
    "have a shower",
    "brush my teeth",
    "eat dinner",
    "come home",
    "go to school",
    "do my homework",
  ],
  [
    "personal things: belt...",
    "watch",
    "necklace",
    "bracelet",
    "earring",
    "nose ring",
    "ring",
  ],
  [
    "video games: starting with F",
    "FIFA 2021",
    "final fantasy",
    "far cry",
    "fat city",
    "fishing planet",
    "fortnite",
  ],
  [
    "patterns: checked...",
    "striped",
    "colourful",
    "flowery",
    "checked",
    "spotty",
    "plain",
  ],
  [
    "chores: washing up...",
    "cooking",
    "drying up",
    "watering the flowers",
    "cleaning the windows",
    "sweeping",
    "tidying my room",
  ],
  [
    "descriptions: lazy...",
    "clever",
    "untidy",
    "hard-working",
    "weak",
    "strong",
    "tidy",
  ],
  ["food: potatoes...", "fish", "meat", "fruit", "salad", "vegetables", "rice"],
  [
    "places in Town: Butcher's...",
    "Baker's",
    "Cinema",
    "Supermarket",
    "Chemist's",
    "Police Station",
    "School",
  ],
  [
    "xtreme sports: bmx...",
    "ice climbing",
    "BASE jumping",
    "bunjee jumping",
    "surfing",
    "paragliding",
    "parkour",
  ],
  ["That's All Folks!"],
];

const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");
const answer6 = document.getElementById("answer6");

i = -1;
j = 0;

function clearTable() {
  answer1.innerText = "";
  answer2.innerText = "";
  answer3.innerText = "";
  answer4.innerText = "";
  answer5.innerText = "";
  answer6.innerText = "";
  answer0.innerText = "";
}

function mainlist() {
  if (answer0.innerText === "THAT'S ALL FOLKS!") {
    window.location.reload();
  } else if (i === 6) {
    clearTable();
    j++;
    i = 0;
    const green = `answer${i}`;
    let currentArray = lists[j];
    window[green].innerText = currentArray[i].toUpperCase();
  } else {
    i++;
    const green = `answer${i}`;
    let currentArray = lists[j];
    window[green].innerText = currentArray[i].toUpperCase();
  }
}
