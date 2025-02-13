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
      <a href="#hero" class="active">${currentData["navlink1"]}</a>
      <a href="#hero" class="">${currentData["navlink2"]}</a>
      <a href="#hero" class="">${currentData["navlink3"]}</a>
      <a href="#hero" class="">${currentData["navlink4"]}</a>
      <a href="#hero" class="">${currentData["navlink5"]}</a>
     
    </div>
    
    <i class="fa-solid fa-bars bars"></i>
    <div class="rightPart">
      <p class="lang-btn">AZ</p>
      <i class="fa-regular fa-moon" id="darkLight"></i>
    </div>
  </header> 
  `
document.body.prepend(header);