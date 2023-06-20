let nodeList = document.querySelectorAll(".notifications");
let notif = Array.from(nodeList);
let firstThreeElements = notif.slice(0, 3);
let allRead = document.querySelector(".markRead");
let countNotif = document.querySelector(".countNotif");
let counter = 3;
countNotif.textContent = counter;

notif.forEach(el => {
  firstThreeElements.forEach(el => {
    el.style.backgroundColor = "hsl(211, 68%, 94%)";
  });

  el.addEventListener("click", () => {
    let classNotif = window.getComputedStyle(el);
    let backgroundNotif = classNotif.getPropertyValue("background-color");

    if (backgroundNotif) {
      el.style.backgroundColor = "white";
      el.classList.add("clicked");
      let redPoints = el.querySelectorAll(".redPoint");
      redPoints.forEach(redPoint => {
        redPoint.style.display = "none";
      });
      if (counter > 0) {
        counter--;
        countNotif.textContent = counter;
      }
    }
  });

  allRead.addEventListener("click", () => {
    el.style.backgroundColor = "white";
    el.classList.add("clicked");
    counter = 0;
    countNotif.textContent = counter;
    let redPoints = el.querySelectorAll(".redPoint");
    redPoints.forEach(redPoint => {
      redPoint.style.display = "none";
    });
  });
});
