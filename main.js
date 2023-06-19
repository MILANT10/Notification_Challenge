let notif = document.querySelectorAll(".notifications");
let allRead = document.querySelector(".markRead");
let countNotif = document.querySelector(".countNotif");


notif.forEach(el => {


    countNotif.innerHTML(el);

    let classNotif = window.getComputedStyle(el);
    let backgroundNotif = classNotif.getPropertyValue("background-color");
    console.log(backgroundNotif);

    
    el.addEventListener("click", () =>{
        if(backgroundNotif){
            el.style.backgroundColor = "white";
        } else{
            
        }
    });

    allRead.addEventListener("click", () =>{
    el.style.backgroundColor = "white";
    });
});

