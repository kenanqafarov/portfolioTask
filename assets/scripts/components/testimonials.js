let testimonials = document.createElement("div");
testimonials.classList.add("testimonials");

testimonials.setAttribute("id", "testimonials");

let testimonials_data = {
  en: {
    title: "Testimonials",
    users: [
      {
        user: "Sophia Johnson",
        comment: "Kenan is an amazing programmer. His skills, attention to detail, and dedication to his work are truly impressive. He always strives to deliver the best solutions and is a pleasure to work with.",
        stars: 5,
        userImg: "assets/images/testimonials/Sophia-J.png",
      },
      {
        user: "Emily Brown",
        comment: "Kenan's problem-solving abilities are outstanding. He consistently delivers high-quality results and ensures that every project he handles is completed efficiently and effectively. His commitment to excellence is admirable.",
        stars: 5,
        userImg: "assets/images/testimonials/Emily-B.png",
      },
      {
        user: "Olga Petrova",
        comment: "Working with Kenan has been a pleasure. He is professional, knowledgeable, and efficient. His expertise in programming is evident in every task he undertakes, and his approach to teamwork is exemplary.",
        stars: 5,
        userImg: "assets/images/testimonials/Olga-P.png",
      },
      {
        user: "Rashad Aliyev",
        comment: "Kenan is an exceptional programmer. His skills and approach to his work are praiseworthy. He has the ability to solve even the most complex technical problems quickly and efficiently. Collaborating with him has been an enriching experience.",
        stars: 5,
        userImg: "assets/images/testimonials/Rashad-A.png",
      },
      {
        user: "Leyla Huseynli",
        comment: "Kenan is a highly professional and hardworking individual. His work ethic and problem-solving skills are remarkable. Working with him is always a smooth and productive experience.",
        stars: 5,
        userImg: "assets/images/testimonials/Leyla-H.png",
      },
    ],
  },
  az: {
    title: "Rəylər",
    users: [
      {
        user: "Sofiya Conson",
        comment: "Kənan əla proqramistdir. Onun iş bacarığı, detallara diqqəti və peşəkarlığı yüksək səviyyədədir. Həmişə ən yaxşı həlləri təqdim etməyə çalışır və onunla işləmək çox xoşdur.",
        stars: 5,
        userImg: "assets/images/testimonials/Sophia-J.png",
      },
      {
        user: "Emili Braun",
        comment: "Kənan problemləri həll etməkdə çox məharətlidir. O, hər zaman keyfiyyətli nəticələr təqdim edir və ona həvalə olunan hər bir layihəni səmərəli və effektiv şəkildə yerinə yetirir. Onun mükəmməlliyə olan sadiqliyi heyranedicidir.",
        stars: 5,
        userImg: "assets/images/testimonials/Emily-B.png",
      },
      {
        user: "Olqa Petrova",
        comment: "Kənanla işləmək çox xoşdur. O, peşəkar, bilikli və operativdir. Onun proqramlaşdırma sahəsindəki biliyi və komanda işinə olan yanaşması təqdirəlayiqdir.",
        stars: 5,
        userImg: "assets/images/testimonials/Olga-P.png",
      },
      {
        user: "Rəşad Əliyev",
        comment: "Kənan çox gözəl proqramistdir. Onun bacarıqları və işinə yanaşması təqdirəlayiqdir. O, ən mürəkkəb texniki problemləri belə tez və səmərəli şəkildə həll edir. Onunla əməkdaşlıq etmək böyük təcrübədir.",
        stars: 5,
        userImg: "assets/images/testimonials/Rashad-A.png",
      },
      {
        user: "Leyla Hüseynli",
        comment: "Kənan peşəkar və çalışqan insandır. Onun iş əxlaqı və problemləri həll etmək bacarığı heyranedicidir. Onunla işləmək hər zaman rahat və səmərəli olur.",
        stars: 5,
        userImg: "assets/images/testimonials/Leyla-H.png",
      },
    ],
  },
};


let currentTestimonialsData = testimonials_data[currentLanguageState.toLowerCase()];

testimonials.innerHTML = `
  <h1 data-aos="fade-left">${currentTestimonialsData.title}</h1>
  <div class="swiper mySwiper" data-aos="fade-up">
    <div class="swiper-wrapper">
      ${currentTestimonialsData.users
    .map(
      (user) => `
            <div class="swiper-slide">
              <img src="${user.userImg}" alt="${user.user}" />
              <p class="reviewer-name">${user.user}</p>
              <div class="stars">
                ${Array(user.stars)
          .fill('<i class="fa-solid fa-star"></i>')
        }
              </div>
              <div class="desc">${user.comment}</div>
            </div>
          `
    )
  }
    </div>
  </div>
`;

document.body.appendChild(testimonials);
