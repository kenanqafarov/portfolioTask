let footer = document.createElement("footer");

let date = new Date();
let year = date.getFullYear();

let footer_data = {
  en: {
    name: "Kenan Qafarov",
    status: "All Rights Reserved",
  },
  az: {
    name: "Kənan Qafarov",
    status: "Bütün haqqlar qorunur",
  },
};


let currentDataFooter = footer_data[currentLanguageState.toLowerCase()];

footer.innerHTML = `
  <div class="social-medias-icons">
    ${Object.entries(social_links)
    .map(
      ([key, value]) => `
      <a href="${value}">
        <i class="fa-brands fa-${key}"></i>
      </a>`
    )
  }
  </div> 
  <div class="short_cuts">
    ${currentDataHeader.navLinks
    .map(
      (link) => `
      <a href="${link.href}">${link.text}</a>`
    )
  }
  </div>
  <div class="copy_right">
    &copy;${currentDataFooter.name} &VerticalLine; ${currentDataFooter.status} &VerticalLine; ${year}
  </div>
`;

document.body.appendChild(footer);
