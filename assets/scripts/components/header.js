let header = document.createElement("header");

let header_data = {
  en: {
    navLinks: [
      { href: "#hero", text: "Home" },
      { href: "#education", text: "Education" },
      { href: "#services", text: "Services" },
      { href: "#testimonials", text: "Testimonials" },
      { href: "#contact", text: "Contact" },
    ],
  },
  az: {
    navLinks: [
      { href: "#hero", text: "Ana səhifə" },
      { href: "#education", text: "Təhsil" },
      { href: "#services", text: "Xidmətlər" },
      { href: "#testimonials", text: "Rəylər" },
      { href: "#contact", text: "Əlaqə" },
    ],
  },
};

let social_links = {
  linkedin: "https://www.linkedin.com/in/kenanqafarov",
  github: "https://github.com/kenanqafarov",
  instagram: "https://www.instagram.com/knanqafaro1/",
  twitter: "https://x.com/KQafarov83870"

}

let currentDataHeader = header_data[currentLanguageState.toLowerCase()];

const sidebarHandle = () => {
  const menuIcon = document.querySelector("#menuIcon");
  menuIcon.classList.toggle("exit");
  document.getElementById("sidebar").classList.toggle("sidebarActive");
};

header.innerHTML = `
  <div class="navbar">
    <div class="logo">
      <p>Kenan <span>Qafarov</span></p>
    </div>
    <div class="navLinks">
      ${currentDataHeader.navLinks
    .map(
      (link, index) => `
        <a href="${link.href}" class="nav-link ">${link.text}</a>
      `
    )
  }
    </div>

    <div class="bars" id="menuIcon" onClick="sidebarHandle()">
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
    ${currentDataHeader.navLinks
    .map(
      (link) => `
      <a href="${link.href}">${link.text}</a>
    `
    )
  }
    <div class="sidebar-icons">
      <p class="lang-btn-mobile">AZ</p>
      <i class="fa-regular fa-moon darkLight-mobile" id="darkLight-mobile"></i>
    </div>
  </div>
`;

document.body.prepend(header);
