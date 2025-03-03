import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";
const mycart = [];

const item1 = await createItem("hotwheels Fusca", 20.99, 3);
const item2 = await createItem("hotwheels Corsa", 30.99, 3);

await cartService.addItem(mycart, item1);
await cartService.addItem(mycart, item2);

//remove item é preciso passar o item desejado, ele seja removido uma vez a cada chamada da função;
await cartService.removeItem(mycart, item2);
await cartService.removeItem(mycart, item2);

//Delete é preciso passar o name do item que deseja remover;
await cartService.deleteItem(mycart, item1.name);

await cartService.displaycart(mycart);

//await cartService.deleteItem(mycart, item1.name);
//await cartService.deleteItem(mycart, item2.name);

console.log("Shopee Cart!");
