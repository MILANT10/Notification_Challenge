let notif = document.querySelectorAll(".notifications");
let allRead = document.querySelector(".markRead");
let countNotif = document.querySelector(".countNotif");




notif.forEach(el => {


    

    let classNotif = window.getComputedStyle(el);
    let backgroundNotif = classNotif.getPropertyValue("background-color");
    console.log(backgroundNotif);

    
    el.addEventListener("click", () =>{
        if(backgroundNotif){
            el.classList =("");
            notif[7].remove();
        } else{
            
        }
    });

    allRead.addEventListener("click", () =>{
    el.style.backgroundColor = "white";
    });

    countNotif.textContent = notif.length.toString();
    
});
