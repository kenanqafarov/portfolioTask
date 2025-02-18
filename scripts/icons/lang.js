let lang_btn = document.querySelector(".lang-btn")
let lang_btn_mobile = document.querySelector(".lang-btn-mobile")

lang_btn.innerHTML = localStorage.getItem("lang") || "EN"
lang_btn.addEventListener("click", () => {
    if (lang_btn.innerHTML === "AZ") {
        lang_btn.innerHTML = "EN"
        localStorage.setItem("lang", "EN")
    } else {
        lang_btn.innerHTML = "AZ"
        localStorage.setItem("lang", "AZ")
    }
    window.location.reload()
})
lang_btn_mobile.innerHTML = localStorage.getItem("lang") || "EN"
lang_btn_mobile.addEventListener("click", () => {
    if (lang_btn.innerHTML === "AZ") {
        lang_btn.innerHTML = "EN"
        localStorage.setItem("lang", "EN")
    } else {
        lang_btn.innerHTML = "AZ"
        localStorage.setItem("lang", "AZ")
    }
    window.location.reload()
})
