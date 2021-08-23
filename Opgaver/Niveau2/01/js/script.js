document.addEventListener('DOMContentLoaded', () => {
	const buttonsWrapper = document.querySelector('#buttons')

	buttonsWrapper.addEventListener('click', (e) => {
		for (let element of buttonsWrapper.children) {
			element.style.backgroundColor = '#eee'
		}

		if (e.target.localName === 'button') {
			e.target.style.backgroundColor = 'pink'
		}
	})
})
