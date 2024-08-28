window.onload = () => {
    document.querySelector(".menuMobile").addEventListener("click", () => {
        document.querySelector(".menu nav ul").classList.toggle("menuAberto");
    });
};
