const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.remove("d-none");
    } else {
        backToTopBtn.classList.add("d-none");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});