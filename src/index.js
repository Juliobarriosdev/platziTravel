const htmlElement = document.querySelector('html')
const toggleButton = document.querySelector('#toggle')
const toggleButtonSm = document.querySelector('#toggle-sm')

const toggleDarkMode = () => htmlElement.classList.toggle('dark')

toggleButton.addEventListener('click', toggleDarkMode)
toggleButtonSm.addEventListener('click', toggleDarkMode)

//Scroll

const containerScroll = document.querySelector('#container-cards')
const leftButton = document.querySelector('#leftButton')
const rightButton = document.querySelector('#rightButton')

const addScroll = (container, scrollLeft) => {
  container.scrollBy({
    top: 0,
    left: scrollLeft,
    behavior: 'smooth'
  })
}

leftButton.addEventListener('click', () => addScroll(containerScroll, -55))
rightButton.addEventListener('click', () => addScroll(containerScroll, 55))