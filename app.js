const navbar = document.querySelector("#nav");
const navBtn = document.querySelector(".logo-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});


document.querySelector(".navbar-btn").addEventListener("click", () => {
document.querySelector(".navbar-wrapper").classList.toggle("change");
});

var counter = 1;
setInterval(() => {
   document.getElementById('radio' + counter).checked = true;
   counter++;
   if(counter > 4) {
       counter = 1;
   } 
},3000);