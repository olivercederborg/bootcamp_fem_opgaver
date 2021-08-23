document.addEventListener('DOMContentLoaded', () => {
	const skjulElementViaCssSelector = (cssSelector) => {
		const selectorArray = cssSelector.split(' ')
		selectorArray.forEach((selector) => {
			document.querySelector(selector).style.display = 'none'
		})
	}

	skjulElementViaCssSelector('.my-button .my-heading')
})
