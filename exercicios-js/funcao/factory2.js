function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('maçã', 1.50))
console.log(criarProduto('banana', 0.50))
console.log(criarProduto('coco', 2.50))