document.addEventListener('DOMContentLoaded', () => {
	const buttonElement = document.querySelector('#my-button')
	const colorsArray = ['#eee', '#7f7']
	let colorCounter = 0

	buttonElement.addEventListener('click', () => {
		colorCounter++

		if (colorCounter === colorsArray.length) {
			colorCounter = 0
		}

		buttonElement.style.backgroundColor = colorsArray[colorCounter]
	})
})
