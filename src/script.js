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

// SLIDER CONFIG

const containerSlider = document.querySelector(".slider-wrapper")
const prevButton = document.getElementById("prev-button")
const nextButton = document.getElementById("next-button")

let currentSlider = 0

containerSlider.children[currentSlider].style.opacity = '1'


function prevSlider(){
    if(currentSlider > 0){
        for(let i = 0;i < containerSlider.children.length; i++){
            if(i == currentSlider){
                currentSlider--
                containerSlider.children
                [currentSlider].style.opacity = '1'
            }
            containerSlider.children[i].style.opacity = '0'
        }
    } else if(currentSlider == 0){
        containerSlider.children[0].style.opacity = '0'
        currentSlider = (containerSlider.children.length-1)
        containerSlider.children[currentSlider].style.opacity = '1'
    }
}
function nextSlider(){
    if(currentSlider < (containerSlider.children.length-1)){
        containerSlider.children[currentSlider].style.opacity = '0'
        currentSlider++
        containerSlider.children[currentSlider].style.opacity = '1'
    } else if(currentSlider == (containerSlider.children.length-1)){
        containerSlider.children[currentSlider].style.opacity = '0'
        currentSlider = 0
        console.log(currentSlider)
        containerSlider.children[currentSlider].style.opacity = '1'
    }
}

setInterval(nextSlider, 10000)

window.onload = function(){
    heightSliderContainer()
}
window.onresize = function(){
    heightSliderContainer()
}
function heightSliderContainer(){
    let img = document.getElementById('imageId'); 
    //or however you get a handle to the IMG
    let width = img.clientWidth;
    let height = img.clientHeight;

    console.log(width)
    console.log(height)

    const divSlider = document.querySelector(".slider-container")
    const divSliderWrapper = document.querySelector(".slider-wrapper")

    divSlider.style.height = height + 'px';
    divSliderWrapper.style.height = height + 'px';

    console.log(divSlider.style.height)
    console.log(divSliderWrapper.style.height)
}



