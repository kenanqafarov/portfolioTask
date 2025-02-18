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
    "contact-btn": "Contact"
  },
  az: {
    "name-title": "Salam! Mən",
    "span": "Kənan",
    "desc-about-me": "Mən UX/UI dizayner, IT layihə meneceri, startupçı və IT tələbəsiyəm, istifadəçiyə yönəlik rəqəmsal həllər yaratmağa həvəsliyəm. İdeyaları funksional və effektiv məhsullara çevirməkdən zövq alıram.",
    "job-title": "Edirəm: ",
    "hero-buttons": "İş təklifi",
    "contact-btn": "Əlaqə"
  }
}

let social_links = {
  linkedin: "https://www.linkedin.com/in/kenanqafarov",
  github: "https://github.com/kenanqafarov",
  instagram: "https://www.instagram.com/knanqafaro1/",
  x: "https://x.com/KQafarov83870"

}


let currentDataHero = hero_data[currentState.toLocaleLowerCase()]



hero.innerHTML =
  `
      <div class="leftPart">
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
          <a href="${social_links.x}" target="_blank">
            <i class="fa-brands fa-square-x-twitter"></i>
          </a>
        </div>
        
        <div class="hero-buttons">
          <p class="hire-btn">${currentDataHero["hero-buttons"]}</p>
          <p class="contact-btn">${currentDataHero["contact-btn"]}</p>
        </div>
      </div>
      <div class="rightPart">
        <img src="assets/images/pfp-kenan-2.png" alt="Kenan Qafarov " />
      </div>
    `


hero.setAttribute("id", "hero")


document.body.append(hero)