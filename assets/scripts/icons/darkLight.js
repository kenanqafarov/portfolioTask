const themeBTN = document.getElementById("darkLight");
const themeBTN_Mobile = document.getElementById("darkLight-mobile");
let currentTheme = localStorage.getItem("theme") || "dark";

const applyTheme = (theme) => {
    if (theme === "dark") {
        document.body.classList.remove("light");
        themeBTN.classList.replace("fa-sun", "fa-moon");
        themeBTN_Mobile.classList.replace("fa-sun", "fa-moon");
    } else {
        document.body.classList.add("light");
        themeBTN.classList.replace("fa-moon", "fa-sun");
        themeBTN_Mobile.classList.replace("fa-moon", "fa-sun");

    }
    localStorage.setItem("theme", theme);
};

applyTheme(currentTheme);

themeBTN.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
});

themeBTN_Mobile.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
});
