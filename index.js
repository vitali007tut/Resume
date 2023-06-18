const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const container = document.querySelector('.container');
const links = document.querySelectorAll('a');
const githubIco = document.querySelector('.github-account');
const sectionTitle = document.querySelectorAll('.section-title');


sun.addEventListener('click', changeColor1)

function changeColor1() {
    container.classList.remove('container-dark');
    links.forEach(e => e.classList.remove('dark-mode'));
    githubIco.classList.remove('dark-mode');
    sectionTitle.forEach(element => element.classList.remove('dark-mode'));
    document.body.style.color = '';
    sun.classList.remove('dark-mode')
    moon.classList.remove('dark-mode')
}

moon.addEventListener('click', changeColor2)

function changeColor2() {
    container.classList.add('container-dark');
    links.forEach(e => e.classList.add('dark-mode'));
    githubIco.classList.add('dark-mode');
    document.body.style.color = 'white';
    sectionTitle.forEach(element => element.classList.add('dark-mode'));
    sun.classList.add('dark-mode')
    moon.classList.add('dark-mode')
}