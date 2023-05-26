const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const container = document.querySelector('.container');
const links = document.querySelectorAll('a');
const githubIco = document.querySelector('.github-account')


sun.addEventListener('click', changeColor1)

function changeColor1() {
    container.classList.remove('container-dark');
    links.forEach(e => e.classList.remove('dark-mode'));
    githubIco.classList.remove('dark-mode');
    document.body.style.color = ''
    moon.style.opacity = 1
    moon.style.width = '30px'
    sun.style.opacity = 0
    sun.style.width = 0
}

moon.addEventListener('click', changeColor2)

function changeColor2() {
    container.classList.add('container-dark');
    links.forEach(e => e.classList.add('dark-mode'));
    githubIco.classList.add('dark-mode');
    document.body.style.color = 'white'
    sun.style.opacity = 1
    sun.style.width = '30px'
    moon.style.opacity = 0   
    moon.style.width = 0
}