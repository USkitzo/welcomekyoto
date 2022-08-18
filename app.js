const btnMenu = document.querySelector(".logo-menu");
const menu = document.querySelector(".list-nav");

btnMenu.addEventListener("click", () =>{
    menu.classList.toggle("active")
})

const allList = document.querySelectorAll(".item-nav");
allList.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.toggle("active")
    })
})