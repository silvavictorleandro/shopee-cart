import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWishList = []

console.log("Welcome to the Shopee cart!")

const item1 = await createItem("HotWheels Ferrari", 20.99, 1)
const item2 = await createItem("HotWheels Lamborghini", 39.99, 3)

//criando dois itens
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

//mostrando itens do carrinho
await cartService.displayCart(myCart)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)

//calculando total do carrinho
// await cartService.calculateTotal(myCart)

//deletando item do carrinho
// await cartService.deleteItem(myCart, item2.name)

// console.log(item1.subTotal())
// console.log(item2)