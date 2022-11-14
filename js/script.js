const menu = document.querySelector('nav')

function activeScroll() {
    menu.classList.toggle('active', scrollY > 115)
}

window.addEventListener('scroll', activeScroll)
