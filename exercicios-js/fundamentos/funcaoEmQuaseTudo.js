/*
    Quase tudo em javaScript é uma função inclusive um objeto
    uma classe também é uma função
*/
console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//Criando um objeto apartir de uma classe
const produto = new Produto
produto.nome = 'camisa'
produto.preco = 79.9

console.log(produto)
