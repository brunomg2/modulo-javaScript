let num1 = 1
let num2 = 2

//Operação pós fixada
num1++
console.log(num1)

//Operação pré fixada 
--num1
console.log(num1)

/**
 * nesse exemplo num1 foi incrementado antes da comparação
 * enquanto num2 só foi decrementado após a comparação
 */
console.log(++num1 === num2--)
// depois do decremento comparando novamente conseguimos ver que num1 é diferente de  num2
console.log(num1 === num2)