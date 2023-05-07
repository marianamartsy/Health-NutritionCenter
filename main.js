const nav = document.querySelector('.navbar-collapse')
const footerYear = document.querySelector('.footer__year')

document.addEventListener('click', () => {
	if (nav.classList.contains('show')) {
		nav.classList.remove('show')
	}
})

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

currentYear()
