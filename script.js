'use strict';


// navvar toggle

const overlay = document.querySelector("[data-overlay]");
const  navopenbtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navclosebtn = document.querySelector("[data-nav-close-btn]");

const navElems =[overlay ,  navopenbtn, navclosebtn];

for(let i = 0; 1 < navElems.length; i++){
    navElems[i].addEventListener("click" , function (){
        navbar. classList.toggle("active");
        overlay.classList.toggle("active");

    })

    }





