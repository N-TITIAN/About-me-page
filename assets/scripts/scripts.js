// JavaScript code to update dynamic data
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = document.querySelector("#currentDay");
let currentUTCTime = document.querySelector("#currentTimeUTC");


// // Function to format the time in milliseconds
// function formatTime(date) {
//   return date.getTime().toString();
// }
// Function to format the time in a human-readable format 
function formatTime(date) {
  var hours = date.getUTCHours().toString().padStart(2, "0");
  var minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes} UTC`; 
}


// Update the current day and UTC time every second
setInterval(function () {
  let currentDate = new Date();
  let day = currentDate.getDay();

  currentDay.textContent =   daysOfWeek[day];
  currentTimeUTC.textContent = formatTime(currentDate);
}, 1000);


//navbar
function resnav() {
  let navItems = document.getElementById("Topnav")
  if (navItems.className === "nav-items") {
    navItems.className += " responsive";
  } else {
navItems.className ="nav-items";
  }
}