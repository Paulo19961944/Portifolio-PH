// Entradas HTML
const navbarContent = document.querySelector(".navbar-content");
const menuIcon = document.getElementById("menu-icon");
const navbarBlock = document.querySelector(".navbar-block");

// Adiciona evento ao clicar no menu
menuIcon.addEventListener("click", () => {
    navbarBlock.style.display = "flex";
    navbarBlock.style.flexDirection = "column";
    navbarContent.style.alignItems = "center";
    menuIcon.style.display = "none"
});

// Adiciona Evento ao Clicar fora do Menu
document.addEventListener("click", (event) => {
    const isInsideMenu = navbarBlock.contains(event.target);
    const isClickedOnMenu = navbarContent.contains(event.target);

    if (!isInsideMenu && !isClickedOnMenu) {
        navbarBlock.style.display = "";
        navbarBlock.style.flexDirection = "";
        navbarContent.style.alignItems = "";
        menuIcon.style.display = ""
    }
});