const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')

sun.addEventListener('click', changeColor1)

function changeColor1() {
    document.body.style.background = ''
    document.body.style.color = ''
    moon.style.opacity = 1
    moon.style.width = '30px'
    sun.style.opacity = 0
    sun.style.width = 0
}

moon.addEventListener('click', changeColor2)

function changeColor2() {
    document.body.style.background = 'linear-gradient(#5B483A, #262425)'
    document.body.style.color = 'white'
    sun.style.opacity = 1
    sun.style.width = '30px'
    moon.style.opacity = 0   
    moon.style.width = 0
}