// We are creating a header 

let header = document.createElement("header")

let header_data = {
  en: {
    "navlink1": "Home",
    "navlink2": "Education",
    "navlink3": "Services",
    "navlink4": "Testimonials",
    "navlink5": "Contact",
  },
  az: {
    "navlink1": "Ana səhifə",
    "navlink2": "Təhsil",
    "navlink3": "Xidmətlər",
    "navlink4": "Rəylər",
    "navlink5": "Əlaqə",
  }
}

let currentState = localStorage.getItem("lang") || "EN"
let currentData = header_data[currentState.toLocaleLowerCase()]

header.innerHTML =
  `
   <div class="logo">
      <p>Kenan <span>Qafarov</span></p>
    </div>
    <div class="navLinks">
      <a href="#hero" class="nav-link active">${currentData["navlink1"]}</a>
      <a href="#education" class="nav-link">${currentData["navlink2"]}</a>
      <a href="#services" class="nav-link">${currentData["navlink3"]}</a>
      <a href="#testimonials" class="nav-link">${currentData["navlink4"]}</a>
      <a href="#contact" class="nav-link">${currentData["navlink5"]}</a>
    </div>
    
    <i class="fa-solid fa-bars bars"></i>
    <div class="rightPart">
      <p class="lang-btn">AZ</p>
      <i class="fa-regular fa-moon" id="darkLight"></i>
    </div>
  `

document.body.prepend(header);

// === SCROLL VE CLICK ACTIVE SISTEMI ===

// Linkləri və bölmələri seçirik
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Klik zamanı aktiv link dəyişdirilməsi
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Scroll zamanı aktiv link dəyişdirilməsi
window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // header hündürlüyünü nəzərə alırıq
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
