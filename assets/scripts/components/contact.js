let contact = document.createElement("div")
contact.classList.add("contact")

let contact_data = {
  en: {
    "title": "Contact",
    "span": "Me",
    "name-input": "Full Name",
    "email-input": "Email",
    "phone-input": "Phone number",
    "subject-input": "Subject",
    "message-input": "Your Message",
    "message-btn": "Send Message"
  }, az: {
    "title": "Mənimlə",
    "span": "Əlaqə",
    "name-input": "Ad, soyadınız",
    "email-input": "Email addressiniz",
    "phone-input": "Telefon nömrəniz",
    "subject-input": "Mövzu",
    "message-input": "Mesajınızı daxil edin",
    "message-btn": "Mesaj göndərin"

  }
}




let currentContactData = contact_data[currentLanguageState.toLowerCase()]

contact.innerHTML =
  `
  <h1 data-aos="fade-down">${currentContactData["title"]} <span>${currentContactData["span"]} </span></h1>
  <div class="map" data-aos="fade-up">
    <iframe
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      id="gmap_canvas"
      src="https://maps.google.com/maps?width=520&height=400&hl=en&q=609%20C%C9%99f%C9%99r%20Cabbarl%C4%B1%20k%C3%BC%C3%A7%C9%99si,%20Bak%C4%B1%20Baku+(%F0%9F%92%BC%F0%9F%93%8D)&t=p&z=16&ie=UTF8&iwloc=B&output=embed"
    ></iframe>
    <div class="layer"></div>
  </div>
  <form data-aos="fade-up" action="" class="contact-me">
    <div class="leftPart">
      <input type="text" placeholder="${currentContactData["name-input"]} " required />
      <input type="email" placeholder="${currentContactData["email-input"]} " required />
      <input type="number" placeholder="${currentContactData["phone-input"]} " minlength="10" required />
      <input type="text" placeholder="${currentContactData["subject-input"]} " required />
    </div>
    <div class="rightPart">
      <textarea type="text" placeholder="${currentContactData["message-input"]} " required></textarea>
      <button  type="submit">${currentContactData["message-btn"]}  </button>
    </div>
  </form>
`
contact.setAttribute("id", "contact")


document.body.appendChild(contact)

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  Swal.fire({
    title: currentLanguageState === "EN" ? "Good job!👍" : "Əlasınız!👍",
    text: currentLanguageState === "EN" ? "You successfully sent the message!" : "Uğurla mesajı göndərdiniz!",
    icon: "success"
  });
  form.reset()
});


