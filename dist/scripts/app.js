const mainNav = document.querySelector(".main-nav");
let topOfNav = mainNav.offsetTop;
const aboutHeader = document.querySelector(".about h2");
const contactButton = document.querySelector(".contact-button");
const portStrike = document.querySelector(".strike");
const portButtons = Array.from(document.querySelectorAll(".port-options h3"));
let details = document.createElement("div");
let textBoxOutput = document.querySelector(".text-box-icon");
const mainIcon = document.querySelector(".main-icon-clickable");
const mainHeader = document.querySelector(".main-top");
const aaronSayings = [
  "Hey, how's it going?",
  "Click Below to say hi!",
  "What's your favororite food?"
];
let i = 0;
let time = new Date();
let date = parseFloat(time.getHours() + "." + time.getMinutes());

//changes main color of background
window.onload = function() {
  if (date <= 10) {
    mainHeader.classList.toggle("morning");
  } else if (date >= 11) {
    mainHeader.classList.toggle("afternoon");
  } else {
    mainHeader.classList.toggle("night");
  }
};
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

function inView(event) {
  if (isInViewport(aboutHeader)) {
    aboutHeader.classList.add("bounceInUp");
    contactButton.classList.add("bounceIn");
  }
}
function portfolioButton() {
  details.classList.add("details");
  const portfolioDetails = document.querySelector(".port-options");
  portfolioDetails.appendChild(details);

  if (this.innerHTML == "Websites") {
    details.innerHTML = `
      <a href="https://littlebearcoffeeco.com" target="_blank">
          <img src="images/portfolio/littlebear.png" alt ="little bear coffee">
        </a>
    `;
  } else if (this.innerHTML == "Javascript") {
    details.innerHTML = `
    <div class="portfolio-images">
      <a href="http://aaronmoreno.co/tip-calc" target="_blank">
        <img src="images/portfolio/tip.png" alt ="tip calculator">
      </a>
      <p>Tip Calculator</p>
    </div>

    <div class="portfolio-images">
      <a href="http://aaronmoreno.co/tip-cal" target="_blank">
        <img src="images/portfolio/calculator.png" alt ="tip calculator">
      </a>
      <p>Calculator</p>
    </div>
    
    `;
  } else {
    details.innerHTML = `
            <h2>${this.innerHTML} coming soon...</h2>
    `;
  }
}

//Contact Form Will Come Soon
function formSubmit(e) {
  e.preventDefault();
  console.log("this works");
}

function textBoxFunc() {
  if (i >= aaronSayings.length) {
    i = 0;
  } else {
    textBoxOutput.innerHTML = aaronSayings[i];
    i++;
  }
}

window.addEventListener("scroll", fixNav);
window.addEventListener("scroll", inView);
portButtons.forEach(button =>
  button.addEventListener("click", portfolioButton)
);
document.querySelector(".submit").addEventListener("click", formSubmit);
mainIcon.addEventListener("click", textBoxFunc);
