// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível:',Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // essa ação não será executada
delete produto.tag //excluir e modificar é permitido
console.log(produto)

//Object.seal
//não é possível excluir nem adcionar elementos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'//não sera executado
delete pessoa.nome //não sera executado
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes