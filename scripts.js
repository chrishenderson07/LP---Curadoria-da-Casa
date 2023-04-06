// const buyBox = document.querySelector('#buyBox')
// const content = document.querySelector('section#content')

// buyBox.style.display = 'none'
// content.style.display = 'none'

// setTimeout(() => {
// 	buyBox.style.display = 'block'
// 	content.style.display = 'block'
// }, 5000)

const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach((accordion) => {
	const title = accordion.querySelector('.accordion-title')

	title.addEventListener('click', () => {
		accordion.classList.toggle('open')
	})
})
