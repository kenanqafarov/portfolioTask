
let customCursor = document.createElement("div")
customCursor.classList.add("custom-cursor")


document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    customCursor.style.transform = `translate(${x}px, ${y}px)`;
});


document.body.appendChild(customCursor)

