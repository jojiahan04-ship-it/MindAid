console.log("MindAid page loaded successfully");

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    if (!navLinks) {
        console.warn("toggleMenu: .nav-links not found");
        return;
    }

    navLinks.classList.toggle("show");
}

window.addEventListener("error", (e) => {
    console.error("JS Error:", e.message);
});
