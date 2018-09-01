//Função sem retorno em js
function imprimirSoma(x, y) {
    console.log(x + y)
}
imprimirSoma(2, 3)

//Função com retorno, podemos tratar os valores, se eles não foram informados ele atribui o valor padrão
function soma(a = 0, b = 1){
    return a + b
}
console.log(soma(3,3))
//se não passarmos nada na função nos retorna o valor atribuido através do tratamento, informado nos parametros de entrada
console.log(soma())
