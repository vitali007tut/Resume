const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')

sun.addEventListener('click', changeColor1)

function changeColor1() {
    document.body.style.background = ''
    document.body.style.color = ''
    moon.style.opacity = 1
    sun.style.opacity = 0
}

moon.addEventListener('click', changeColor2)

function changeColor2() {
    document.body.style.background = 'radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%)'
    document.body.style.color = 'white'
    sun.style.opacity = 1
    moon.style.opacity = 0   
}