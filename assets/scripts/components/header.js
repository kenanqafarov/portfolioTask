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




let currentDataHeader = header_data[currentLanguageState.toLocaleLowerCase()]



const sidebarHandle = () => {
  const menuIcon = document.querySelector("#menuIcon");
  menuIcon.classList.toggle("exit")

  document.getElementById("sidebar").classList.toggle("sidebarActive")

}


header.innerHTML =
  `
  <div class = "navbar">
   <div class="logo">
      <p>Kenan <span>Qafarov</span></p>
    </div>
    <div class="navLinks">
      <a href="#hero" class="nav-link active">${currentDataHeader["navlink1"]}</a>
      <a href="#education" class="nav-link">${currentDataHeader["navlink2"]}</a>
      <a href="#services" class="nav-link">${currentDataHeader["navlink3"]}</a>
      <a href="#testimonials" class="nav-link">${currentDataHeader["navlink4"]}</a>
      <a href="#contact" class="nav-link">${currentDataHeader["navlink5"]}</a>
    </div>
    
    <div class="bars" id="menuIcon" onClick=sidebarHandle()>
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
    </div>
    <div class="rightPart">
      <p class="lang-btn">AZ</p>
      <i class="fa-regular fa-moon darkLight" id="darkLight"></i>
    </div>
  </div>
  <div class="sidebar" id="sidebar">
        <a href="#hero">${currentDataHeader["navlink1"]}</a>
        <a href="#education">${currentDataHeader["navlink2"]}</a>
        <a href="#services">${currentDataHeader["navlink3"]}</a>
        <a href="#testimonials">${currentDataHeader["navlink4"]}</a>
        <a href="#contact">${currentDataHeader["navlink5"]}</a>
        <div class = "sidebar-icons">
          <p class="lang-btn-mobile">AZ</p>
          <i class="fa-regular fa-moon darkLight-mobile" id="darkLight-mobile"></i>
        </div>
  </div>

   
  `

document.body.prepend(header);

