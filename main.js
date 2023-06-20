let nodeList = document.querySelectorAll(".notifications");
let notif =  Array.from(nodeList);
let firstThreeElements = notif.slice(0,3);
let allRead = document.querySelector(".markRead");
let countNotif = document.querySelector(".countNotif");
let counter = 3;

countNotif.textContent = counter;

notif.forEach(el => {

    firstThreeElements.forEach(el => {
        el.style.backgroundColor = "hsl(211, 68%, 94%)";
      });
    

    let classNotif = window.getComputedStyle(el);
    let backgroundNotif = classNotif.getPropertyValue("background-color");
    console.log(backgroundNotif);

    
    el.addEventListener("click", () =>{
        if(backgroundNotif){
            el.style.backgroundColor = "white";
            if(counter > 0){
                counter--;
                countNotif.textContent = counter;
            }
            
        } else{
            
        }
    });

    allRead.addEventListener("click", () =>{
    el.style.backgroundColor = "white";
    counter = 0;
    countNotif.textContent = counter;
    });

    
    
});
