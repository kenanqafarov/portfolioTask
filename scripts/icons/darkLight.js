const themeBTN = document.getElementById("darkLight");
let currentTheme = localStorage.getItem("theme") || "dark";

const applyTheme = (theme) => {
    if (theme === "dark") {
        document.body.classList.remove("dark");
        themeBTN.classList.replace("fa-sun", "fa-moon");
    } else {
        document.body.classList.add("dark");
        themeBTN.classList.replace("fa-moon", "fa-sun");
    }
    localStorage.setItem("theme", theme);
};

applyTheme(currentTheme);

themeBTN.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
});
