//Quais ações um carrinho podem fazer;

//Caso de uso;

//->adicionar item
async function addItem(userCart, item) {
  userCart.push(item);
}

//->deletar item;
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}
async function displaycart(userCart) {
  console.log("Shop cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal ${item.subtotal()}}`
    );
  });
}
//->remover item;

async function removeItem(userCart, item) {
  try {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if (indexFound.quantity !== -1) {
      return item.quantity--;
    }
  } catch (error) {
    console.error(`Erro ao remover item! ${error}`);
  }
}
//->calcularTotal
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

export { calculateTotal, addItem, deleteItem, removeItem, displaycart };
