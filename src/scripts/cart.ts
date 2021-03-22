import { GameData, games } from './data';

let cart: GameData[] = []
const gamesListElement = document.querySelector('.js-games')
const dropdown = document.querySelector('.js-dropdown')
const priceElement = document.querySelector('.js-price')
const countElements = document.querySelectorAll('.js-count');
const clearButton = document.querySelector('.js-clear')
const cartButton = document.querySelector('.js-cart-button')


const loadGames = () => {
    const createPromotionTag = (promotion: number|null) => promotion ? `<div class="game__tag game__tag--promotion">-${promotion}%</div>` : ''
    const createOwnedTag = (isOwned: boolean) => isOwned ? `<div class="game__tag game__tag--owned">Owned</div>` : ''
    const createCartTag = (isCart: boolean) => isCart ? `<div class="game__tag game__tag--cart">In cart</div>` : ''

    const createItem = (id: number|string, img:string, title: string, price: number, promotionValue:number|null, isCart:boolean, isOwned: boolean): HTMLLIElement => {
    const item = document.createElement('li')
        item.classList.add('game')
        item.innerHTML =`
            <div class="game__image">
            <img src="${img}" alt="${title}">
            </div>
            <div class="game__info js-info">
            <div class="game__title">${title}</div>
            ${createOwnedTag(isOwned)}
            ${createCartTag(isCart)}
            <button class="game__tag game__tag--price" data-id=${id}>$${price}</button>
            ${createPromotionTag(promotionValue)}
            </div>`
    return item
    }

    for (const game of games) {
        if(game.isCart) {
            cart.push(game) 
        }
        gamesListElement?.appendChild(createItem(game.id, game.img, game.title, game.price, game.promotionValue, game.isCart, game.isOwned));
    }
}
loadGames()

const clearCart = (isRerender: boolean) => {
    if (!isRerender) {
        cart = []
        Array.from(document.querySelectorAll('.game__tag--cart')).forEach(tag => tag.remove())
        setCount(0)
        setPrice([])
    }
    if (dropdown){
        const gamesInCart = Array.from(dropdown.querySelectorAll('.cart-dropdown__item'))
        gamesInCart.forEach(game => dropdown.removeChild(game))
    }
   
}

const addItemToCart = (event: any) => {
    const priceButton = event.target as HTMLButtonElement

    if( priceButton.classList.contains('game__tag--price')){
        const cartTag = document.createElement('div')
        const title = priceButton.closest('.game__title')
        cartTag.textContent = 'in cart'
        cartTag.classList.add('game__tag', 'game__tag--cart')
        priceButton.closest('.js-info')?.prepend(cartTag)
        const addedGame = games.find(game => game.id === Number(priceButton.getAttribute('data-id')))
        if (addedGame) {
            cart.push(addedGame)
        }
        clearCart(true)
        renderCartElements(cart)
    }

   
  }

const removeItemFromCart = (event: any) => {
    const removeButton = event.target as HTMLButtonElement
    const id = Number(removeButton.getAttribute('data-id'))
    if( removeButton.classList.contains('js-remove')){
        cart = cart.filter(game => game.id !== id)
        const cartTagHolder = document.querySelector(`.game__tag[data-id="${id}"]`)?.parentElement
        const cartTag = cartTagHolder?.querySelector('.game__tag--cart')
        console.log(cartTagHolder)
        if (cartTag){
            cartTagHolder?.removeChild(cartTag)
        }
        clearCart(true)
        renderCartElements(cart)
    } 
}

gamesListElement?.addEventListener('click', (event) => addItemToCart(event))

const renderCartElement = (game: GameData): Node => {
    const item = document.createElement('div');
    item.classList.add('cart-dropdown__item');
    item.innerHTML =`
    <img class="cart-dropdown__image" src="${game.img}" alt="assasin">
    <div class="cart-dropdown__title">${game.title}</div>
    <div class="cart-dropdown__item-price">$${game.price}</div>
    <span class="cart-dropdown__remove js-remove" data-id=${game.id}>Remove</span>`
    return item
}

const setPrice = (prices: GameData[]) => {
    const sum = prices.reduce((acc,cur) =>cur.price + acc ,0)
    if(priceElement){
        priceElement.textContent = '$' + sum
    }
}

const setCount = (count: number) => {
    countElements.forEach(element => element.textContent = String(count))
}

const renderCartElements = (cart: GameData[]) => {

    cart.forEach(game => {
     return dropdown?.appendChild(renderCartElement(game))
    })
    setPrice(cart)
    setCount(cart.length)
    
}
renderCartElements(cart)

clearButton?.addEventListener('click', () => clearCart(false))

const toggleCart = () => {
    dropdown?.classList.toggle('cart-dropdown--active')
}

cartButton?.addEventListener('click', toggleCart)
dropdown?.addEventListener('click', removeItemFromCart)