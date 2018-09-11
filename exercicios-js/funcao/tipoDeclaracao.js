console.log(soma(3, 4)) //funcções declaradas no padrão function declaration são carregas antes do código sua chamada pode ser feita antes da declaração das funções
//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(4, 3))

//named functiiiion expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(4, 3))