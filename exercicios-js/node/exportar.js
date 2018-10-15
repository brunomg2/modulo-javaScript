console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null //mesmo atribuindo nulo para exports module.exports continua com os dados atribuidos anteriormente assim como o this
console.log(module.exports)

//esses dados não serão exportados
exports = {
    nome: 'Teste'
}

console.log(module.exports)

//só será exportado o que estiver dentro de module.exports
//o this e o exports referenciam um endereço de memoria porem não atribui um objeto novo
//module.exports é um objeto ao criarmos referencias atraves do this e do exports 