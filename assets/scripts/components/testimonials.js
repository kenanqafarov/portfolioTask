let testimonials = document.createElement("div");
testimonials.classList.add("testimonials");

testimonials.setAttribute("id", "testimonials");

let testimonials_data = {
  en: {
    title: "Testimonials",
    users: [
      {
        user: "Sophia Johnson",
        comment: "Kenan is an amazing programmer...",
        stars: 5,
        userImg: "assets/images/testimonials/Sophia-J.png",
      },
      {
        user: "Emily Brown",
        comment: "Kenan's problem-solving abilities are outstanding...",
        stars: 5,
        userImg: "assets/images/testimonials/Emily-B.png",
      },
      {
        user: "Olga Petrova",
        comment: "Working with Kenan has been a pleasure...",
        stars: 5,
        userImg: "assets/images/testimonials/Olga-P.png",
      },
      {
        user: "Rashad Aliyev",
        comment: "Kenan is an exceptional programmer...",
        stars: 5,
        userImg: "assets/images/testimonials/Rashad-A.png",
      },
      {
        user: "Leyla Huseynli",
        comment: "Kenan is a highly professional and hardworking individual...",
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
        comment: "Kənan əla proqramistdir...",
        stars: 5,
        userImg: "assets/images/testimonials/Sophia-J.png",
      },
      {
        user: "Emili Braun",
        comment: "Kənan problemləri həll etməkdə çox məharətlidir...",
        stars: 5,
        userImg: "assets/images/testimonials/Emily-B.png",
      },
      {
        user: "Olqa Petrova",
        comment: "Kənanla işləmək çox xoşdur...",
        stars: 5,
        userImg: "assets/images/testimonials/Olga-P.png",
      },
      {
        user: "Rəşad Əliyev",
        comment: "Kənan çox gözəl proqramistdir...",
        stars: 5,
        userImg: "assets/images/testimonials/Rashad-A.png",
      },
      {
        user: "Leyla Hüseynli",
        comment: "Kənan peşəkar və çalışqan insandır...",
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
          .join('')}
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
