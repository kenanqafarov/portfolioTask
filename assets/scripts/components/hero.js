let hero = document.createElement("div")
hero.setAttribute("class", "hero")
hero.setAttribute("id", "#hero")


let hero_data = {
  en: {
    "name-title": "Hi! It's",
    "span": "Kenan",
    "desc-about-me": "I am a UX/UI designer, IT project manager, startup enthusiast, and IT student, driven by a passion for creating user-centered digital solutions. I enjoy transforming ideas into functional and effective products.",
    "job-title": "I'm a ",
    "hero-buttons": "Hire",
    "contact-btn": "Contact",
    "cv-path": "/assets/materials/Qafarov_Kenan_CV_EN.pdf"
  },
  az: {
    "name-title": "Salam! Mən",
    "span": "Kənan",
    "desc-about-me": "Mən UX/UI dizayner, IT layihə meneceri, startupçı və IT tələbəsiyəm, istifadəçiyə yönəlik rəqəmsal həllər yaratmağa həvəsliyəm. İdeyaları funksional və effektiv məhsullara çevirməkdən zövq alıram.",
    "job-title": "Edirəm: ",
    "hero-buttons": "İş təklifi",
    "contact-btn": "Əlaqə",
    "cv-path": "/assets/materials/Qafarov_Kenan_CV_AZ.pdf"

  }
}





let currentDataHero = hero_data[currentLanguageState.toLocaleLowerCase()]



hero.innerHTML =
  `
      <div class="leftPart" data-aos="fade-right"  >
        <div class="name-title">
        
          <h1>${currentDataHero["name-title"]} <span>${currentDataHero["span"]}</span></h1>
        </div>
        <div class="job-title">
          <h2> ${currentDataHero["job-title"]}<span></span></h2>
        </div>
        <div class="desc-about-me">
          <p>
            ${currentDataHero["desc-about-me"]}
          </p>
        </div>
        <div class="social-medias-icons">
          <a href="${social_links.linkedin}" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="${social_links.github}" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="${social_links.instagram}" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="${social_links.twitter}" target="_blank">
            <i class="fa-brands fa-square-x-twitter"></i>
          </a>
        </div>
        
        <div class="hero-buttons">
          <a type="download" class="hire-btn" target="_blank"  href="${currentDataHero["cv-path"]}">
            ${currentDataHero["hero-buttons"]}
          </a>
          <a class="contact-btn" href="#contact">${currentDataHero["contact-btn"]}</a>
        </div>
      </div>
      <div class="rightPart"  data-aos="fade-left">
        <img src="assets/images/general/pfp-Kenan.png" alt="Kenan Qafarov " />
      </div>
    `


hero.setAttribute("id", "hero")


document.body.append(hero)