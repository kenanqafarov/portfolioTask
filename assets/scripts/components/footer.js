let footer = document.createElement("footer")

let date = new Date()
let year = date.getFullYear()


let footer_data = {
  en: {
    "name": "Kenan Qafarov",
    "status": "All Rights Reserved",
  },
  az: {
    "name": "Kənan Qafarov",
    "status": "Bütün haqqlar qorunur",
  }
}

currentDataFooter = footer_data[currentLanguageState.toLocaleLowerCase()]

footer.innerHTML =
  `
  <div class="social-medias-icons">
      <a href="${social_links.linkedin}">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="${social_links.github}">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="${social_links.instagram}">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="${social_links.x}">
        <i class="fa-brands fa-square-x-twitter"></i>
      </a>
    </div> 
   <div class="short_cuts">
         <a href="#hero" >${currentDataHeader["navlink1"]}</a>
      <a href="" class="">${currentDataHeader["navlink2"]}</a>
      <a href="" class="">${currentDataHeader["navlink3"]}</a>
      <a href="" class="">${currentDataHeader["navlink4"]}</a>
      <a href="" class="">${currentDataHeader["navlink5"]}</a>
    </div>
    <div class="copy_right">
      &copy;${currentDataFooter["name"]} &VerticalLine; ${currentDataFooter["status"]} &VerticalLine; ${year}
    </div>
  </footer> 
`

document.body.appendChild(footer)


