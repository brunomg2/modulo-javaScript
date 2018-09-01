//um objeto é uma coleção de chaves e valor

//Criando m objeto
const produto = {}

//Atribuindo valores dinamicamente
produto.nome = 'celular ultra mega'
produto.preco = 4998.90

//produto['Desconto legal'] = 0.40 podemos usar espaço nos atributos
console.log(produto)

//outra forma de declarar um objeto colocando as propriedades dentro da notação literal do objeto
//utilizamos chave : valor
//podemos ter objetos dentro de outros objetos
const produto2 = {
    nome: 'camisa polo',
    preco: 79.90,
    propriedades: {
        cor: 'Azul',
        tecido: 'Algodão',
        descontos:{
            avista: 0.10,
            cartao: 0.5
        }
    }
}

console.log(produto2.propriedades.descontos)

