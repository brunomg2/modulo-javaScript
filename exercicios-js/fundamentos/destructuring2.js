const [a] = [10]
console.log(a)

const arr = [14,20,30]
const [n1,n2,n3] = arr

/**
 * extraindo dados de um array aninhado
 * os valores do lado direito sera o array de onde sera 
 * extraido os dados, do lado esquerdo onde serão atribuidos
 */
const [, [, nota]] = [[, 8,8], [9,6,8]]
console.log(nota)


