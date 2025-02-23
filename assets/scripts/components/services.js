let service_data = {
  en: {
    title: "Services",
    services: [
      {
        service: "UX/UI Design",
        desc: "Crafting user-friendly and visually appealing interfaces that enhance the overall user experience. I focus on creating intuitive designs that simplify user journeys and improve engagement. Every design is tailored to meet business goals while ensuring user satisfaction. I conduct in-depth user research, create interactive prototypes, and continuously iterate based on feedback. The result is a design that not only looks good but also functions seamlessly across devices and platforms.",
      },
      {
        service: "IT Project Management",
        desc: "Managing IT projects efficiently from initiation to delivery, ensuring timelines and budgets are met. I coordinate teams, identify risks, and implement solutions to keep projects on track. My goal is to deliver high-quality outcomes while optimizing resources. I also facilitate communication between stakeholders, provide regular progress updates, and use agile methodologies to adapt quickly to any changes. By fostering collaboration and transparency, I ensure projects are delivered successfully within scope.",
      },
      {
        service: "Startup Consulting",
        desc: "Helping startups transform their ideas into market-ready products by providing strategic advice and practical solutions. I assist with business planning, product validation, and scaling strategies. My approach is tailored to each startup's unique challenges and growth potential. From market research to identifying the right target audience, I guide startups through every critical phase. Additionally, I offer mentorship on fundraising, investor relations, and long-term growth planning, ensuring sustainable success.",
      },
      {
        service: "Product Development",
        desc: "Developing functional, scalable, and user-focused digital products that align with business needs. I work closely with clients to understand their vision and translate it into a working solution. From concept to launch, I ensure the product meets both user expectations and market demands. My development process involves thorough testing, user feedback integration, and post-launch support to keep the product competitive. Whether it's a mobile app or a web platform, I focus on delivering seamless performance and reliability.",
      }
    ],
  },
  az: {
    title: "Xidmətlər",
    services: [
      {
        service: "UX/UI Dizayn",
        desc: "İstifadəçilər üçün rahat və vizual baxımdan cəlbedici interfeyslər hazırlayıram ki, bu da ümumi istifadəçi təcrübəsini yaxşılaşdırır. Hər bir dizayn istifadəçilərin ehtiyaclarına uyğun şəkildə hazırlanır və onların platformada asanlıqla hərəkət etməsini təmin edir. Dərin istifadəçi araşdırmaları aparır, interaktiv prototiplər hazırlayıram və geribildirimlər əsasında davamlı təkmilləşdirmələr edirəm. Nəticədə, hər bir dizayn həm estetik, həm də funksionallıq baxımından yüksək səviyyədə olur.",
      },
      {
        service: "IT Layihə İdarəetməsi",
        desc: "IT layihələrinin başlanğıcından tamamlanmasına qədər bütün mərhələləri səmərəli şəkildə idarə edirəm. Komanda işini koordinasiya edir, potensial riskləri vaxtında müəyyənləşdirir və müvafiq həllər təqdim edərək layihənin uğurla başa çatdırılmasını təmin edirəm. Agile metodologiyalarından istifadə edərək layihə proseslərinə çeviklik əlavə edirəm. Eyni zamanda, maraqlı tərəflərlə fasiləsiz əlaqə saxlayır və layihənin gedişi ilə bağlı müntəzəm hesabatlar verirəm.",
      },
      {
        service: "Startup Məsləhətçiliyi",
        desc: "Startup-lara ideyalarını bazara uyğun məhsullara çevirməkdə kömək edirəm. Biznes planlaşdırmasından başlayaraq, məhsulun düzgün təsdiqlənməsi və miqyaslandırılması proseslərinə qədər hər mərhələdə dəstək verirəm. Hər bir startup-ın spesifik ehtiyaclarına uyğun fərdi strategiyalar hazırlayıram. Bundan əlavə, investorlarla əlaqələrin qurulması, maliyyələşmə imkanlarının dəyərləndirilməsi və uzunmüddətli böyümə strategiyaları üzrə məsləhətlər təqdim edirəm.",
      },
      {
        service: "Məhsul İnkişafı",
        desc: "Biznes ehtiyaclarına cavab verən funksional və miqyaslana bilən rəqəmsal məhsullar hazırlayıram. Müştərinin ideyalarını dərindən anlayaraq, onları praktik həllərə çevirirəm və bazarın tələblərinə uyğun məhsullar hazırlayıram. Proses konsepsiyadan başlayaraq istifadəyə verilməyə qədər davam edir. Hər mərhələdə məhsulun keyfiyyəti yoxlanılır, istifadəçi rəyləri nəzərə alınır və məhsul son istifadəçi üçün ən ideal formaya gətirilir.",
      }
    ],
  }
};


let currentServiceData = service_data[currentLanguageState.toLocaleLowerCase()];

let services = document.createElement("div");
services.classList.add("services");
services.innerHTML = `
  <h1 data-aos="fade-right">${currentServiceData.title}</h1>
  <div class="my-services" data-aos="fade-up">
      ${currentServiceData.services
    .map(
      (item) => `
        <div class="service">
          <p class="title">${item.service}</p>
          <p class="desc">${item.desc}</p>
        </div>
      `
    )
  }
  </div>
`;

services.setAttribute("id", "services");
document.body.appendChild(services);
