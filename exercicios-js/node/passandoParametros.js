//para passar parametros de um modulo para outro atraves do node
//podemos usar uma função e os parametros dessa função estara dentro do modulo
module.exports = function (...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}