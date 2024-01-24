const menu = document.querySelector('.menu-mobile')

function showMenu(){
    menu.style.opacity = "1"
    menu.style.zIndex = "10"
    menu.style.left = "0"
}
function closeMenu(){
    menu.style.opacity = "0"
    menu.style.zIndex = "-1"
    menu.style.left = "100vw"
}