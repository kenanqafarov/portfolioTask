let education = document.createElement("div")
education.classList.add("education")



let education_data = {
  en: {
    "title": "Education",
    "date-1": "2023-Present",
    "title-1": "UNEC - Information Technologies",
    "desc-1": "In 2023, I was admitted to the IT program at UNEC, where I am deeply learning IT.",
    "date-2": "2023-Present",
    "title-2": "TechnoEra Academy - 6th Era Scholarship Program",
    "desc-2": "I was the winner of the TechnoEra Academy's 6th Era Scholarship Program and earned a 100% scholarship in front-end programming. I successfully passed a special exam and an interview to be admitted.",
    "date-3": "2023-Present",
    "title-3": "Turing Academy - I Wave Scholarship Program",
    "desc-3": "I was the winner of the Turing Academy's 1st Wave Scholarship Program.",
    "date-4": "2023-Present",
    "title-4": "Matrix Academy - Codecamp project",
    "desc-4": "At Matrix Academy, through a partnership with UNEC, I was one of the 25 students selected from 400 applicants through a special exam and was awarded a 100% scholarship."
  },
  az: {
    "title": "Təhsil",
    "date-1": "2023-Davam edir",
    "title-1": "UNEC - İnformasiya Texnologiyaları",
    "desc-1": "2023-cü ildə UNEC-də İT ixtisasına qəbul olmuşam və burada İT-ni dərindən öyrənirəm.",
    "date-2": "2023-Davam edir",
    "title-2": "TexnoEra Academy - 6th Era Təqaüd Proqramı",
    "desc-2": "TexnoEra Academy-nin 6th Era təqaüd proqramının qalibi olmuşam və Front-end proqramlaşdırma üzrə 100% təqaüd qazanmışam. Xüsusi imtahan və müsahibədən uğurla keçərək qəbul olmuşam.",
    "date-3": "2023-Davam edir",
    "title-3": "Turing Academy - I Dalğa Təqaüd Proqramı",
    "desc-3": "Turing Academy-nin 1-ci dalğa təqaüd proqramının qalibi olmuşam.",
    "date-4": "2023-Davam edir",
    "title-4": "Matrix Academy - Codecamp layihəsi",
    "desc-4": "Matrix Academy-də UNEC ilə əməkdaşlıq çərçivəsində 400 tələbə arasından xüsusi imtahanla seçilən 25 tələbədən biri olmuşam və 100% təqaüd qazanmışam."
  }
};

let currentEducationData = education_data[currentLanguageState.toLocaleLowerCase()]

education.setAttribute("class", "education")
education.setAttribute("id", "education")
education.innerHTML =
  `
      <h1>Education</h1>
      <div class = "education-content" >
        <div class="base-line"></div>
        <div class="first dot"></div>
        <div class="university element" data-aos="fade-up " data-aos-duration="3000">
          <p class = "date">${currentEducationData["date-1"]}</p>
          <p class="title">${currentEducationData["title-1"]}</p>
          <p class="desc">${currentEducationData["desc-1"]}</p>
        </div>
        <div class="second dot"></div>
        <div class="texnoera element" data-aos="fade-up " data-aos-duration="3000">
          <p class = "date">${currentEducationData["date-2"]}</p>
          <p class="title">${currentEducationData["title-2"]}</p>
          <p class="desc">${currentEducationData["desc-2"]}</p>
        </div>
        <div class="third dot"></div>

        <div class="turing element" data-aos="fade-up " data-aos-duration="3000">
          <p class = "date">${currentEducationData["date-3"]}</p>
          <p class="title">${currentEducationData["title-3"]}</p>
          <p class="desc">${currentEducationData["desc-3"]}</p>
        </div>
        <div class="fourth dot"></div>

        <div class="matrix element" data-aos="fade-up " data-aos-duration="3000">
          <p class = "date">${currentEducationData["date-4"]}</p>
          <p class="title">${currentEducationData["title-4"]}</p>
          <p class="desc">${currentEducationData["desc-4"]}</p>
        </div>
      </div>
`
document.body.appendChild(education)