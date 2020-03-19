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
const expandButton = document.querySelector(".expand-button");
const featuredMenu = document.querySelector('.menu .hello');
const headerTitles = document.querySelectorAll('.titleAnimate');
const seeMore = document.querySelector(".menu span")
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
    name: "face (brow, lip, cheek, chin)",
    details: " ",
    price: 40,
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
    featured: true
  },
  {
    name: "brow tint",
    details: "boost thickness and color, immediate results",
    price: 20,
    featured: true
  },
  {
    name: "brow tint add-on",
    details: "add to brow shape to enhance thickness",
    price: 10,
    featured: true
  },
  /*Treatments */
  {
    name: "mini facial",
    details: "cleanse, exfoliate, nourish, relax, customizable",
    price: 60,
    featured: true
  },
  {
    name: "microdermabrasion",
    details: "renew skin tone + texture, brighten, treat",
    price: 90,
    featured: true
  },
  {
    name: "progressive peel",
    details:
      "refining, removes outer layers of skin, skin may have mild sloughing, treatment can be repeated three to four weeks apart",
    price: 65,
    featured: true
  },
  {
    name: "mid depth peel",
    details:
      "rejuvenating, targets deeper layers of the skin, treatment can be repeated monthly",
    price: 85,
    featured: true
  },
  {
    name: "deep peel",
    details:
      "restoring, reaches deepest epidermal layers of the skin, peels in large segments occurring three to four days after treatment, recovery lasts seven to ten days, can be repeated four times per year",
    price: 100,
    featured: true
  },
  {
    name: "micro peel",
    details:
      "combo of microdermabrasion and peel, customizable, downtime depending on peel used",
    price: 125,
    featured: true
  },
  {
    name: "dermaplaning",
    details:
      "light exfoliation, removal of peach fuzz, results are immediate, no downtime",
    price: 50,
    featured: true
  }
];

animatedTitles = headerTitles.forEach((headerTitle) => {
    return headerTitle.getBoundingClientRect();
});

function menuData() {
  if (this.classList.contains("open")) {
    closeMenu(name);
  } else {
    contactForm.classList.add("expanded-menu-contact");
    seeMore.innerHTML = 'see less';
    expandedMenu.innerHTML = '';

    this.classList.add("open");
    expandedMenu.classList.remove("hidden");
    services.forEach(function(service) {
      const name = `<div class="expanded-menu-info">
	<div class="menu-title-expand">${service.name}</div>
	<div class="price-title-expand">${service.price}</div>
	</div>`;

      expandedMenu.innerHTML += name;
    });
  }
}

const serviceNames = services.filter((service) =>{
  return service.featured;
});
const featuredServices = serviceNames.map((serviceName) =>{
  return serviceName;
});


/*Loads Data on Page Load*/
function featuredMenuData(){

  featuredServices.forEach((featuredService)=>{
    let featuredItem = document.createElement("div");
    featuredItem.classList.add('added-div');
    featuredMenu.appendChild(featuredItem);
    featuredItem.innerHTML = `
    <div class="menu-left">
            <h2 class="menu-item">${featuredService.name}</h2>
            <div class="service-details">
              ${featuredService.details}
            </div>
      </div

          <div class="menu-right"><h3 class="cost">${featuredService.price}</h3></div>
          <br />
    `
  })

}
function closeMenu(name) {
  seeMore.innerHTML = 'see more';
  expandButton.classList.remove("open");
  contactForm.classList.remove("expanded-menu-contact");
  expandedMenu.classList.add("hidden");
  expandedMenu.innerHTML -= name;
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
// function formSubmit(e) {

// }

window.addEventListener("scroll", fixNav);
//document.querySelector(".submit").addEventListener("click", formSubmit);
window.addEventListener("load", featuredMenuData);
expandButton.addEventListener("click", menuData);