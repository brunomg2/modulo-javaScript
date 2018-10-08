const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

const verificaSeCaro = produto => produto.preco >= 500
const verificaSeFragil = produto => produto.fragil

const produtosFiltrados = produtos.filter(verificaSeCaro).filter(verificaSeFragil)
console.log(produtosFiltrados)

