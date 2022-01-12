const nav = document.querySelectorAll(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    }
    else {
        nav.classList.remove("active");
    }

}