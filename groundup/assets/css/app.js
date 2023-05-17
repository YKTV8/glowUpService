// This function is to activeate the opening and closing of the navbar
const toggle = document.getElementById('toggle')
const nav =document.getElementById('nav')

toggle.addEventListener('click', () =>{
    nav.classList.toggle('active')
})