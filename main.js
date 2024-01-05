document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
    
        scroll({
        top: offsetTop,
        behavior: "smooth",
        });
    });
});