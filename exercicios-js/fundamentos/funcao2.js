//criando funções armazenando em variaveis
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 2)

//Armazenando uma função arrowFunction em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 3))

//retorno implicito, retorna um valor sem nem mesmo declararmos o nome return
//se tivermos apenas um parametro podemos tirar os parenteses
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))