document.addEventListener('DOMContentLoaded', () => {
	const products = [
		{
			name: 'Røde Sko',
			imgPath: 'img/1.jpg',
			imgAltText: 'Fede røde sko',
			price: 595
		},
		{
			name: 'Hovedtelefoner',
			imgPath: 'img/2.jpg',
			imgAltText: '',
			price: 895
		},
		{
			name: 'Smart Watch',
			imgPath: 'img/3.jpg',
			imgAltText: '',
			price: 1245
		}
	]

	const productsWrapperElement = document.querySelector('#products-wrapper')

	const createElement = (tag, options) => {
		return Object.assign(document.createElement(tag), options)
	}

	products.forEach((product) => {
		let totalPrice = 0 + 'kr'
		let itemCounter = 0

		const cartItem = createElement('li', {
			className: 'Cart-item'
		})

		const cartItemImg = createElement('img', {
			className: 'Cart-item__img',
			src: product.imgPath
		})

		const cartItemTitle = createElement('h3', {
			className: 'Cart-item__title',
			textContent: product.name
		})

		const itemCounterSection = createElement('section', {
			className: 'Item-counter'
		})

		const counterButtonDecrease = createElement('button', {
			className: 'Item-counter__button',
			textContent: '-'
		})

		const itemCounterText = createElement('p', {
			className: 'Item-counter__counter-text',
			textContent: itemCounter
		})

		const counterButtonIncrease = createElement('button', {
			className: 'Item-counter__button',
			textContent: '+'
		})

		const cartItemPriceTotal = createElement('p', {
			className: 'Cart-item__price',
			textContent: totalPrice
		})

		cartItem.appendChild(cartItemImg)
		cartItem.appendChild(cartItemTitle)
		itemCounterSection.appendChild(counterButtonDecrease)
		itemCounterSection.appendChild(itemCounterText)
		itemCounterSection.appendChild(counterButtonIncrease)
		cartItem.appendChild(itemCounterSection)
		cartItem.appendChild(cartItemPriceTotal)
		productsWrapperElement.appendChild(cartItem)

		counterButtonIncrease.addEventListener('click', () => {
			itemCounter++
			itemCounterText.textContent = itemCounter
			cartItemPriceTotal.textContent = product.price * itemCounter + 'kr'
		})

		counterButtonDecrease.addEventListener('click', () => {
			if (itemCounter > 0) itemCounter--
			itemCounterText.textContent = itemCounter
			cartItemPriceTotal.textContent = product.price * itemCounter + 'kr'
		})
	})
})
