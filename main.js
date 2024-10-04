let menu = document.getElementById("menu")
let openMenu = document.getElementById("open-menu")
openMenu.addEventListener("click", () =>
{
    menu.classList.toggle("hidden")

    if (menu.classList.contains("hidden")) {
        openMenu.classList = "fa-solid fa-bars text-2xl md:hidden cursor-pointer"
    } else {
        openMenu.classList = "fa-solid fa-xmark text-2xl md:hidden cursor-pointer"

    }
}
)
