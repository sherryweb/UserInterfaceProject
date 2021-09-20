// JavaScript source code for event page
// Developed by: Jia Zhu, Tingting Song, Xiaotong Zhang
// Script Date: September 12, 2021

/* Function to create and run the countdown clock */
function runClock() {
  /* Store the current date and time */
  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();

  /* Display the current date and time */
  document.getElementById("dateNow").innerHTML = dateStr + "&nbsp" + timeStr;
}
runClock();
setInterval("runClock()", 1000);

let currentSign = "index-burger1";

// create changeSign function
function changeSign() {
  // check the status of the currentSign
  if (currentSign === "index-burger1") {
    // switch images
    document.getElementById("mainburguerimg").src = "images/index-burger2.jpg";
    // change the current sign value to on
    currentSign = "index-burger2";
  } else if (currentSign === "index-burger2") {
    // switch images
    document.getElementById("mainburguerimg").src =
      "images/burguers_on_black.jpg";
    // change the current sign value to on
    currentSign = "burguers_on_black";
  } else if (currentSign === "burguers_on_black") {
    document.getElementById("mainburguerimg").src =
      "images/chicken-nuggets.jpg";
    // change the current sign value to on
    currentSign = "chicken-nuggets";
  } else {
    document.getElementById("mainburguerimg").src = "images/index-burger1.jpg";
    // change the current sign value to on
    currentSign = "index-burger1";
  }
}

changeSign();
setInterval("changeSign()", 1000);
