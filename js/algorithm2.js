const $buttonMenu = document.querySelector(".logo__menu");
const $listElements = document.querySelectorAll(".list__nav");






$buttonMenu.addEventListener('click', (e) => {
    $buttonMenu.classList.toggle("animation__button");

    $listElements.forEach(item => {
        item.classList.toggle("new");
        
    })
})