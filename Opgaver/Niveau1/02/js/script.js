document.addEventListener('DOMContentLoaded', () => {
	const beregnForhold = (a, b) => {
		if (b == 0) return null

		return a / b
	}

	const resultat = beregnForhold(4, 3)
	console.log(resultat)
})
