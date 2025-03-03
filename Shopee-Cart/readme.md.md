# 🛒 Sistema de Carrinho de Compras

Este projeto implementa um sistema simples de carrinho de compras em JavaScript, utilizando funções assíncronas para manipulação de itens no carrinho.

## 📌 Funcionalidades

- Criar itens com subtotal correto
- Adicionar itens ao carrinho
- Remover um item do carrinho (diminuir a quantidade)
- Deletar um item do carrinho (remover completamente)
- Exibir os itens do carrinho
- Calcular o valor total do carrinho

## 📂 Estrutura do Projeto

```
/services
  ├── item.js      # Módulo para criação de itens
  ├── cart.js      # Módulo para manipulação do carrinho
index.js           # Arquivo principal de execução
```

## 🚀 Instalação e Uso

1. Clone este repositório:
   ```sh
   git clone https://github.com/Eliel-DM/NodeCourse/Shopee-Cart.git
   cd Shopee-Cart
   ```

2. Instale o Node.js (se ainda não tiver).

3. Execute o projeto:
   ```sh
   node index.js
   ```

## 📜 Documentação das Funções

### **`createItem(name, price, quantity)`**
Cria um novo item para ser adicionado ao carrinho.

#### **Parâmetros**
- `name` (string): Nome do item.
- `price` (number): Preço unitário do item.
- `quantity` (number): Quantidade inicial do item.

#### **Retorno**
Retorna um objeto com os atributos `name`, `price`, `quantity` e uma função `subtotal()` que retorna o valor total do item.

---

### **`addItem(userCart, item)`**
Adiciona um item ao carrinho.

#### **Parâmetros**
- `userCart` (array): O carrinho de compras.
- `item` (object): O item a ser adicionado.

#### **Retorno**
Sem retorno.

---

### **`deleteItem(userCart, name)`**
Remove completamente um item do carrinho pelo nome.

#### **Parâmetros**
- `userCart` (array): O carrinho de compras.
- `name` (string): Nome do item a ser removido.

#### **Retorno**
Sem retorno.

---

### **`removeItem(userCart, item)`**
Diminui a quantidade de um item no carrinho. Se a quantidade for 1, o item não é removido automaticamente.

#### **Parâmetros**
- `userCart` (array): O carrinho de compras.
- `item` (object): O item a ser reduzido.

#### **Retorno**
Sem retorno.

---

### **`calculateTotal(userCart)`**
Calcula o valor total do carrinho somando os subtotais dos itens.

#### **Parâmetros**
- `userCart` (array): O carrinho de compras.

#### **Retorno**
Imprime o valor total no console.

---

### **`displaycart(userCart)`**
Exibe os itens do carrinho no console.

#### **Parâmetros**
- `userCart` (array): O carrinho de compras.

#### **Retorno**
Imprime a lista de itens no console.

---

## 🛠 Exemplo de Uso

```js
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const mycart = [];

const item1 = await createItem("Hot Wheels Fusca", 20.99, 3);
const item2 = await createItem("Hot Wheels Corsa", 30.99, 3);

await cartService.addItem(mycart, item1);
await cartService.addItem(mycart, item2);

await cartService.removeItem(mycart, item2);
await cartService.removeItem(mycart, item2);

await cartService.deleteItem(mycart, item1.name);

await cartService.displaycart(mycart);

console.log("Shopee Cart!");
```

---

Feito por [Eliel Dias Matos](https://github.com/Eliel-DM)