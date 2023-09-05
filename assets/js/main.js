/*=============== SHOW MENU ===============*/
const navMenu= document.getElementById('nav-menu');
const navClose= document.getElementById('nav-close');
const navToggle= document.getElementById('nav-toggle');

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink= document.querySelectorAll('.nav__link');

const linkAction= ()=>{
    const navMenu= document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader= ()=>{
    const header= document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUpShow= ()=>{
    const scrollUp= document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll-up')
                        : scrollUp.classList.remove('show-scroll-up')
}
window.addEventListener('scroll', scrollUpShow)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const navlinks=document.querySelectorAll('.nav__link');
const sections=document.querySelectorAll('.section')

let currentsection='home';
window.addEventListener('scroll', ()=>{
  sections.forEach(sections=>{
    if(window.scrollY >= sections.offsetTop){
      currentsection= sections.id
    }
  })

  navlinks.forEach(navlinks=>{
      if(navlinks.href.includes(currentsection)){
        document.querySelector('.active').classList.remove('active')
        navlinks.classList.add('active')
      }
  })
})

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr= ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400
    }
)
sr.reveal('.home__data, .list__container, .join__content, .footer__container'),
sr.reveal('.home__img', {origin: 'bottom'}),
sr.reveal('.health__image, .routine__images, .follow__img-3', {origin: 'left'}),
sr.reveal('.health__data, .routine__data, .follow__img-4', {origin: 'right'})
sr.reveal('.follow__data, .follow__content-1 img', {interval: 100})