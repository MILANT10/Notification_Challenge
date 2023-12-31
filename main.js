// Variables
let NOTIFICATIONS_LIST = document.querySelectorAll(".notifications");
let NOTIFICATIONS_ARRAY = Array.from(NOTIFICATIONS_LIST);
let FIRST_THREE_ELEMENTS = NOTIFICATIONS_ARRAY.slice(0, 3);
let allRead = document.querySelector(".markRead");
let COUNTER_NOTIFICATION = document.querySelector(".countNotif");
// Simple Trick for counter
let counter = 3;
COUNTER_NOTIFICATION.textContent = counter;

// For each firstThree element list for select all elements notifications
  FIRST_THREE_ELEMENTS.forEach(el => {
    el.style.backgroundColor = "hsl(211, 68%, 94%)";
  
    let classNotif = window.getComputedStyle(el);
    let backgroundNotif = classNotif.getPropertyValue("background-color");
  // Event click
  el.addEventListener("click", () => {
    if (backgroundNotif && !el.classList.contains("clicked")) { 
      el.style.backgroundColor = "white";
      el.style.cursor = "auto";
      let redPoints = el.querySelectorAll(".redPoint");
      redPoints.forEach(redPoint => {
        redPoint.style.display = "none";
      });
      if (counter > 0) {
        counter--;
        COUNTER_NOTIFICATION.textContent = counter;
      }
      el.classList.add("clicked"); 
    }
  });
  // Event mouseover
  el.addEventListener("mouseover", () => {
    if(el.classList.contains("clicked")){
      el.style.cursor = "auto";
    } else {
      el.style.cursor = "pointer";
    }
  });
  // Button all read
  allRead.addEventListener("click", () => {
    el.style.backgroundColor = "white";
    el.classList.add("clicked");
    counter = 0;
    COUNTER_NOTIFICATION.textContent = counter;
    let redPoints = el.querySelectorAll(".redPoint");
    redPoints.forEach(redPoint => {
      redPoint.style.display = "none";
    });
    el.removeEventListener("click"); 
  });
});