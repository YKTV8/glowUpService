// This function is to activeate the opening and closing of the navbar
const toggle = document.getElementById('toggle')
const nav =document.getElementById('nav')

toggle.addEventListener('click', () =>{
    nav.classList.toggle('active')
})
// This function is to change Panel.active on mouse hover
const panels = document.querySelectorAll('.panel');
panels.forEach((panels)=>{
    panels.addEventListener('mouseover', () =>{
        removeActiveClass()
        panels.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panels =>{
        panels.classList.remove('active')
    })
}