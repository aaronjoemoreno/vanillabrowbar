//import {services} from './Services';
const mainNav = document.querySelector(".main-nav");
let topOfNav = mainNav.offsetTop;
const mainHeader = document.querySelector(".main-top");
const serviceTitle = document.querySelector(".menu h1");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "services.json", true);
xhttp.send();



function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = mainNav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

let isInViewport = function(elem) {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

//Contact Form Will Come Soon
function formSubmit(e) {
  e.preventDefault();
  console.log("this works");
}


window.addEventListener("scroll", fixNav);
window.addEventListener("scroll", inView);
document.querySelector(".submit").addEventListener("click", formSubmit);
