let valor //Não inicializada
console.log(valor)

valor = null //ausência de valor, não aponta para nenhum local de memoria
console.log(valor)
//console.log(valor.toString()) ERRO

const produto = {}
console.log(produto.preco) // undefined não gera Erro

produto.preco = 3.5

console.log(produto)

produto.preco = null //sem preco

console.log(!!produto.preco)

console.log(produto)

//para remover um atributo de um objeto podemos utiliza delete objeto.atributo

/*
const a = {nome:'bruno'}, const b = a, ao fazermos isso
não igualamos o valor mas sim a referencia do endereço de memoria
isso acontece com tipos array e objetos

já se usarmos tipos primitivos como let a = 1, let b = a ele cria a 
variavel b com o valor da variavel a e não o endereço de memoria pois estamos
usando tipos primitivos como int, float, string
*/
