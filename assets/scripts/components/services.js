let service_data = {

  en: {
    "title": "Services",
    services: [
      {
        "service": "UX/UI Design",
        "desc": "Crafting user-friendly and visually appealing interfaces that enhance the overall user experience. I focus on creating intuitive designs that simplify user journeys and improve engagement. Every design is tailored to meet business goals while ensuring user satisfaction.",
      },
      {

        "service": "IT Project Management",
        "desc": "Managing IT projects efficiently from initiation to delivery, ensuring timelines and budgets are met. I coordinate teams, identify risks, and implement solutions to keep projects on track. My goal is to deliver high-quality outcomes while optimizing resources.",
      },
      {
        "service": "Startup Consulting",
        "desc": "Helping startups transform their ideas into market-ready products by providing strategic advice and practical solutions. I assist with business planning, product validation, and scaling strategies. My approach is tailored to each startup's unique challenges and growth potential.",
      },
      {
        "service": "Product Development",
        "desc": "Developing functional, scalable, and user-focused digital products that align with business needs. I work closely with clients to understand their vision and translate it into a working solution. From concept to launch, I ensure the product meets both user expectations and market demands."
      }

    ]
  },
  az: {
    "title": "Xidmətlər",
    services: [
      {
        "service": "UX/UI Dizayn",
        "desc": "İstifadəçilər üçün rahat və vizual baxımdan cəlbedici interfeyslər hazırlayıram ki, bu da ümumi istifadəçi təcrübəsini yaxşılaşdırır. Məqsədim, mürəkkəb prosesləri sadələşdirərək intuitiv dizaynlar yaratmaq və istifadəçilərin platformada rahat hərəkət etməsini təmin etməkdir. Hər bir dizayn həm biznes məqsədlərinə, həm də istifadəçi məmnuniyyətinə uyğunlaşdırılır.",
      },
      {
        "service": "IT Layihə İdarəetməsi",
        "desc": "IT layihələrinin başlanğıcından tamamlanmasına qədər olan bütün mərhələlərdə səmərəli idarəetmə təmin edirəm. Komandaların işini koordinasiya edir, riskləri vaxtında müəyyənləşdirir və optimal həllər tətbiq edərək layihələrin vaxtında və büdcəyə uyğun icrasına nail oluram. Məqsədim, resurslardan düzgün istifadə edərək yüksək keyfiyyətli nəticələr əldə etməkdir.",
      },
      {

        "service": "Startup Məsləhətçiliyi",
        "desc": "Startup-lara öz ideyalarını bazara çıxarmaqda və uğurlu məhsula çevirməkdə dəstək oluram. Biznes planlamasından tutmuş məhsulun yoxlanılmasına və miqyaslandırılmasına qədər hər mərhələdə strateji məsləhətlər və praktik həllər təqdim edirəm. Hər startup-ın spesifik ehtiyaclarını nəzərə alaraq inkişaf strategiyasını fərdi şəkildə hazırlayıram.",
      },
      {
        "service": "Məhsul İnkişafı",
        "desc": "Biznes ehtiyaclarına uyğun funksional, miqyaslana bilən və istifadəçiyə yönəlik rəqəmsal məhsullar hazırlayıram. Müştərilərin ideyalarını dərindən anlayır, onları praktiki həllərə çevirərək bazara uyğun məhsullar hazırlayıram. Məhsulun konseptindən tutmuş tam istifadəyə verilməsinə qədər olan bütün prosesləri diqqətlə idarə edirəm ki, həm istifadəçi gözləntiləri, həm də bazar tələbləri qarşılanmış olsun."
      }
    ]
  }
}

let currentServiceData = service_data[currentLanguageState.toLocaleLowerCase()];

let services = document.createElement("div");
services.classList.add("services");

services.innerHTML = `
  <h1 data-aos="fade-right">${currentServiceData["title"]}</h1>
  <div class="my-services" data-aos="fade-up">
    <div class="row">
      <div class="service">
        <p class="title">${currentServiceData.services[0].service}</p>
        <p class="desc">${currentServiceData.services[0].desc}</p>
      </div>
      <div class="service">
        <p class="title">${currentServiceData.services[1].service}</p>
        <p class="desc">${currentServiceData.services[1].desc}</p>
      </div>
    </div>
    <div class="row">
      <div class="service">
        <p class="title">${currentServiceData.services[2].service}</p>
        <p class="desc">${currentServiceData.services[2].desc}</p>
      </div>
      <div class="service">
        <p class="title">${currentServiceData.services[3].service}</p>
        <p class="desc">${currentServiceData.services[3].desc}</p>
      </div>
    </div>
  </div>
`;

services.setAttribute("id", "services");

document.body.appendChild(services);
