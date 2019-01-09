//import {services} from './Services';
const mainNav = document.querySelector(".main-nav");
const mainHeader = document.querySelector(".main-top");
const serviceTitle = document.querySelector(".menu h1");
let topOfNav = mainNav.offsetTop;
let leftMenu = document.querySelector(".expanded-menu .menu-left");
let menuTitle = document.querySelector(".expanded-menu .menu-item");
let serviceDetails = document.querySelector(".expanded-menu .service-details");
let cost = document.querySelector(".expanded-menu .cost");
const contactForm = document.querySelector(".contact");
const expandedMenu = document.querySelector(".expanded-menu");
const services = [
  {
    name: "brow shaping",
    details: " ",
    price: 25,
    featured: false
  },
  {
    name: "brow + lip",
    details: " ",
    price: 30,
    featured: false
  },
  {
    name: "ace (brow, lip, cheek, chin)",
    details: " ",
    price: 40,
    featured: false
  },
  {
    name: "brow shaping",
    details: " ",
    price: 25,
    featured: false
  },
  {
    name: "half leg",
    details: " ",
    price: 40,
    featured: false
  },
  {
    name: "full leg",
    details: " ",
    price: 60,
    featured: false
  },
  {
    name: "bikini",
    details: " ",
    price: 35,
    featured: false
  },
  {
    name: "brazilian",
    details: " ",
    price: 50,
    featured: false
  },
  {
    name: "underarm",
    details: " ",
    price: 20,
    featured: false
  },
  {
    name: "arm",
    details: " ",
    price: 40,
    featured: false
  },
  {
    name: "back",
    details: " ",
    price: 50,
    featured: false
  },
  {
    name: "chest",
    details: " ",
    price: 50,
    featured: false
  },

  /*Enhancements */
  {
    name: "lash tint",
    details: "boost color, semi-permanent, immediate results",
    price: 20,
    featured: false
  },
  {
    name: "brow tint",
    details: "boost thickness and color, immediate results",
    price: 20,
    featured: false
  },
  {
    name: "brow tint add-on",
    details: "add to brow shape to enhance thickness",
    price: 10,
    featured: false
  },
  /*Treatments */
  {
    name: "mini facial",
    details: "cleanse, exfoliate, nourish, relax, customizable",
    price: 60,
    featured: false
  },
  {
    name: "microdermabrasion",
    details: "renew skin tone + texture, brighten, treat",
    price: 90,
    featured: false
  },
  {
    name: "progressive peel",
    details:
      "refining, removes outer layers of skin, skin may have mild sloughing, treatment can be repeated three to four weeks apart",
    price: 65,
    featured: false
  },
  {
    name: "mid depth peel",
    details:
      "rejuvenating, targets deeper layers of the skin, treatment can be repeated monthly",
    price: 85,
    featured: false
  },
  {
    name: "deep peel",
    details:
      "restoring, reaches deepest epidermal layers of the skin, peels in large segments occurring three to four days after treatment, recovery lasts seven to ten days, can be repeated four times per year",
    price: 100,
    featured: false
  },
  {
    name: "micro peel",
    details:
      "combo of microdermabrasion and peel, customizable, downtime depending on peel used",
    price: 125,
    featured: false
  },
  {
    name: "dermaplaning",
    details:
      "light exfoliation, removal of peach fuzz, results are immediate, no downtime",
    price: 50,
    featured: false
  }
];

//const keys = Object.entries(services);

function menuData() {
  contactForm.classList.add("expanded-menu-contact");
  this.classList.add('open');

  services.forEach(function(service) {
    const name = `<div class="expanded-menu-info">
	<div class="menu-title-expand">${service.name}</div>
	<div class="price-title-expand">${service.price}</div>
	</div>`;

    //CONSIDER USING FILTER
    expandedMenu.innerHTML += name;
  });
}

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
document.querySelector(".submit").addEventListener("click", formSubmit);
// window.addEventListener("load", menuData);
document.querySelector(".expand-button").addEventListener("click", menuData);
