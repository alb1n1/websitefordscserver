'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
// This code will attempt to disable F12 and right-click functionality
window.addEventListener('keydown', function(e) {
  if (e.key === 'F12') {
      e.preventDefault(); // Prevent F12 from opening developer tools
  }
});

window.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // Prevent right-click context menu
});
function validate(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;
  const error = document.getElementById("error");
  const error_message = document.getElementById("error_message");
  const disp = document.getElementById("disp");
  const length = name.length;
  error.style.padding = "10px";

  if(length < 6){
      const text = "Name Should be more than 6 characters";
      error.innerHTML = text;
      return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
      const text = "Your email is invalid.";
      error_message.innerHTML = text;
      return false;
  }
  if(pass.length < 8){
      const text = "Password Should be more than 8 characters";
      error.innerHTML = text;
      return false;
  }
  if(pass != cpass){
      const text = "Password does not match";
      error.innerHTML = text;
      return false;
  }
  
  disp.style.display = 'block';
  error.style.padding = "0px";
  return false;
}