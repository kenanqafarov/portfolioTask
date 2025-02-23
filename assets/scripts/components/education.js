let education = document.createElement("div");
education.classList.add("education");

let education_data = {
  en: {
    title: "Education",
    educations: [
      {
        date: "2023-Present",
        title: "UNEC - Information Technologies",
        desc: "In 2023, I was admitted to the IT program at UNEC, where I am deeply learning IT.",
        className: "university",
      },
      {
        date: "2023-Present",
        title: "TechnoEra Academy - 6th Era Scholarship Program",
        desc: "I was the winner of the TechnoEra Academy's 6th Era Scholarship Program and earned a 100% scholarship in front-end programming. I successfully passed a special exam and an interview to be admitted.",
        className: "texnoera",
      },
      {
        date: "2023-Present",
        title: "Turing Academy - I Wave Scholarship Program",
        desc: "I was the winner of the Turing Academy's 1st Wave Scholarship Program.",
        className: "turing",
      },
      {
        date: "2023-Present",
        title: "Matrix Academy - Codecamp project",
        desc: "At Matrix Academy, through a partnership with UNEC, I was one of the 25 students selected from 400 applicants through a special exam and was awarded a 100% scholarship.",
        className: "matrix",
      },
    ],
  },
  az: {
    title: "Təhsil",
    educations: [
      {
        date: "2023-Davam edir",
        title: "UNEC - İnformasiya Texnologiyaları",
        desc: "2023-cü ildə UNEC-də İT ixtisasına qəbul olmuşam və burada İT-ni dərindən öyrənirəm.",
        className: "university",
      },
      {
        date: "2023-Davam edir",
        title: "TexnoEra Academy - 6th Era Təqaüd Proqramı",
        desc: "TexnoEra Academy-nin 6th Era təqaüd proqramının qalibi olmuşam və Front-end proqramlaşdırma üzrə 100% təqaüd qazanmışam. Xüsusi imtahan və müsahibədən uğurla keçərək qəbul olmuşam.",
        className: "texnoera",
      },
      {
        date: "2023-Davam edir",
        title: "Turing Academy - I Dalğa Təqaüd Proqramı",
        desc: "Turing Academy-nin 1-ci dalğa təqaüd proqramının qalibi olmuşam.",
        className: "turing",
      },
      {
        date: "2023-Davam edir",
        title: "Matrix Academy - Codecamp layihəsi",
        desc: "Matrix Academy-də UNEC ilə əməkdaşlıq çərçivəsində 400 tələbə arasından xüsusi imtahanla seçilən 25 tələbədən biri olmuşam və 100% təqaüd qazanmışam.",
        className: "matrix",
      },
    ],
  },
};

let currentEducationData = education_data[currentLanguageState.toLowerCase()];

education.setAttribute("id", "education");
education.innerHTML = `
  <h1>${currentEducationData.title}</h1>
  <div class="education-content">
    <div class="base-line"></div>
    ${currentEducationData.educations
    .map(
      (edu, index) => `
        <div class="dot ${["first", "second", "third", "fourth"][index]}"></div>
        <div class="${edu.className} element" data-aos="fade-up" data-aos-duration="3000">
          <p class="date">${edu.date}</p>
          <p class="title">${edu.title}</p>
          <p class="desc">${edu.desc}</p>
        </div>
      `
    )
  }
  </div>
`;

document.body.appendChild(education);
