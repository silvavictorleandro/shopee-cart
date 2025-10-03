## Sobre o Projeto

Este projeto implementa um sistema de carrinho de compras simples inspirado no Shopee, permitindo gerenciar produtos com diferentes quantidades e calcular subtotais automaticamente.

**🎓 Projeto desenvolvido durante um curso na plataforma [DIO (Digital Innovation One)](https://dio.me/), como parte do aprendizado de JavaScript e desenvolvimento de aplicações Node.js.**

## Funcionalidades

- **Criação de Itens**: Crie produtos com nome, preço e quantidade
- **Gerenciamento do Carrinho**:
  - Adicionar itens ao carrinho
  - Remover unidades específicas (decrementa quantidade)
  - Deletar itens completamente
  - Calcular total do carrinho
  - Exibir conteúdo formatado do carrinho
- **Cálculo Automático**: Subtotal calculado automaticamente (preço × quantidade)

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior

### Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/shopee-cart.git
   cd shopee-cart
   ```

2. **Execute o projeto**
   ```bash
   node src/index.js
   ```

## Como Usar

### Criando Itens

```javascript
import createItem from "./services/item.js";

const item = await createItem("Produto", 29.99, 2);
// Cria um item com nome "Produto", preço R$ 29.99 e quantidade 2
```

### Gerenciando o Carrinho

```javascript
import * as cartService from "./services/cart.js";

const myCart = [];

// Adicionar item
await cartService.addItem(myCart, item);

// Remover uma unidade
await cartService.removeItem(myCart, item);

// Deletar item completamente
await cartService.deleteItem(myCart, "Produto");

// Exibir carrinho
await cartService.displayCart(myCart);

// Calcular total
await cartService.calculateTotal(myCart);
```

## Exemplo de Saída

```
Welcome to the Shopee cart!
Shopee cart list:
1. HotWheels Ferrari - R$ 20.99 | 1x | SubTotal: R$ 20.99
2. HotWheels Lamborghini - R$ 39.99 | 3x | SubTotal: R$ 119.97

Shopee cart list:
1. HotWheels Ferrari - R$ 20.99 | 1x | SubTotal: R$ 20.99
2. HotWheels Lamborghini - R$ 39.99 | 1x | SubTotal: R$ 39.99
```

## Tecnologias Utilizadas

- **JavaScript ES6+**: Módulos, async/await, arrow functions
- **Node.js**: Ambiente de execução
- **ES Modules**: Importação e exportação de módulos

## Conceitos Demonstrados

- **Modularização**: Separação de responsabilidades em diferentes arquivos
- **Factory Pattern**: Criação de objetos item
- **Array Methods**: `push`, `splice`, `findIndex`, `reduce`, `forEach`
- **Async/Await**: Programação assíncrona
- **ES6 Modules**: Sistema moderno de importação/exportação
