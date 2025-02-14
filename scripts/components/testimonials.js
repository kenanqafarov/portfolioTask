let testimonials = document.createElement("div")
testimonials.classList.add("testimonials")

let testimonials_data = {
  en: {
    "title": "Testimonials",
    "user-1": "Sophia Johnson",
    "comment-1": "Kenan is an amazing programmer. His skills, attention to detail, and dedication to his work are truly impressive. He always strives to deliver the best solutions and is a pleasure to work with.",
    "stars-1": 5,
    "user-1-img": "assets/images/testimonials/Sophia-J.png",

    "user-2": "Emily Brown",
    "comment-2": "Kenan's problem-solving abilities are outstanding. He consistently delivers high-quality results and ensures that every project he handles is completed efficiently and effectively. His commitment to excellence is admirable.",
    "stars-2": 5,
    "user-2-img": "assets/images/testimonials/Emily-B.png",


    "user-3": "Olga Petrova",
    "comment-3": "Working with Kenan has been a pleasure. He is professional, knowledgeable, and efficient. His expertise in programming is evident in every task he undertakes, and his approach to teamwork is exemplary.",
    "stars-3": 5,
    "user-3-img": "assets/images/testimonials/Olga-P.png",


    "user-4": "Rashad Aliyev",
    "comment-4": "Kenan is an exceptional programmer. His skills and approach to his work are praiseworthy. He has the ability to solve even the most complex technical problems quickly and efficiently. Collaborating with him has been an enriching experience.",
    "stars-4": 5,
    "user-4-img": "assets/images/testimonials/Rashad-A.png",


    "user-5": "Leyla Huseynli",
    "comment-5": "Kenan is a highly professional and hardworking individual. His work ethic and problem-solving skills are remarkable. Working with him is always a smooth and productive experience.",
    "stars-5": 5,
    "user-5-img": "assets/images/testimonials/Leyla-H.png",

  },
  az: {
    "title": "Rəylər",
    "user-1": "Sofiya Conson",
    "comment-1": "Kənan əla proqramistdir. Onun iş bacarığı, detallara diqqəti və peşəkarlığı yüksək səviyyədədir. Həmişə ən yaxşı həlləri təqdim etməyə çalışır və onunla işləmək çox xoşdur.",
    "stars-1": 5,
    "user-1-img": "assets/images/testimonials/Sophia-J.png",


    "user-2": "Emili Braun",
    "comment-2": "Kənan problemləri həll etməkdə çox məharətlidir. O, hər zaman keyfiyyətli nəticələr təqdim edir və ona həvalə olunan hər bir layihəni səmərəli və effektiv şəkildə yerinə yetirir. Onun mükəmməlliyə olan sadiqliyi heyranedicidir.",
    "stars-2": 5,
    "user-2-img": "assets/images/testimonials/Emily-B.png",


    "user-3": "Olqa Petrova",
    "comment-3": "Kənanla işləmək çox xoşdur. O, peşəkar, bilikli və operativdir. Onun proqramlaşdırma sahəsindəki biliyi və komanda işinə olan yanaşması təqdirəlayiqdir.",
    "stars-3": 5,
    "user-3-img": "assets/images/testimonials/Olga-P.png",


    "user-4": "Rəşad Əliyev",
    "comment-4": "Kənan çox gözəl proqramistdir. Onun bacarıqları və işinə yanaşması təqdirəlayiqdir. O, ən mürəkkəb texniki problemləri belə tez və səmərəli şəkildə həll edir. Onunla əməkdaşlıq etmək böyük təcrübədir.",
    "stars-4": 5,
    "user-4-img": "assets/images/testimonials/Rashad-A.png",


    "user-5": "Leyla Hüseynli",
    "comment-5": "Kənan peşəkar və çalışqan insandır. Onun iş əxlaqı və problemləri həll etmək bacarığı heyranedicidir. Onunla işləmək hər zaman rahat və səmərəli olur.",
    "stars-5": 5,
    "user-5-img": "assets/images/testimonials/Leyla-H.png",

  }
};



let currentTestimonialsData = testimonials_data[currentState.toLowerCase()]


testimonials.innerHTML =
  `
      <h1>${currentTestimonialsData["title"]}</h1>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="${currentTestimonialsData["user-1-img"]}"
              alt="Anastasiya V."
            />
            <p class="reviewer-name">${currentTestimonialsData["user-1"]}</p>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="desc">
              ${currentTestimonialsData["comment-1"]}
            </div>
          </div>
          <div class="swiper-slide">
            <img
              src="${currentTestimonialsData["user-2-img"]}"
              alt="Anastasiya V."
            />
            <p class="reviewer-name">${currentTestimonialsData["user-2"]}</p>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="desc">
              ${currentTestimonialsData["comment-2"]}
            </div>
          </div>
          <div class="swiper-slide">
            <img
              src="${currentTestimonialsData["user-3-img"]}"
              alt="Anastasiya V."
            />
            <p class="reviewer-name">${currentTestimonialsData["user-3"]}</p>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="desc">
              ${currentTestimonialsData["comment-3"]}
            </div>
          </div>
          <div class="swiper-slide">
            <img
              src="${currentTestimonialsData["user-4-img"]}"
              alt="Anastasiya V."
            />
           <p class="reviewer-name">${currentTestimonialsData["user-4"]}</p>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="desc">
              ${currentTestimonialsData["comment-4"]}
            </div>
          </div>
          <div class="swiper-slide">
            <img
              src="${currentTestimonialsData["user-5-img"]}"
              alt="Anastasiya V."
            />
             <p class="reviewer-name">${currentTestimonialsData["user-5"]}</p>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="desc">
              ${currentTestimonialsData["comment-5"]}
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    `

testimonials.setAttribute("id", "testimonials")


document.body.appendChild(testimonials)
