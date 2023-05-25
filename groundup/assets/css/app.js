// This function is to activeate the opening and closing of the navbar
const toggle = document.getElementById('toggle')
const nav =document.getElementById('nav')

toggle.addEventListener('click', () =>{
    nav.classList.toggle('active')
})
// This function is to change Panel.active on mouse hover
const panels = document.querySelectorAll('.panel');
panels.forEach((panels)=>{
    panels.addEventListener('mouseenter', () =>{
        removeActiveClass()
        panels.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panels =>{
        panels.classList.remove('active')
    })
}
// overlay menu on hamburger click
const hamburgerButton = document.getElementById("toggle");
const overlay = document.getElementById("overlay");

hamburgerButton.addEventListener("click", function() {
  overlay.style.display = "block"; // Show the overlay

  if (overlay.style.display === "block") {
    document.documentElement.style.height = "100%"; // Make the overlay fullscreen
  } else {
    document.documentElement.style.height = ""; // Revert to default height when overlay is hidden
  }
});
// Code for Carousel Food Menu
const body = document.body
const slides = document.querySelectorAll('.carousel-item');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
}
setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide => slide.classList.remove
        ('active'))


        slides[activeSlide].classList.add('active')
    }